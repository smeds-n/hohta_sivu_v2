# Hohta Website Style Improvement Plan

## Vision Alignment
**Goal:** Clean, clear, premium brand that conveys "you're losing out when you don't utilize your solar panels as a brand asset."

**Current State:** 6/10 on premium scale — solid foundation, needs polish and micro-details.

---

## Priority 1: Visual Rhythm & Section Differentiation

### Problem
All content sections look identical, creating visual monotony. The eye has no "landmarks" to anchor to.

### Solution
Alternate section backgrounds and add subtle visual separators.

```css
/* Add to :root */
--bg-section-alt: #f8f9fa; /* Vapor Gray from your palette */

/* Alternate section backgrounds */
#section_1,
#section_3,
#section_5 {
  background-color: var(--bg-main);
}

#section_2,
#section_4 {
  background-color: var(--bg-section-alt);
  margin-left: -60px;
  margin-right: -60px;
  padding-left: 60px;
  padding-right: 60px;
}
```

### Alternative Approach: Subtle Top Borders
```css
section:not(:first-child) {
  border-top: 1px solid var(--accent-light);
  padding-top: calc(var(--spacing-section) - 1px);
}
```

---

## Priority 2: Hero Section Refinement

### Problem
The 50% flat black overlay feels heavy and dated. It contradicts the "clean and clear" vision.

### Solution A: Gradient Overlay (Recommended)
```css
body {
  background-image: 
    linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.7) 0%,    /* Darker at top for text readability */
      rgba(15, 23, 42, 0.4) 50%,   /* Lighter in middle */
      rgba(15, 23, 42, 0.6) 100%   /* Slightly darker at bottom for transition */
    ),
    url('hero-bg.jpg');
}
```

### Solution B: Lighter Overall with Text Shadow
```css
body {
  background-image: 
    linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), 
    url('hero-bg.jpg');
}

#above_fold h1 {
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
```

---

## Priority 3: Button Styling Upgrade

### Problem
`border-radius: 6px` feels generic. Premium brands commit to a distinctive button style.

### Solution: Pill-Shaped Buttons
```css
button {
  border-radius: 9999px; /* Pill shape */
  padding: 14px 28px;
  font-weight: 500;
  letter-spacing: 0.01em;
}

button.primary {
  background-color: var(--accent-dark);
  color: white;
  border: none;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.1);
}

button.primary:hover {
  background-color: #1e293b;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
  transform: translateY(-1px);
}

button.secondary {
  background-color: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
}

button.secondary:hover {
  border-color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.05);
}
```

---

## Priority 4: Feature Grid Enhancement

### Problem
The three-column feature grid lacks visual interest. Missing icons as noted in layout.md.

### Solution: Add Icons + Hover Effects
```css
.feature-item {
  padding: 24px;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: transparent;
}

.feature-item:hover {
  background: var(--bg-secondary);
  transform: translateY(-2px);
}

.feature-item h4 {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-item h4::before {
  content: '';
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 10px;
  flex-shrink: 0;
  /* Icon would be added via background-image or inline SVG */
}
```

### Icon Recommendations
Use Lucide Icons or Phosphor Icons (MIT licensed, consistent style):
- **Oma yhteys:** `signal` or `wifi`
- **Avaimet käteen:** `wrench` or `settings`
- **Yksi URL:** `globe` or `link`

---

## Priority 5: Footer / Visual Closure

### Problem
The page ends abruptly. No footer creates an unfinished feeling.

### Solution: Dark Footer Section
```css
.site-footer {
  background-color: var(--accent-dark);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-top: 80px;
}

.site-footer p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin: 0;
}

.site-footer a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.site-footer a:hover {
  color: white;
}
```

### HTML Addition
```html
<footer class="site-footer">
  <p>© 2026 Hohta. Kaikki oikeudet pidätetään.</p>
</footer>
```

---

## Priority 6: Spacing Refinement

### Problem
80px section padding creates too much vertical space, making content feel disconnected.

### Solution
```css
:root {
  --spacing-section: 64px; /* Reduced from 80px */
}

/* Tighter paragraph spacing in long-form sections */
#section_1 p {
  margin-bottom: 1rem; /* Reduced from 1.5rem */
}

/* More breathing room for feature grid */
.feature-grid {
  margin-top: 48px;
  margin-bottom: 0;
}
```

---

## Priority 7: Availability Tag Enhancement

### Problem
The tag is functional but doesn't stand out as a premium element.

### Solution
```css
.availability-tag {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px; /* Match button style */
}

/* Add a subtle pulse dot */
.availability-tag::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #22c55e; /* Green for "available" */
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## Priority 8: Paper Container Refinement

### Problem
The rounded corners are good, but the shadow could be more sophisticated.

### Solution
```css
.content-paper {
  border-radius: 32px; /* Slightly reduced for cleaner look */
  box-shadow: 
    0 0 0 1px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 12px 24px rgba(0, 0, 0, 0.06),
    0 32px 64px rgba(0, 0, 0, 0.04);
  margin-bottom: 0; /* Footer will handle bottom spacing */
}
```

---

## Implementation Order

1. **Hero gradient overlay** — Immediate visual impact
2. **Button styling** — Consistent premium feel
3. **Section backgrounds** — Visual rhythm
4. **Footer addition** — Proper closure
5. **Feature grid icons + hover** — Interactivity
6. **Availability tag** — Polish detail
7. **Spacing adjustments** — Fine-tuning
8. **Paper shadow** — Subtle refinement

---

## Visual Reference: Before/After Concept

```
BEFORE                          AFTER
┌─────────────────────┐        ┌─────────────────────┐
│ ▓▓▓ HERO (flat) ▓▓▓ │        │ ▓▓▓ HERO (gradient) │
│                     │        │     ◉ Tag with dot  │
│ [Button] [Button]   │        │ (●) (○) Pill btns   │
├─────────────────────┤        ├─────────────────────┤
│                     │        │ Section 1 (white)   │
│ Section 1           │        ├─────────────────────┤
│                     │        │ Section 2 (gray)    │
│ Section 2           │        │ [icon] [icon] [icon]│
│                     │        ├─────────────────────┤
│ Section 3           │        │ Section 3 (white)   │
│                     │        ├─────────────────────┤
│ Section 4           │        │ Section 4 (gray)    │
│                     │        ├─────────────────────┤
│ Section 5           │        │ Section 5 (white)   │
│                     │        ├─────────────────────┤
└─────────────────────┘        │ ▓▓▓ FOOTER ▓▓▓▓▓▓▓ │
                               └─────────────────────┘
```

---

## Notes

- All CSS changes maintain your existing color palette
- No copy changes required
- Icons should be added as inline SVGs for best quality
- Consider adding `scroll-behavior: smooth` to html for polish
- Test on mobile — some spacing values may need media query adjustments
