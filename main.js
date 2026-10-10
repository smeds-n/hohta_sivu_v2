/**
 * Hohta - Main JavaScript
 */

(function() {
  'use strict';

  /**
   * Fade-in animation on scroll
   */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    if (!elements.length) return;
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  /**
   * Smooth scroll for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Sticky mobile navigation
   */
  function initStickyNav() {
    const nav = document.querySelector('.site-nav');
    const sentinel = document.querySelector('.nav-sentinel');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelectorAll('.nav-links a');

    if (!nav || !sentinel || !toggle) return;

    function setOpen(isOpen) {
      nav.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        const isStuck = !entries[0].isIntersecting;
        nav.classList.toggle('is-stuck', isStuck);

        if (!isStuck) {
          setOpen(false);
        }
      }, {
        threshold: 0
      });

      observer.observe(sentinel);
    }

    toggle.addEventListener('click', () => {
      setOpen(!nav.classList.contains('is-open'));
    });

    links.forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });
  }

  /**
   * FAQ accordion
   */
  function initFaqAccordion() {
    document.addEventListener('click', event => {
      const question = event.target.closest('.faq-question');

      if (!question) return;

      const answer = document.getElementById(question.getAttribute('aria-controls'));

      if (!answer) return;

      const isOpen = question.getAttribute('aria-expanded') === 'true';

      question.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  }

  /**
   * Enquiry form handoff and confirmation state
   */
  function initEnquiryForm() {
    const form = document.getElementById('enquiry-form');
    if (!form) return;

    const redirect = form.querySelector('input[name="_redirect"]');
    const intro = document.getElementById('enquiry-intro');
    const note = document.querySelector('.form-note');
    const success = document.getElementById('kiitos');
    const params = new URLSearchParams(window.location.search);

    if (redirect) {
      const returnUrl = new URL(window.location.href);
      returnUrl.search = '';
      returnUrl.hash = 'kiitos';
      returnUrl.searchParams.set('submitted', '1');
      redirect.value = returnUrl.toString();
    }

    if (params.get('submitted') !== '1' || !success) return;

    form.hidden = true;
    if (intro) intro.hidden = true;
    if (note) note.hidden = true;
    success.hidden = false;
    window.requestAnimationFrame(() => {
      success.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /**
   * Initialize on DOM ready
   */
  function init() {
    initStickyNav();
    initFaqAccordion();
    initScrollAnimations();
    initSmoothScroll();
    initEnquiryForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
