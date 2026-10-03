---
project: Yijie Lu academic homepage
register: brand
aesthetic_direction: editorial / magazine
color_strategy: restrained
design_system: bespoke
design_variance: 3
motion_intensity: 1
visual_density: 6
---

# Locked design language

## Design Read

A clear research profile, with the information density of an academic directory and the reading rhythm of a short research note.

Every screen must read as the same product if placed side by side.

## Signature

A quiet university-red thread connects affiliation links, research terms, and publication venues. Clear titles, author lists and compact resource links establish the publications as the research focus; paper figures are omitted at the user's request. The interface must remain recognizably an academic homepage.

## Inspiration

- https://aaronliu0702.github.io/: take the sticky profile rail, open white layout, concise research bullets, publication figure/metadata pairing, venue badges, and compact paper links. Reference measures: Trebuchet MS, 15px body, 21px headings, approximately 190px sidebar, unboxed publication rows with separators. Reject the photo carousel, multi-colored affiliation chips, oversized shadows, external statistics badges, and duplicated Homepage/About navigation. Only use Yijie's own photo, facts, and paper figures.
- Existing Yijie Lu homepage: preserve the bilingual content, academic identity, Shanghai Jiao Tong University affiliation, advisor, research directions, educational history, and recorded honors/services. Use its existing Jekyll stack.
- Synthesis: the reference's publication hierarchy and profile organization, with a quieter university-red accent, larger reading type, progressive abstract disclosure, and a complete Chinese version.

## Color (locked)

| Role | OKLCH | Hex | Use |
| --- | --- | --- | --- |
| background / elevated | 1.000 0.000 0 | #ffffff | Page and controls |
| surface | 0.981 0.002 345.2 | #faf8f9 | Quiet hover/supplementary surfaces |
| text | 0.273 0.008 317.7 | #29262a | Main text and headings |
| muted / subtle | 0.503 0.017 322.4 | #69616a | Metadata and dates |
| accent / info | 0.462 0.152 16.2 | #9b263a | Links, focus, venue labels |
| accent-soft | 0.969 0.011 3.5 | #fcf2f4 | Affiliation and selected language background |
| border | 0.916 0.009 349.3 | #e8e1e4 | Separators only |
| success / warning / danger | Use text + explicit labels | See text/accent above | Copy confirmation/errors require readable words; no extra decorative status colors |

Contrast on white: text 14.95:1, muted 5.97:1, accent 7.69:1. Accent on accent-soft 7.01:1; text on surface 14.14:1. White on accent 7.69:1. Focus uses accent. Border alone cannot communicate control state.

Visual distribution: predominantly white, dark/tinted text and secondary surfaces, restrained red links and status labels. No gradients or dark-mode toggle in this change.

## Type (locked)

| Role | Family | Size/line-height | Use |
| --- | --- | --- | --- |
| display | Trebuchet MS, PingFang SC, Microsoft YaHei, sans-serif | 24px/1.3, 700 | Profile name and section headings |
| body | Same family | 16px/1.7, 400/700 | Introduction and readable paper text |
| metadata | Same family | 14px/1.55 | Authors, affiliations, links, dates |
| utility | Menlo, Consolas, monospace | 12px/1.6 | BibTeX only |

One family in multiple weights is the chosen contrast system. Trebuchet preserves the reference's familiar academic tone rather than importing a new generic font. Headings use balanced wrapping; body text uses pretty wrapping and approximately 65–75ch where practical. Do not fetch fonts remotely.

## Scales (locked)

- Spacing: 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.
- Radius: 4px small labels, 8px controls, 12px image frames, full for the portrait.
- Layout: max-width 1160px, desktop padding 24px, profile rail 208px, column gap 56px. Main content uses remaining width. Publications are full-width text rows without an illustration column. News uses a narrow month column and a flexible text column, stacking on small screens. The whole page stacks below 1024px.
- Portrait: 176px square on desktop/tablet and 120px square below 576px, circular crop, object-fit cover with appropriate vertical positioning. On small phones the portrait and identity stay side by side, with wrapping contact links below both.
- Touch controls: at least 44px height/width, language buttons 48px height; visible focus ring 2px with 2px offset.
- Z layers: normal 0, navigation dropdown 20, masthead 30.
- Motion: 150ms ease-out for color/background/opacity, scale 0.96 on button press. No page-load choreography. Reduced motion disables transitions and smooth scrolling.
- Shadow: none on content rows; optional 0 1px 3px rgba(0,0,0,.08) on selected language control. Images have 1px rgba(0,0,0,.1) outline.

## Voice

Plain, collegial, academic. Replace the repeated greeting emojis with a clear About heading and concise bio. Keep section glyphs only if they improve scanning, using the existing Font Awesome icon family for controls. Never add invented accomplishments, rankings, author roles, publications, internship history, or links. Labels: Paper / 论文; Abstract / 摘要; BibTeX; Copy / 复制; Copied / 已复制; Contact / 联系我.

## Cross-session consistency

Read this file first before later changes. The exact palette, one type family, open row layout, and bilateral language treatment remain the consistency source of truth.
