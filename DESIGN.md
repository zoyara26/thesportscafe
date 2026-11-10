# The Sports Cafe — Design System

Direction: **"Match night."** A neighbourhood cafe where the game is always on.
Dark stadium-night sections alternate with warm chalk-cream sections; one
floodlight-yellow primary for actions; turf green as the only accent. Headings
are set in a tall condensed face, like a scoreboard or a jersey number.

> Not based on UXKIN examples (not connected) — chosen from the brand, the menu
> and the sports theme.

## Color

| Token | Value | Role |
|---|---|---|
| `--ink` | `#111412` | Dark section background, body text on light |
| `--ink-2` | `#1B201C` | Cards on dark sections |
| `--line-dark` | `#2C332E` | Borders on dark |
| `--chalk` | `#F5F1E8` | Light section background, text on dark |
| `--chalk-2` | `#EAE4D6` | Cards / bands on light |
| `--line` | `#D6CFBF` | Borders on light |
| `--muted` | `#5D625C` | Secondary text on light (7.0:1 on chalk) |
| `--muted-dark` | `#A6ADA6` | Secondary text on dark (7.9:1 on ink) |
| `--primary` | `#FFC62E` | Floodlight yellow: primary buttons, active tab, highlights. Text on it is `--ink` (12.6:1) |
| `--primary-hover` | `#FFD562` | Primary button hover |
| `--accent` | `#1F8A4C` | Turf green: "veg" tags, live dot, small badges only (white text 4.6:1) |
| `--danger` | `#C8381E` | "Spicy"/non‑veg markers |

No gradients except a dark scrim over photos for legibility.

## Typography

- Display: **Anton** (Google Fonts), uppercase, weight 400, letter-spacing 0.01em.
- Body/UI: **DM Sans**, weights 400 / 500 / 700.

| Token | Size / line-height | Use |
|---|---|---|
| `--fs-hero` | clamp(3.5rem, 11vw, 8.5rem) / 0.9 | Hero headline |
| `--fs-h2` | clamp(2.5rem, 6vw, 4.5rem) / 0.95 | Section titles |
| `--fs-h3` | 1.5rem / 1.1 | Card titles (Anton) |
| `--fs-lead` | 1.25rem / 1.5 | Intro paragraphs |
| `--fs-body` | 1rem / 1.6 | Body |
| `--fs-small` | 0.875rem / 1.4 | Tags, meta |
| `--fs-eyebrow` | 0.8125rem / 1, 0.14em tracking, 700, uppercase | Eyebrows |

Body lines max 65ch.

## Spacing

4px base: `--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-5` 24 · `--s-6` 32 · `--s-7` 48 · `--s-8` 64 · `--s-9` 96 · `--s-10` 128.
Section padding: `--s-9` desktop, `--s-8` mobile. Content width 1200px, 16px gutter on phones, 32px from tablet.

## Shape and depth

- Radius: `--r-sm` 6px (tags, inputs) · `--r-md` 14px (cards, images) · `--r-pill` 999px (buttons, tabs).
- Shadow: `--shadow` `0 10px 30px rgb(0 0 0 / .18)` — only on hovered menu cards and the floating order bar.

## Components

- **Button primary**: yellow pill, ink text, 700, 48px tall. Hover `--primary-hover` + 2px lift. Focus: 3px `--chalk` outline + 2px offset on dark / `--ink` on light.
- **Button secondary**: transparent pill, 2px border in current text colour; hover fills with text colour, inverts text.
- **Quiet link**: underline on hover, 2px offset.
- **Tabs** (menu categories): pills; active = yellow fill; arrow keys move between tabs.
- **Menu card**: photo (4:3, radius md), Anton name, one-line description, price slot, veg/non-veg tag.
- **Nav**: sticky, ink background, wordmark left, links right, "Call to order" primary button; collapses to a menu button under 820px.
- **Footer**: ink, three columns (visit, hours, follow), collapses to one.
- **Ticker**: scrolling scoreboard-style band of menu items; pauses on hover and stops under `prefers-reduced-motion`.

## Imagery and icons

- Photos: free Unsplash photos (Unsplash License), real food close-ups, warm and saturated; always cropped with `object-fit: cover`, radius md, lazy-loaded with width/height set.
- Icons: inline SVG, 1.75px stroke, rounded caps (Lucide-style). No emoji as icons.
