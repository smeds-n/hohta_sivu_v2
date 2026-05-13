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

    toggle.addEventListener('click', () => {
      setOpen(!nav.classList.contains('is-open'));
    });

    links.forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });
  }

  /**
   * Initialize on DOM ready
   */
  function init() {
    initStickyNav();
    initScrollAnimations();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
