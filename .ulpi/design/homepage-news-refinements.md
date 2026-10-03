# Homepage news refinements

Follow DESIGN.md and preserve the existing bilingual academic homepage. This brief supersedes the caption, long September News, generic WeChat entry and separate funding-note requirements in homepage-news.md. These are user-requested corrections, not a redesign.

## Required content and component changes

1. Remove the entire Atum caption/link below the reading reflection in BOTH languages. Retain the philosophical sentence itself. Remove unused caption Sass. Source grounding remains in the design documentation only.
2. Profile image source is `/images/lu.png`, an existing tracked 659 x 899 PNG. Update the homepage include and `_config.yml` author avatar to keep legacy profiles consistent. Keep the existing 176/120px circular treatment and bilingual alt text. Do not edit the image file.
3. October English closings become exactly `Looking forward to meeting you in Suzhou!` and `Looking forward to meeting you in Hangzhou!`. Keep the factual invitations, event links and Chinese text.
4. September News should read as a short update, not a project/CV description. Remove the separate heading and replace its long paragraph:
   - Chinese: 我贡献的 `paper-writing` Skill 已合入 **MLNLP-World / Paper-Writing-Tips**，支持论文投稿前的自动化检查。
   - English: My `paper-writing` Skill was merged into **MLNLP-World / Paper-Writing-Tips**, helping automate pre-submission paper checks.
   - Link the repository name to https://github.com/MLNLP-World/Paper-Writing-Tips.
   - The contribution was merged September 26, 2026, verified in PR 16; keep month September 2026.
   - Use the user-provided article URL for MLNLP 公众号 / MLNLP on WeChat: https://mp.weixin.qq.com/s/xd23e68p-8QGd92ulObo6Q. Remove the old general-community URL. Do not invent a quoted article title or claim unavailable contents.
   - Display a compact, readable GitHub star count alongside the WeChat resource, linked to https://github.com/MLNLP-World/Paper-Writing-Tips/stargazers. Prefer a small existing Font Awesome star plus plain text such as `4,662 stars`, not a new image badge or a card.
   - GitHub's authenticated API currently verifies **4,662** stars on October 4, 2026. Seed the static text with that verified number so no-JS, blocked API and slow networks still show a count. Add one small optional background fetch from https://api.github.com/repos/MLNLP-World/Paper-Writing-Tips in homepage.js to update this number, validating a nonnegative integer `stargazers_count` and changing only textContent. Use en-US number formatting in both languages. Read-only request, no credentials/tokens/dependencies. Apply a short timeout; catch failures quietly and preserve the seed. No spinner, flashing counter or error banner.
5. Remove the separate funding acknowledgement paragraph. Add the fund as the seventh item INSIDE `.honors-list`, with the same strong title and muted secondary line as its sibling items:
   - Title English: Lei Jun Fund for Computer Science Innovation and Development
   - Title Chinese: 雷军计算机创新与发展资助基金
   - Secondary English: Funding recipient
   - Secondary Chinese: 获资助
   - No invented organization, date or amount. Remove unused funding-acknowledgement Sass. Keep the six existing items.

## Flows, states and acceptance

All new text remains bilingual. Header navigation, language preference, WeChat ID in About, motto, paper disclosures/copy and old anchors stay intact. Stars are a real linked metric explicitly requested by the user, so they supersede the earlier ban on unverified counters: initial verified seed -> optional live update -> retain seed on invalid/unavailable network. The star link and article wrap like existing 44px resource links on 320px phones. No dynamic count is required for reading the news.

Pre-flight: locked tokens/type/layout unchanged; no added cards/gradients/decorative counters; concise news update; profile dimensions preserve layout; readable verified fallback and meaningful links; six navigation items unchanged; seven parallel honors with mobile stacking. All applicable checks pass, with no new input/action flow and no critique axis below 3.

Root QA: image resolves and crop fits; no Atum caption/link remains; both English closings include `you`, no `fellow`; concise September row links the real repo/new WeChat article and displays verified/live stars; count failure/no-JS seed survives; exactly seven honors and no separate funding note; no horizontal overflow at 320/375/1440px; compile/whitespace/JS checks and console clean.

## Build handoff

Target: existing homepage_engineer. Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components. Own production code/data changes and local checks. No commits/push; root reviews and publishes.

## QA evidence

October 4, 2026: Liquid/Kramdown preview and Ruby Sass compilation passed; JavaScript syntax and `git diff --check` passed. Browser checks at 1440, 375 and 320px confirmed no horizontal overflow, the loaded 659 x 899 PNG, retained motto with zero Atum links/captions, two direct `meeting you` closings, the exact new WeChat article URL, seven parallel honors, and no publication images or separate funding note. Both languages and saved language preference worked, with no browser errors.

The real GitHub request returned HTTP 200 and displayed 4,662. Isolated preview-only API mocks verified that request failure and a negative count keep the verified seed, while a valid 12345 count updates to 12,345. These mocks live only in `/tmp`; production HTML contains a static seed for readers without JavaScript. Resource links remained 44px high and within the 320px viewport. Evidence screenshots: `/tmp/lu-homepage-revise-desktop.png`, `/tmp/lu-homepage-revise-news-en.png`, `/tmp/lu-homepage-revise-mobile-en.png`, `/tmp/lu-homepage-revise-honors-zh.png`.
