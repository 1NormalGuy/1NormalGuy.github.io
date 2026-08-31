---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Welcome!!!😘😘😘

I'm **Yijie Lu** (陆一杰)🐕. I am an undergraduate student at the School of Cyber Science and Engineering, [Wuhan University (WHU)](https://www.whu.edu.cn/), majoring in Cyberspace Security. I will be an incoming Ph.D. student at the School of Computer Science, [Shanghai Jiao Tong University (SJTU)](https://www.sjtu.edu.cn/), starting in 2026, under the supervision of Prof. [Zhuosheng Zhang](https://bcmi.sjtu.edu.cn/~zhangzs/).

My current research interests include AI Security and GUI Agent. I am actively seeking collaborations and look forward to connecting with more people. If you are interested in my work, please drop me an email!☀️

# 📝 Publications & Research
- **Communication Policy Evolution for Proactive LLM Agents** <br>
  *Accepted to EMNLP 2026 Main.* <br>
  LLM agents have rapidly evolved into autonomous systems, yet a persistent information gap remains between users and agents: communication is costly, while users' identical preferences further limit information exchange. To investigate how agents should communicate across modalities, this paper formalizes Communication Policy, establishes textual and UI-based policies, and then evaluates communication policies across diverse environments, personas, and model combinations. Building on information asymmetry for proactive agents, we set up two complementary settings, User--Agent and Planner--Executor. Experimental results reveal complementary strengths between interaction channels: text-based interaction often facilitates task performance, while structured UI improves agents' response quality and persona compliance. Motivated by that, a hybrid method that combines these advantages, we further propose Communication Policy Evolution (CPE), a self-evolution framework for refining communication policies through rollout and prompt-level evolution. Without model modification, CPE achieves the best task success across multiple settings using prompt refinement alone. Our findings identify communication behavior as a critical yet underexplored design dimension for LLM agents.

- **EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks** **[<a href="http://arxiv.org/abs/2505.14289">arXiv</a>]**  <br>
  *Accepted to ACL 2026 Findings.* <br>
  Graphical User Interface (GUI) agents powered by Multimodal Large Language Models (MLLMs) are increasingly deployed yet vulnerable to Environmental Injection Attacks (EIAs).However, current red-teaming methods are hindered by prohibitive computational costs and limited adaptability.A fundamental question remains unaddressed: does the bottleneck of attack success lie in visual perception or semantic understanding? Through controlled experiments, we observe that semantic deception, rather than visual appearance, serves as the primary determinant of attack success. Based on this insight, we introduce EVA, an evolutionary framework that evolves adversarial payloads exclusively within the semantic dimension.EVA employs a discovery-deployment framework to mine linguistic vulnerability patterns and distill them into generalizable rules.Experimental results across five representative victim agents demonstrate that EVA achieves up to 85% attack success rate, evolving benign seeds into successful attacks within only 1.18 to 1.71 iterations.This rapid convergence uncovers a dense semantic attack space in the model’s latent representation, unveiling a critical alignment paradox: the instruction-following capabilities reinforced by alignment training render agents inherently susceptible to authoritative, semantically deceptive environmental cues.
  
# 🎖 Scholarships and Honors
- **Outstanding Graduate of WHU** *Wuhan University*
- **Lei Jun Computer Science Undergraduate Scholarship** *Wuhan University & Xiaomi Inc.*
- **First Class Scholarship of WHU** *Wuhan University*
- **Merit Student** *Wuhan University*
- **LvMeng Scholarship** *Wuhan University*
- **Advanced Individual in Scientific and Technological Innovation** *Wuhan University*

# 📖 Educations
- *2026.09 - present*, **P.hD. in Cyberspace Security**, Shanghai Jiao Tong University, China.
- *2022.08 - 2026.06*, **B.E. in Cyberspace Security**, Wuhan University, China.
 
# 🎡 Activities & Services
- **Teaching Assistant**, *WHU-Jisuanke Joint Practical Training Course "Security Maker Practice"*, *Jun 2025 - Jul 2025*
  - Awarded "Top TA" for contributions to teaching, exercise explanation, and Q&A sessions.
- **Teaching Assistant**, *WHU-Jisuanke Joint Practical Training Course "Security Maker Practice"*, *Jul 2024 - Aug 2024*
  - Awarded "Excellent TA" for contributions to the one-month practical training course.
- **Main Member**, *SITS Skating Club*, *Aug 2022 - Jul 2024*
- **Member**, *Ziqiang Student Network Culture Studio*, *Aug 2022 - Jun 2024*
