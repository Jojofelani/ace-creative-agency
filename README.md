# ACE 3D Hero — Starter

A drop-in glass-crystal hero for the ACE Creative Agency portfolio redesign.
Hand-coded R3F geometry, glassy & elegant, with the three animation layers
(idle / cursor / scroll) already wired.

## Files

```
CLAUDE.md                          → context for Claude Code (keep at repo root)
components/Hero.tsx                 → the hero section (Canvas + copy + scroll)
components/GlassCrystal.tsx         → the glass object (geometry + material + motion)
providers/SmoothScroll.tsx         → Lenis momentum scroll, synced to ScrollTrigger
app/page-and-layout-example.tsx    → shows how to wire fonts + provider + hero
```

## Install

Since your site is already Next/React, just add the deps:

```bash
npm install three @react-three/fiber @react-three/drei gsap lenis
npm install -D @types/three
```

## Wire it up

1. Copy `components/`, `providers/`, and `CLAUDE.md` into your project.
2. Follow `app/page-and-layout-example.tsx` to add the font variables, wrap the
   app in `<SmoothScroll>`, and render `<Hero />`.
3. `npm run dev` and open the page.

You should see: a glass crystal that floats, tilts toward your cursor, and
rotates + drifts as you scroll.

## Handing it to Claude Code

Once it runs, open Claude Code in the project and start with prompts like:

- "Read CLAUDE.md. Then rebuild the section below the hero as a case-study grid
  using our real ACE projects."
- "The crystal tilts too far on cursor move — halve the cursor influence."
- "Add a preloader that fades out once the Canvas is ready."
- "Add a lighter mobile fallback: static crystal, no scroll motion, under
  ~500KB."

Because `CLAUDE.md` is at the root, Claude Code loads all the brand, stack, and
rules context automatically every session.

## Knobs worth turning first

In `GlassCrystal.tsx`:
- `icosahedronGeometry args={[1.4, 0]}` — bump the `0` to `1` or `2` for a
  smoother, more liquid crystal; swap for `torusKnotGeometry` for a different mood.
- `chromaticAberration`, `distortion`, `ior` — the character of the glass.
- The `damp(..., 3, delta)` factor — lower = heavier/laggier follow, higher =
  snappier. Keep it eased.

In `Hero.tsx`:
- `Environment preset` — this is where the refraction color comes from. Swap in
  an `.hdr` from Poly Haven to push the warm/cool ACE palette.
