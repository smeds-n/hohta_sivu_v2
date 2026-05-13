# AGENTS.md

## HOHTA Logo Rendering

Render the HOHTA logo as live text, not as an image or SVG, unless explicitly requested otherwise.

Use the exact text:

```html
<span class="logo">HOHTA</span>
```

Use these CSS settings, matching the original top-of-page logo from the `master` branch:

```css
.logo {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-primary);
}
```

If the logo is wrapped in a link, keep the wrapper undecorated:

```css
.logo-link {
  text-decoration: none;
}
```

The site-wide `--text-primary` value is `#0a0a0a`. Preserve the uppercase spelling and the `0.05em` letter spacing.
