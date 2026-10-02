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

<div data-lang="en" lang="en" markdown="1">

Welcome!!!😘😘😘

I'm **Yijie Lu** (陆一杰)🐕. I am a Ph.D. student at the School of Computer Science, [Shanghai Jiao Tong University (SJTU)](https://www.sjtu.edu.cn/), supervised by Prof. [Zhuosheng Zhang](https://bcmi.sjtu.edu.cn/~zhangzs/). I received my B.E. in Cyberspace Security from [Wuhan University (WHU)](https://www.whu.edu.cn/) in 2026.

My research focuses on **Self-Evolving Agents**, **Agent Reliability**, and **Agentic Post-Training**. I am actively seeking collaborations and look forward to connecting with more people. If you are interested in my work, please drop me an email!☀️

</div>

<div data-lang="zh" lang="zh-CN" markdown="1">

欢迎来到我的主页！😘😘😘

我是**陆一杰**（Yijie Lu）🐕，目前在[上海交通大学](https://www.sjtu.edu.cn/)计算机学院攻读博士学位，导师是[张倬胜](https://bcmi.sjtu.edu.cn/~zhangzs/)教授。我于 2026 年在[武汉大学](https://www.whu.edu.cn/)获得网络空间安全专业工学学士学位。

我的研究方向与兴趣是**智能体自主演化**、**智能体可靠性**和**智能体后训练**。欢迎交流与合作，如果你对我的研究感兴趣，欢迎通过邮件联系我！☀️

</div>

<h1 id="-publications--research"><span data-lang="en" lang="en">📝 Publications & Research</span><span data-lang="zh" lang="zh-CN">📝 论文与研究</span></h1>

<div data-lang="en" lang="en" markdown="1">

- **Communication Policy Evolution for Proactive LLM Agents** <br>
  *Accepted to EMNLP 2026 Main.* <br>
  LLM agents have rapidly evolved into autonomous systems, yet a persistent information gap remains between users and agents: communication is costly, while users' identical preferences further limit information exchange. To investigate how agents should communicate across modalities, this paper formalizes Communication Policy, establishes textual and UI-based policies, and then evaluates communication policies across diverse environments, personas, and model combinations. Building on information asymmetry for proactive agents, we set up two complementary settings, User--Agent and Planner--Executor. Experimental results reveal complementary strengths between interaction channels: text-based interaction often facilitates task performance, while structured UI improves agents' response quality and persona compliance. Motivated by that, a hybrid method that combines these advantages, we further propose Communication Policy Evolution (CPE), a self-evolution framework for refining communication policies through rollout and prompt-level evolution. Without model modification, CPE achieves the best task success across multiple settings using prompt refinement alone. Our findings identify communication behavior as a critical yet underexplored design dimension for LLM agents.

- **EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks** **[<a href="http://arxiv.org/abs/2505.14289">arXiv</a>]**  <br>
  *Accepted to ACL 2026 Findings.* <br>
  Graphical User Interface (GUI) agents powered by Multimodal Large Language Models (MLLMs) are increasingly deployed yet vulnerable to Environmental Injection Attacks (EIAs).However, current red-teaming methods are hindered by prohibitive computational costs and limited adaptability.A fundamental question remains unaddressed: does the bottleneck of attack success lie in visual perception or semantic understanding? Through controlled experiments, we observe that semantic deception, rather than visual appearance, serves as the primary determinant of attack success. Based on this insight, we introduce EVA, an evolutionary framework that evolves adversarial payloads exclusively within the semantic dimension.EVA employs a discovery-deployment framework to mine linguistic vulnerability patterns and distill them into generalizable rules.Experimental results across five representative victim agents demonstrate that EVA achieves up to 85% attack success rate, evolving benign seeds into successful attacks within only 1.18 to 1.71 iterations.This rapid convergence uncovers a dense semantic attack space in the model’s latent representation, unveiling a critical alignment paradox: the instruction-following capabilities reinforced by alignment training render agents inherently susceptible to authoritative, semantically deceptive environmental cues.

</div>

<div data-lang="zh" lang="zh-CN" markdown="1">

- **Communication Policy Evolution for Proactive LLM Agents** <br>
  *已被 EMNLP 2026 主会接收。* <br>
  大语言模型智能体正逐步发展为自主系统，但用户与智能体之间仍存在信息鸿沟：沟通具有成本，用户偏好也会限制信息交换。为研究智能体如何通过不同模态进行沟通，本文形式化定义了沟通策略（Communication Policy），建立了基于文本和用户界面的策略，并在不同环境、用户角色及模型组合下进行评估。围绕主动式智能体中的信息不对称问题，我们构建了用户—智能体（User–Agent）与规划者—执行者（Planner–Executor）两种互补场景。实验发现，两类交互渠道各有所长：文本交互通常有利于任务完成，而结构化界面能够提升回复质量及对用户角色设定的遵循程度。在此基础上，我们提出沟通策略演化（Communication Policy Evolution，CPE），通过任务执行轨迹与提示词层面的演化持续改进沟通策略。无需修改模型参数，CPE 仅通过优化提示词便在多个场景下取得了最佳任务成功率。研究表明，沟通行为是大语言模型智能体设计中重要但尚未得到充分研究的维度。

- **EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks** **[<a href="https://arxiv.org/abs/2505.14289">arXiv</a>]** <br>
  *已被 ACL 2026 Findings 接收。* <br>
  基于多模态大语言模型的图形用户界面（GUI）智能体正在得到广泛应用，但容易受到环境注入攻击（Environmental Injection Attacks，EIAs）。现有红队测试方法面临计算成本高、适应性不足的问题。攻击成功的关键究竟在于视觉感知还是语义理解？通过受控实验，我们发现，相比视觉外观，语义欺骗是决定攻击成功的主要因素。基于这一发现，我们提出 EVA，一个仅在语义层面演化对抗载荷的框架。EVA 采用发现—部署流程，挖掘语言层面的脆弱性模式，并将其提炼为可泛化的规则。在五种代表性目标智能体上的实验中，EVA 的攻击成功率最高达到 85%，平均仅需 1.18 至 1.71 次迭代即可将良性初始样本演化为成功攻击。这种快速收敛揭示了模型潜在表示中密集的语义攻击空间，也揭示出一个关键的对齐悖论：对齐训练强化的指令遵循能力，使智能体容易受到具有权威性、语义欺骗性的环境线索影响。

</div>

<h1 id="-scholarships-and-honors"><span data-lang="en" lang="en">🎖 Scholarships and Honors</span><span data-lang="zh" lang="zh-CN">🎖 奖学金与荣誉</span></h1>

<div data-lang="en" lang="en" markdown="1">

- **Outstanding Graduate of WHU** *Wuhan University*
- **Lei Jun Computer Science Undergraduate Scholarship** *Wuhan University & Xiaomi Inc.*
- **First Class Scholarship of WHU** *Wuhan University*
- **Merit Student** *Wuhan University*
- **LvMeng Scholarship** *Wuhan University*
- **Advanced Individual in Scientific and Technological Innovation** *Wuhan University*

</div>

<div data-lang="zh" lang="zh-CN" markdown="1">

- **武汉大学优秀毕业生** *武汉大学*
- **雷军计算机本科生奖学金** *武汉大学、小米集团*
- **武汉大学一等奖学金** *武汉大学*
- **武汉大学三好学生** *武汉大学*
- **绿盟奖学金** *武汉大学*
- **科技创新先进个人** *武汉大学*

</div>

<h1 id="-educations"><span data-lang="en" lang="en">📖 Education</span><span data-lang="zh" lang="zh-CN">📖 教育经历</span></h1>

<div data-lang="en" lang="en" markdown="1">

- *2026.09 - present*, **Ph.D. in Cyberspace Security**, Shanghai Jiao Tong University, China.
- *2022.08 - 2026.06*, **B.E. in Cyberspace Security**, Wuhan University, China.

</div>

<div data-lang="zh" lang="zh-CN" markdown="1">

- *2026.09 至今*，**网络空间安全博士在读**，上海交通大学。
- *2022.08 - 2026.06*，**网络空间安全工学学士**，武汉大学。

</div>

<h1 id="-activities--services"><span data-lang="en" lang="en">🎡 Activities & Services</span><span data-lang="zh" lang="zh-CN">🎡 活动与服务</span></h1>

<div data-lang="en" lang="en" markdown="1">

- **Teaching Assistant**, *WHU-Jisuanke Joint Practical Training Course "Security Maker Practice"*, *Jun 2025 - Jul 2025*
  - Awarded "Top TA" for contributions to teaching, exercise explanation, and Q&A sessions.
- **Teaching Assistant**, *WHU-Jisuanke Joint Practical Training Course "Security Maker Practice"*, *Jul 2024 - Aug 2024*
  - Awarded "Excellent TA" for contributions to the one-month practical training course.
- **Main Member**, *SITS Skating Club*, *Aug 2022 - Jul 2024*
- **Member**, *Ziqiang Student Network Culture Studio*, *Aug 2022 - Jun 2024*

</div>

<div data-lang="zh" lang="zh-CN" markdown="1">

- **助教**，*武汉大学—计蒜客联合实训课程「安全创客实践」*，*2025.06 - 2025.07*
  - 参与教学、习题讲解和答疑，获评「Top TA」。
- **助教**，*武汉大学—计蒜客联合实训课程「安全创客实践」*，*2024.07 - 2024.08*
  - 参与为期一个月的实训教学，获评「优秀助教」。
- **骨干成员**，*SITS 轮滑社*，*2022.08 - 2024.07*
- **成员**，*自强学生网络文化工作室*，*2022.08 - 2024.06*

</div>
