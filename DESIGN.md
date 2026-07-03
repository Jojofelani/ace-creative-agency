---
name: ACE Creative Agency
description: A glass-crystal agency portfolio where colour is bent light, not painted surface.
colors:
  ink: "#0B0B0F"
  paper: "#F5F3EF"
  gold: "#C9A24B"
  refract-cool: "#6C7BD6"
  refract-warm: "#E8A15C"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.75rem, 8vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.22em"
  accent:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "inherit"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  gutter: "1.5rem"
  section: "8rem"
  section-lg: "13rem"
components:
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
  nav-cta-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  hero-cta-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  hero-cta-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
  link-underline:
    textColor: "{colors.paper}"
    typography: "{typography.body}"
---

# Design System: ACE Creative Agency

## 1. Overview

**Creative North Star: "Light Through Glass"**

The whole system is refraction. Colour never arrives as a painted surface; it
arrives as bent light passing through glass. A hand-coded crystal idles in the
hero, spilling warm and cool light down into a deep, quiet page. That same light
logic recurs everywhere: section dividers are a cool-to-warm spectrum hairline,
the emotional peak (Work) carries a faint cool glow, the invitation (Contact)
warms toward the end of the spectrum. The room is grounded and warm, not clinical
or cold; the glow is the point.

This system spends its boldness exactly once. The crystal is the single loud
element, and it earns a whole viewport; everything below it stays disciplined,
dark, and typographic so the case-study work stays the picture and the 3D stays
the frame. It explicitly rejects the **generic dark-SaaS agency template**
(near-black plus one accent plus three identical feature cards plus an eyebrow
over every section), **corporate stock-photo polish**, and **cold Swiss/grid
minimalism**. Restraint here is warm and considered, never austere.

**Key Characteristics:**
- Colour is refraction, never paint. Ink and paper carry 95% of every surface.
- One bold moment (the crystal); everything else is quiet.
- Fraunces used sparingly for display; Hanken Grotesk carries all reading.
- Flat by default: depth is light and tonal wash, never a drop shadow.
- Everything eases. No linear motion, no snapping, anywhere.

## 2. Colors

A near-black room lit by a warm-and-cool refractive spectrum, with gold reserved
for the smallest marks.

### Primary
- **Ink** (#0B0B0F): The body background of the entire site. A deep, faintly
  cool near-black (never pure `#000`). It is the dark room the crystal lights.

### Secondary
- **Warm Refraction** (#E8A15C): The warm end of the crystal's spectrum. Feeds
  the hero light, the Contact glow, and the solid tint of the italic accent
  through-line. The dominant accent, in keeping with the grounded-and-warm mood.
- **Cool Refraction** (#6C7BD6): The cool end. Feeds the hero light, the Work
  section glow, and case-study tags. Always paired with warm, never alone.

### Tertiary
- **Ghana Gold** (#C9A24B): A muted, non-metallic gold. A single small-mark
  accent: link underlines, the keyboard focus ring, at most one CTA emphasis.
  Never a surface, never a heading fill.

### Neutral
- **Paper** (#F5F3EF): All foreground text and the light-fill CTAs. A warm
  off-white; on ink it reads as calm, not harsh. Used at full strength for
  headings, and at reduced opacity (70% body, 45% metadata) for hierarchy.

### Named Rules
**The Bent-Light Rule.** Colour enters only as refraction: the crystal's spill,
the cool-to-warm divider, the section washes. No flat colour fills on surfaces.
If a colour is painted rather than lit, it's wrong.

**The One-Gold Rule.** Gold is a mark, never a field. It appears on links, the
focus ring, and at most one accented CTA. The moment gold fills a heading or a
panel, the restraint is broken.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif fallback)

**Character:** A high-contrast display serif against a clean humanist grotesque,
paired on a true contrast axis. Fraunces carries all the personality and appears
only at display sizes and in one recurring italic; Hanken does every job of
reading, quiet and legible. Fraunces is a committed brand choice (named in the
brief), not a reflex pick.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 8vw, 6.5rem)`, 0.98): The hero line only.
  Sentence case, tight leading.
- **Headline** (300, `clamp(2.25rem, 5vw, 4.5rem)`, 1.05): Section headings.
  Light weight at large scale so they read as *set*, not typed. Sentence case.
- **Body** (400, 1rem, 1.6): Hanken, at 70% paper opacity. Cap measure at
  65–75ch.
- **Label** (400, 0.75rem, tracking 0.22em, uppercase): The rationed eyebrow and
  case-study tags. Used sparingly, not above every section.
- **Accent** (Fraunces italic, inherits size, 1.1): The recurring grounded idea,
  set solid in Warm Refraction. Descenders need `line-height: 1.1` clearance.

### Named Rules
**The One-Gradient Rule.** Exactly one gradient exists on the entire page: the
hero accent line ("worth looking at"), cool-to-warm. Everywhere else the accent
is a single solid warm tone. Gradient text is otherwise prohibited.

**The Italic Through-Line Rule.** The one idea the page is about (being grounded,
being felt) is always Fraunces italic, never bold, never a colour swap. Same
family, same treatment, every time, so the eye learns it.

## 4. Elevation

Flat by default. This system uses **no box-shadows at all**. Depth is conveyed
entirely by light: the crystal's refractive spill, faint cool/warm radial washes
behind key sections, and tonal separation of paper opacity against ink. Sections
are divided by a 1px refraction hairline, not by elevation or a boxed card.

### Named Rules
**The No-Shadow Rule.** Surfaces never lift on a drop shadow. If a section needs
to feel deeper, it gets more light (a wash) or more space, never a shadow. A
`box-shadow` on any element is a defect in this system.

## 5. Components

### Buttons
- **Shape:** Full pill (`9999px`) for all interactive affordances.
- **Primary (hero CTA):** Paper fill, ink text, `0.75rem 1.5rem` padding.
  High-contrast and quiet; the one clearly-clickable object in the hero. Hover
  brightens paper toward pure white.
- **Nav CTA ("Start a project"):** Transparent with a `1px` paper/25 border;
  on hover it inverts to a paper fill with ink text. The single contact-intent
  label, reused in the hero.
- **Secondary / link:** Paper text with a gold-tinted underline, `8px` offset;
  hover brings the underline to full gold. Used for "See the work" and the
  contact email.

### Cards / Containers
- Cards are largely avoided. Content is grouped by space and the refraction
  hairline, not by boxes. The only boxed elements are the case-study **visual
  slots** (`2px` radius, `1px` paper/10 border, a faint cool-to-warm inner wash)
  standing in for real imagery.

### Navigation
- Fixed, single line, ≤72px tall. Wordmark left; Work / Services text links plus
  one pill CTA right. Paper text on the dark hero; links lift from 70% to full
  paper on hover. On mobile the text links collapse and only the CTA remains.

### The Glass Crystal (signature component)
- A hand-coded R3F faceted icosahedron with a transmission material, lit by four
  custom Lightformers in the ACE palette (warm and cool sources, paper rims) so
  it refracts colour rather than the dark page. Three separated motion layers:
  idle float + slow rotation, damped cursor tilt, and scroll-driven rotation and
  drift. It occupies a full viewport, is hidden from assistive tech, and must
  degrade to a lighter or still crystal under reduced motion and on low-power
  devices.

### The Refraction Divider (signature component)
- A 1px `::before` hairline carrying a `transparent → cool → paper → warm →
  transparent` gradient. It replaces every grey rule on the page; the section
  break itself is "light through glass."

## 6. Do's and Don'ts

### Do:
- **Do** treat every colour as refraction: the crystal spill, the cool-to-warm
  divider, the section washes. Ink and paper own 95% of every surface.
- **Do** ease everything (power-out curves, Lenis momentum). Motion that eases
  reads designed and expensive.
- **Do** keep Ghana Gold to small marks only: links, focus ring, one CTA.
- **Do** set the recurring grounded idea in Fraunces italic, solid warm.
- **Do** ship real ACE work (Psalm 23, VivaLoKs) or a credible canvas/WebGL
  scene in the visual slots.
- **Do** hide the decorative canvas from assistive tech and keep real text and
  meta/OG in the DOM.
- **Do** ship a lighter or still crystal on mobile / low-power devices, and honor
  `prefers-reduced-motion`.

### Don't:
- **Don't** build the **generic dark-SaaS agency template**: near-black + one
  accent + three identical feature cards + a tiny uppercase eyebrow over every
  section.
- **Don't** use **corporate stock photography** or drop a colored block where a
  real case-study image belongs.
- **Don't** drift into **cold Swiss / grid minimalism** — austere, gridded,
  emotionally flat. This room is grounded and warm.
- **Don't** add any `box-shadow`. Depth is light, never elevation.
- **Don't** paint a surface with colour, or fill a heading with gold.
- **Don't** use gradient text anywhere except the single hero accent line.
- **Don't** snap or use linear motion, and don't let the crystal bury the work —
  spend boldness once.
