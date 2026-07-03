# ACE Creative Agency — Portfolio Site (3D Redesign)

This file is context for Claude Code. Read it before making changes.

## What we're building

A redesign of the ACE Creative Agency portfolio site. The existing site is
React/Next — we are refactoring it in place, reusing existing copy, case
studies, images, and logo. The goal of the redesign: a visitor should **leave
feeling more creative than when they arrived**. The site itself is the proof of
what ACE can do.

The signature move is a hand-coded **glass crystal** in the hero that idles,
reacts to the cursor, and transforms on scroll. The 3D is the frame; the case
study work is the picture. Do not let effects bury the work.

## Brand

- **Display type:** Fraunces (used with restraint, for headlines only)
- **Body type:** Hanken Grotesk
- **Mood:** glassy & elegant. Deep, quiet, premium. Color comes from light
  refracting through glass, not from painted surfaces.
- **Voice:** direct, conversational, reflective. Never generic agency-speak.
  Short declarative lines. (Match the tone of Chris's own writing.)

### Palette (starting point — refine as needed)
- Ink background:      #0B0B0F
- Paper white (text):  #F5F3EF
- Muted gold accent:   #C9A24B   (use sparingly — links, small marks)
- Cool refraction:     #6C7BD6   (feeds the glass environment)
- Warm refraction:     #E8A15C   (feeds the glass environment)

## Stack

- Next.js (App Router) + React + TypeScript
- three
- @react-three/fiber (R3F)
- @react-three/drei  (Environment, MeshTransmissionMaterial, Float)
- gsap + ScrollTrigger  (scroll orchestration)
- lenis  (smooth scroll / momentum — wired to ScrollTrigger)

## The three animation layers (don't collapse these)

1. **Idle** — the crystal is never fully still: slow float + slow rotation.
2. **Cursor** — tilts toward the pointer with DAMPING. Never snaps. This is the
   "it's reacting to me" moment.
3. **Scroll** — GSAP ScrollTrigger drives camera/rotation/material as the user
   scrolls; Lenis provides the momentum.

## The one non-negotiable rule

**Everything eases.** No linear motion, no snapping. Damping on cursor follow,
easing curves on scroll, momentum via Lenis. Eased motion reads as designed and
expensive; snapping reads as a broken widget. This single rule is most of why
premium sites feel the way they do.

## Build order (do NOT try to do it all in one pass)

1. Get the project running with the starter hero (already scaffolded).
2. Rebuild the 2D structure with real ACE content + brand + type.
3. Refine the hero crystal (form, refraction, motion feel).
4. Add scroll-driven section reveals (case studies).
5. Polish: preloader, transitions, micro-interactions.

## Quality floor (always)

- Responsive down to mobile. On mobile / low-power devices, ship a LIGHTER 3D
  scene or a static fallback — a heavy WebGL scene will stutter on mid-range
  Android on slow data (a real chunk of the audience in Ghana).
- Respect `prefers-reduced-motion`: kill idle + scroll motion, keep a still
  crystal.
- Real text + meta/OG tags live in the DOM (canvas content isn't crawlable).
- Visible keyboard focus. Preloader for heavy 3D assets — no white flash.

## Performance budget

Set and hold a max initial load size. Compress any imported models (Draco /
gltf-transform). Prefer procedural geometry (as in the starter) over heavy model
files where possible.
