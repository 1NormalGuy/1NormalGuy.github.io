# Homepage polish implementation brief

Every screen must read as the same product if placed side by side.

## Scope and stack

Polish the existing Jekyll homepage and publish through its existing GitHub Pages flow. This is a static academic portfolio with a bespoke visual system; retain Jekyll, Liquid, Sass, and plain JavaScript. Do not add React, build packages, animation libraries, new remote fonts, or a new hosting provider. Keep all existing bilingual facts and deep-link anchors.

## Journey and states

1. Visitor opens `/`, `?lang=en`, `?lang=zh`, or an existing section deep link. They see the profile and a concise bio, then three research directions.
2. Visitor scans two papers, sees venue/authors/figure and a short summary, follows the Paper link or expands the full Abstract. BibTeX is available inline and can be copied.
3. Visitor can switch language at the top right, with updated content, document title, and html lang. Selection persists, preserving the current anchor. URL selection takes precedence over local storage. Existing default is English.
4. Visitor reads Education, Honors, and Service and uses the actual email/GitHub/Scholar links to connect.

| State / edge case | Required treatment |
| --- | --- |
| Initial render / slow network | Static readable page; local portrait/figures with dimensions; no remote requests required for layout or paper metadata |
| Absent optional author contribution / code link | Omit the unverified marker/link. Do not display fake placeholders or disabled controls |
| Missing figure / offline image | Alt text; text layout remains usable; paper links and disclosure do not depend on the image |
| Language storage unavailable | Switching still works and URL preserves selection on reload |
| Refresh/back/deep link | Content/locale remain consistent; no lost section hash |
| BibTeX copy pending | Keep button label stable and avoid duplicate action |
| BibTeX copied | Polite bilingual aria-live confirmation, then reset after a short interval |
| Clipboard denied/unavailable | Show the selectable BibTeX and a readable bilingual fallback message |
| Narrow screens / long author list | Wrap metadata; never create page-wide horizontal overflow |
| JavaScript disabled | English content, native details/summary disclosures and actual links still work; hide inert language/copy-only controls if necessary |
| Session expiration / concurrent edits | Not applicable; no login, editing, or user account state |

## Components

### Header

Sticky clean header. Exactly five section navigation items: About, Publications, Education, Honors, Service, with matching Chinese labels. Remove the duplicate Homepage item; language group stays on the far right and outside the overflow navigation. Existing greedy-nav may be retained to minimize risk, provided buttons have accessible names and aria-expanded states, open/close reliably, and close on Escape. Header anchors open in the same tab. Main content uses scroll-margin-top to avoid being hidden by the header. Reduce-motion disables any smooth scrolling.

### Profile rail

Use `images/lu.png`, cropped 176px square to a circle, reduced to 120px below 576px. Name gets a clear hierarchy; role and school below it, then Shanghai location and the full email, GitHub, Google Scholar, and Twitter links. All social links have text labels on mobile too. Strip leading `@` from configured Twitter handle when constructing its URL. On desktop rail stays sticky below the header, with no overlapping content. On mobile it becomes a compact profile header: portrait and identity side by side with a 16px gap, contact links spanning both columns below and wrapping naturally. Do not retain the old unlabeled large icon-only presentation. Do not publish the unrelated existing Boheng Li CV.

### About and research interests

Use a clear bilingual About section, the existing current PhD bio, advisor and degree history. University affiliations have restrained accent-soft link treatment. Three vertical research-interest rows (not three equal cards): Self-Evolving Agents / 智能体自主演化; Agent Reliability / 智能体可靠性; Agentic Post-Training / 智能体后训练. Optional one-line descriptions explain each area without claiming new methods/results. One contact invitation using the real email.

### Publications

Two open, separated figure/text rows, not raised cards. Put the venue above/near each title, 240px real figure on the left and all text on the right, stack below 768px. Each row includes:

- Original title, preserved exactly.
- Existing accepted status: EMNLP 2026 Main for CPE; ACL 2026 Findings for EVA. These statuses are user-provided existing content.
- All authors in verified arXiv order, with **Yijie Lu** visually emphasized. Unknown contribution markers omitted until user confirms.
- Two or three meaningful topic labels, quiet surface/muted style, within the one-accent system.
- Original paper figure if available and a concise bilingual 1–2 sentence summary derived from the existing full abstract.
- Working Paper link and an optional verified Code/Project link only when a real URL is provided.
- Native details/summary for the full bilingual Abstract and BibTeX; retain the current full abstract text in both languages.
- A copy button for BibTeX with success/error feedback and a keyboard-accessible selectable fallback.

Do not fabricate citation/star counters. Store repeated paper metadata in `_data/publications.yml` and render through an include if that improves maintenance. Local figures and citations must have their source URLs recorded as comments/data, not as technical text in the public interface.

Verified paper metadata:

- CPE: https://arxiv.org/abs/2606.14314. Authors: Xinbei Ma, Jiyang Qiu, Yao Yao, Zheng Wu, Yijie Lu, Xiangmou Qu, Jiaxin Yin, Xingyu Lou, Jun Wang, Weiwen Liu, Weinan Zhang, Zhuosheng Zhang, Hai Zhao. arXiv year 2026.
- EVA: https://arxiv.org/abs/2505.14289. Authors: Yijie Lu, Manman Zhao, Tianjie Ju, Zihe Yan, Xinbei Ma, Yuan Guo, Daizong Ding, Gongshen Liu, Zhuosheng Zhang. arXiv year 2025 (original submission). Preserve displayed acceptance in 2026 separately.

Original framework figures are stored in `images/publications/`, with arXiv image source URLs and dimensions recorded in `_data/publications.yml`.

### Education, honors and service

Education is two dated open rows/timeline entries: SJTU PhD September 2026–present and WHU B.E. August 2022–June 2026, Cyberspace Security. Honors are a compact list, two columns on wide screens and one on small screens, without inventing dates. Services use dated rows with the two TA positions and preserved awards, followed by the two student club/studio entries. Preserve all six existing honors and all four existing activities. These three distinct section structures prevent monotony.

### Footer / accessibility

A quiet ending with the real contact link, no invented last-updated timestamp. One page h1 hierarchy, section h2s, paper h3s where possible, with the legacy IDs retained. Add a skip-to-content link. Landmark nav/aside/main, visible keyboard focus, meaningful image alt text and dimensions, aria-pressed language buttons, aria-live copy feedback. All normal text >=4.5:1, large/UI >=3:1. No animated counters or infinite effects.

## Design pre-flight

- Identity: one type family plus utility mono, one accent and radius scale, same English/Chinese components, no token exceptions.
- Anti-slop: zero invented achievements, three-card grids, gradients, decorative status dots, or new stylistic em dashes. This is a concrete academic profile rather than a general product landing page.
- Layout families: profile rail + reading column, figure/text publication rows, dated education rows, compact honor list.
- Navigation is five items; the primary action in each paper row is Paper, disclosure/copy subordinate.
- Contrast verified numerically in DESIGN.md; visible focus, motion preference, keyboard paths and 48px language controls specified.
- Relevant loading/partial/empty/error/refresh/back/offline cases covered; auth/payment states explicitly inapplicable.
- Self-critique: distinctiveness 3, hierarchy 4, consistency 4, accessibility 3, state coverage 3, copy 3, restraint 4, motion motivation 4 = 28/32. Revision: omit the reference's statistics badges and carousel because the user has no verified statistics/gallery and papers should remain the focus. Revision: use native disclosure to keep complete abstracts accessible without making the first view a wall of text.

## Build handoff

Target: `homepage_engineer`, a delegated static-site engineering agent. Design system: bespoke static/Liquid components already used in this repository, themed with the locked tokens; no installation needed.

Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components. Keep the output compatible with the existing legacy GitHub Pages build. Do not commit/push; the design lead reviews and publishes. Exclude `.ulpi` from site output if necessary. Preserve the cache-versioned CSS/locale script URLs.

Acceptance: both languages complete; no invented facts/dead links; real figure assets/author highlighting; native abstract/BibTeX disclosure and clipboard fallback; all existing deep links; 320/375/768/1440px without overflow; keyboard and reduced-motion support; page title/lang/preference correct; no console errors; all original honors/activities preserved; local Liquid/Kramdown and Ruby Sass preview builds; concise implementation summary with changed files and any limitations.

## Verification record

Local Liquid/Kramdown and legacy Ruby Sass 3.7.4 rendering passed, as did JavaScript syntax and whitespace checks. Browser QA covered 1440px desktop, 768px tablet, and 375/320px phones with no horizontal overflow. Both languages render correctly, including image alt text and accessible labels; saved language, URL selection, and section hashes were checked. Native abstracts and citations expand correctly. Clipboard success and denial were verified using a mock clipboard, leaving the user's clipboard untouched; denied copying selects the citation and displays a translated fallback. The mobile menu opens, closes after navigation, and closes with Escape while restoring focus. Reduced-motion preference removes transitions. A script-free preview retains readable English, links, navigation and native disclosures while hiding inert language/copy controls. No browser errors were reported.

Visual QA prompted one revision: the small-phone profile uses a 120px portrait beside the identity to bring the introduction into view sooner. Other content remains based on the existing user-provided bio, education, honors, services and publication acceptance statuses; internships/CV await optional user-supplied facts.
