# Copilot Prompt: Replace Existing Hero Section (No Swirl / No Spinning Badge)

Use this prompt with GitHub Copilot Chat to replace your current portfolio
hero section with the new design. Open your existing hero component file
in the editor first so Copilot has it in context (or prefix the prompt
with `@workspace` so it searches the whole project for the right file).

---

```
Replace the hero section in this portfolio with a new design. Find the
existing hero component (likely named Hero, HeroSection, or similar, or
the top section of the homepage) and replace its JSX and styles entirely,
while keeping it wired into the rest of the app (same export name, same
import path, same props if any are passed in from the parent).

Match the existing project conventions: if it uses Tailwind, use Tailwind
classes instead of inline styles; if it uses CSS modules, create a
matching .module.css file; if it's plain CSS, add to the existing
stylesheet using the project's existing class naming pattern. Reuse any
existing design tokens (colors, fonts, spacing scale) already defined in
the project (e.g. tailwind.config, CSS variables, theme file) instead of
introducing new ones, unless a token is missing.

NEW HERO SECTION SPEC:

LAYOUT (top to bottom):
1. A top nav bar with:
   - Left: a circular logo badge with a letter on a solid or gradient
     background, next to the brand/site name in bold
   - Center: nav links (use my existing site's actual nav items)
   - Right: a dark pill-shaped "Download CV" button with a small
     down-arrow icon

2. A centered hero body with:
   - A vertical rail on the far left with small circular icon links to
     my social profiles, each in a thin-bordered circle
   - A centered portrait image clipped into an arch shape (border-radius:
     150px 150px 0 0), rendered in grayscale via CSS filter, sitting on a
     soft gray gradient background
   - Below the portrait: my name as a large bold heading, and a smaller
     uppercase letter-spaced role/title subtitle underneath

3. A full-width bottom strip with a light gradient background, showing
   grayscale client/brand logos evenly spaced

STYLING:
- Off-white background with a subtle SVG fractal-noise grain texture
  overlay (low opacity, multiply blend mode)
- Two large faint outlined circular arcs as decorative elements in
  opposite corners, behind the content
- Palette: near-black text, muted gray secondary text — match my
  existing brand color(s) if already defined in the project
- Bold sans-serif for the name, wide letter-spacing on the uppercase
  subtitle

RESPONSIVENESS:
- Hide nav links and the social rail below 720px width
- Logo strip wraps and centers on small screens

ACCESSIBILITY:
- aria-label on all icon-only links
- aria-hidden="true" on decorative SVGs
- Visible focus outline on the CTA button

Do NOT include any decorative swirl/loop line graphic and do NOT include
any spinning/rotating badge or animated circular text element. Keep the
hero static and clean around the portrait — no extra decorative SVG
elements near the image besides the arch shape itself.

Before writing code, show me which file(s) you're going to modify. Then
replace the old hero markup/styles completely — don't leave the old
version commented out or unused code behind.
```

---

## Tips

- **Open the hero file first.** Copilot Chat in VS Code uses open tabs and
  recent files as context, so it'll find and edit the real component
  instead of guessing.
- **Use `@workspace`** in Copilot Chat if you want it to search your whole
  project for the hero file rather than only the active tab.
- **Fill in the placeholders** — nav items, social links, name, role — with
  your real content, or leave them as-is and let Copilot pull them from
  your existing code/data.
