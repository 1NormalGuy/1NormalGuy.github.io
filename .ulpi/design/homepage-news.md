# Homepage content update

This feature follows DESIGN.md and supersedes the earlier figure-based publication and five-item navigation requirements in homepage-polish.md. Keep the existing editorial layout, red accent, typography, language selection and all existing facts and anchors. No new dependencies.

## Scope and flows

Visitors can read the profile, contact by email or the provided WeChat ID, see recent news, read papers, and browse education/honors/services in either language. Add a sixth navigation item News / 近况 after About, targeting #news. News belongs after About and before Publications. Existing same-tab section navigation and mobile menu behavior remain.

No new JS interaction is needed. Keep native abstract/BibTeX disclosures and copying. Slow network and JavaScript-disabled behavior remain static readable English with native links/disclosures. Month labels and long English copy wrap without horizontal overflow at 320/375/768/1440px. Source URLs are real external links; never invent social-account deep links.

## Content and components

### About additions

Add in the main About content, beside/below the existing contact invitation:

- Chinese: 也欢迎添加微信交流：**SJTUcs0416**。
- English: You can also reach me on WeChat: **SJTUcs0416**.

Do not move this only into the sidebar or turn it into a nonworking app URL.

Then add a restrained reading reflection, normal body-size type with a small linked source caption. It is the user's original reading reflection, not a verbatim quote attributed to Atum. No oversized quotation marks or hero treatment.

- Chinese: 在因果的边界内拓展自由，在世界的变迁中更新自我，让意义从行动中生长。
- English: Within the bounds of causality, widen the space for freedom; amid a changing world, renew the self and let meaning grow through action.
- Caption Chinese: 读 Atum 随笔有感
- Caption English: Reflections after reading Atum
- Caption link: https://atum.li/cn/

Grounding: https://atum.li/cn/blog/meaning-of-human-life/ (freedom within limits and meaning through action); https://atum.li/cn/blog/break-inertia-embrace-change/ (reassess goals/methods amid change); https://atum.li/cn/blog/zhuangzi/ (internal independence and an expanded perspective). The line synthesizes these ideas without promising that the author will agree or endorsing the blog's scientific claims.

### News

Use an open dated list with existing date/text styling, subtle separators or whitespace. No cards, banners, news icons or invented milestones. Include three entries, latest first, preserving order for the two October items. Use month-level dates as supplied by the user. Prefer a maintainable _data/news.yml if useful.

1. Date: 2026-10 / Oct 2026 / 2026 年 10 月.
   - Chinese: 受邀参加 **NVIDIA 中国开发者日**，将赴江苏苏州与开发者交流。期待在苏州相遇！
   - English: Invited to attend **NVIDIA China Developer Day** in Suzhou, Jiangsu. Looking forward to meeting fellow developers there!
   - Link the event name: https://www.nvidia.cn/developer-day/
   - User-provided invitation. Official page verifies the Suzhou event in October 2026; do not imply a speaker role.
2. Date: 2026-10 / Oct 2026 / 2026 年 10 月.
   - Chinese: 受邀参加 **浙江省人工智能领域博士浙江行活动**，将赴浙江杭州交流学习。期待在杭州相遇！
   - English: Invited to an **AI-focused doctoral exchange program in Zhejiang**, with activities in Hangzhou. Looking forward to meeting fellow researchers there!
   - Link the event name: https://zcps.rlsbt.zj.gov.cn/028/client/page6/table274.jsp?column1=8ad50053a05dbc2d01a06a7fb80464b8&t=1788480000051
   - Invitation and program description supplied by the user; no inferred dates, organizers or awards.
3. Date: 2026-09 / Sep 2026 / 2026 年 9 月.
   - Title Chinese: MLNLP-World / Paper-Writing-Tips：论文写作 Skill
   - Title English: MLNLP-World / Paper-Writing-Tips: paper-writing Skill
   - Chinese: 为开源项目贡献了可安装的 `paper-writing` Skill，将论文写作建议整理为覆盖 LaTeX 排版、公式、图表、学术表达与参考文献的检查规则，并配套投稿前终检清单和使用说明，支持自动化投前检查。
   - English: Contributed an installable `paper-writing` Skill to the open-source project, turning paper-writing advice into checks for LaTeX formatting, equations, figures and tables, academic language, and references, with a final submission checklist and usage guide for automated pre-submission review.
   - Resources: GitHub -> https://github.com/MLNLP-World/Paper-Writing-Tips; MLNLP 公众号 / MLNLP on WeChat -> https://mp.weixin.qq.com/s/mRXbfm4aJQb0FMB6YQy1QQ
   - The WeChat URL is the entry linked by the MLNLP community's official website footer, not asserted as a publication about this Skill. Do not label it as a Skill announcement.
   - Verified user contribution merged September 26, 2026: https://github.com/MLNLP-World/Paper-Writing-Tips/pull/16. PR is recorded here; the requested public resource link is the repository.

### Publications

Remove the complete publication figure/link markup, and remove the figure column from all responsive breakpoints. Each publication's body occupies full available width. Retain titles, venues, accepted statuses, full author order, emphasized Yijie Lu, tags, concise summaries, Paper links, full abstracts and BibTeX. Existing diagram files/source metadata may remain archived; they must not be displayed or requested by the homepage. No empty image placeholders.

### Honors funding acknowledgement

Add an acknowledgement paragraph in the existing scholarships/honors section, separate from the six honors to make the support statement clear:

- Chinese: 获雷军计算机创新与发展资助基金资助。
- English: Supported by the Lei Jun Fund for Computer Science Innovation and Development.

Use existing body/muted styles. No amount, date, scope of funded work or link has been supplied; add none.

## Design pre-flight and acceptance

Identity, token scales, type, focus, contrast and motion remain locked. Six navigation items fit the existing desktop header; mobile stays collapsible and languages remain directly accessible. New content uses paragraphs, real links, semantic dated lists and text-only publications. No decorative cards/gradients, fabricated roles or source misattribution. States inherit the previously verified language/storage/no-JS/copy behaviors. Self-critique: hierarchy 4, consistency 4, accessibility 4, state coverage 3, copy 4, restraint 4; no axis <=2. All applicable pre-flight checks pass.

Acceptance: exact-case WeChat ID in main body; all three dated News items and real links in both languages; funding acknowledgement; original reflection with clear reading-context caption; zero paper image markup/fetches and zero empty figure column at every breakpoint; old anchors/language/abstract/citation behavior intact; Liquid/Kramdown, Ruby Sass, JavaScript syntax and whitespace checks; desktop/mobile visual QA; no console errors.

## Build handoff

Target: existing homepage_engineer. Implement exactly this spec. Theme the design system with our locked tokens; do NOT redesign or re-implement its components. Static Jekyll/Liquid/Sass only. Own production code/data changes, no commit/push. Root owns research, design docs, review and publishing.

## Verification record

Liquid/Kramdown and legacy Ruby Sass rendering, JavaScript syntax checks and git diff --check passed. Browser QA verified both languages, all six navigation targets, exact WeChat ID in the main body, reading reflection/source caption, funding acknowledgement, and three dates in the requested order. Event URLs, repository and official-community-provided WeChat entry match the source links. There are no publication images or image requests; paper bodies span their full rows at 320/375/768/1024/1440px without page overflow. Mobile News navigation closes the menu and scrolls to the heading. Full abstracts and BibTeX still expand with the copy control present. Original honors, activities and author highlighting remain. No browser errors were reported. The WeChat host presents an environment-verification challenge to automated requests; the linked URL is grounded in MLNLP's current official website, and is not labeled as a Skill announcement.
