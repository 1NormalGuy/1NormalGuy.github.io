# Portrait framing and concise personal statement

Follow DESIGN.md. This is a correction to the existing academic profile, preserving its white/red editorial direction, layout, controls and research content.

## Requested changes

1. The tall 659 x 899 `images/lu.png` is currently enlarged to fill a square circle with `object-fit: cover`, clipping too much of the portrait and placing the hair against the frame. Keep the 176px desktop and 120px phone circular outline, but fit the whole image proportionally using `object-fit: contain`, centered on the white background. This reduces the image width to roughly 73% of the frame and shows more shoulders and breathing room. Do not stretch, edit the source image, introduce new assets or shrink the outer layout box. No wrapper is needed if the existing image rounds and clips correctly; visually check both sizes.
2. Replace the long philosophical sentence in `.reading-reflection`:
   - Chinese: `循因求真，自省日新，知行合一。`
   - English: `Seek truth through causes; renew through reflection; unite knowledge and action.`
   - The Chinese consists of three four-character phrases. Keep the quiet existing paragraph treatment; no attribution or link.
3. The user withdrew the requested AGI invitation while the first revision was deploying. Remove that added sentence in BOTH languages. The second About paragraph contains only the original research focus:
   - Chinese: `我的研究关注能够自主改进、可靠运行的智能体。`
   - English: `My research focuses on building agents that improve autonomously and operate reliably.`
   - No invitation to build AGI should appear on the public homepage.

## Flows and states

No new interaction is introduced. The motto uses the existing bilingual structure and persists with the language switch. The photo is a static local image with the existing intrinsic dimensions and alt text; its white background should blend with the frame. It reserves its current layout size while loading; alt text still applies on failure. Language switching, mobile navigation, News star count, publication disclosures and contact links retain their existing behavior.

## Pre-flight and acceptance

DESIGN.md was reread and its portrait rule updated in response to the user's screenshot. Existing palette/type/spacing/radius/motion are retained; there are zero new off-system values, fonts, colors, cards, controls or decorative effects. Contrast, focus, reduced motion and touch targets are unchanged. The correction directly addresses this portrait rather than changing the page's design. Critique scores: distinctiveness 3, hierarchy 3, consistency 4, accessibility 4, states 3, copy 3, restraint 4, motion 4 (28/32); no axis at or below 2. All applicable pre-flight checks pass; navigation counts are unchanged.

QA: view the actual circle at 1440px and 375/320px; hair is separated from the top of the frame, the face remains proportional and shoulders are visible. Both languages contain the short motto, and neither the old long reflection nor the withdrawn AGI invitation remains. No horizontal overflow; photo still resolves; Sass/Liquid and whitespace checks pass. Final GitHub Pages build and public page smoke check are required after push.

## Build handoff

Target: existing homepage_engineer. Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components. Own production UI and local checks; likely `_sass/_homepage.scss` and `_pages/about.md` only. Re-render `/tmp/lu-homepage-preview` using the existing preview.rb and compile Ruby Sass 3.7.4 with cache disabled. Do not commit/push; root owns visual QA and publication.

## Local QA evidence

October 4, 2026: Liquid/Kramdown render, Ruby Sass compilation and whitespace checks passed. Actual browser screenshots at 1440, 375 and 320px showed the proportional portrait, visible shoulders and top/side white space in the preserved 176/120px circle. Both languages displayed their new motto, with the old reflection absent, no horizontal overflow and no browser errors. Screenshots: `/tmp/lu-homepage-portrait-desktop-zh.png`, `/tmp/lu-homepage-portrait-mobile-zh.png`, `/tmp/lu-homepage-portrait-mobile-en.png`. These initial screenshots include the subsequently withdrawn AGI sentence; the final acceptance check must confirm its absence.
