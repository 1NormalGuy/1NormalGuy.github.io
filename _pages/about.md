---
permalink: /
title: ""
excerpt: "Yijie Lu, Ph.D. student at Shanghai Jiao Tong University. Research on self-evolving agents, agent reliability, and agentic post-training."
author_profile: true
homepage: true
redirect_from:
  - /about/
  - /about.html
---

<section class="homepage-section about-section" aria-labelledby="about-me">
  <h2 id="about-me"><span data-lang="en" lang="en">About</span><span data-lang="zh" lang="zh-CN">关于我</span></h2>
  <div class="about-copy" data-lang="en" lang="en">
    <p>I'm <strong>Yijie Lu</strong> (陆一杰), a Ph.D. student at the School of Computer Science, <a class="affiliation-link" href="https://www.sjtu.edu.cn/">Shanghai Jiao Tong University (SJTU)</a>, supervised by Prof. <a href="https://bcmi.sjtu.edu.cn/~zhangzs/">Zhuosheng Zhang</a>. I received my B.E. in Cyberspace Security from <a class="affiliation-link" href="https://www.whu.edu.cn/">Wuhan University (WHU)</a> in 2026.</p>
    <p>My research focuses on building agents that improve autonomously and operate reliably.</p>
  </div>
  <div class="about-copy" data-lang="zh" lang="zh-CN">
    <p>我是<strong>陆一杰</strong>（Yijie Lu），目前在<a class="affiliation-link" href="https://www.sjtu.edu.cn/">上海交通大学</a>计算机学院攻读博士学位，导师是<a href="https://bcmi.sjtu.edu.cn/~zhangzs/">张倬胜</a>教授。我于 2026 年在<a class="affiliation-link" href="https://www.whu.edu.cn/">武汉大学</a>获得网络空间安全专业工学学士学位。</p>
    <p>我的研究关注能够自主改进、可靠运行的智能体。</p>
  </div>
  <h3 class="research-heading"><span data-lang="en" lang="en">Research interests</span><span data-lang="zh" lang="zh-CN">研究方向与兴趣</span></h3>
  <ul class="research-interests">
    <li><strong><span data-lang="en" lang="en">Self-Evolving Agents</span><span data-lang="zh" lang="zh-CN">智能体自主演化</span></strong><span class="research-interest-description"><span data-lang="en" lang="en">Learning from experience to improve agent capabilities and behavior.</span><span data-lang="zh" lang="zh-CN">从经验中学习，持续改进智能体的能力与行为。</span></span></li>
    <li><strong><span data-lang="en" lang="en">Agent Reliability</span><span data-lang="zh" lang="zh-CN">智能体可靠性</span></strong><span class="research-interest-description"><span data-lang="en" lang="en">Understanding failures and making agents dependable in real environments.</span><span data-lang="zh" lang="zh-CN">理解失败机制，提升智能体在真实环境中的可靠性。</span></span></li>
    <li><strong><span data-lang="en" lang="en">Agentic Post-Training</span><span data-lang="zh" lang="zh-CN">智能体后训练</span></strong><span class="research-interest-description"><span data-lang="en" lang="en">Post-training for effective decision-making and interaction.</span><span data-lang="zh" lang="zh-CN">通过后训练提升智能体的决策与交互能力。</span></span></li>
  </ul>
  <p class="contact-invitation"><span data-lang="en" lang="en">I welcome discussions and collaborations. Feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>.</span><span data-lang="zh" lang="zh-CN">欢迎交流与合作，感兴趣的话可以<a href="mailto:{{ site.author.email }}">通过邮件联系我</a>。</span></p>
  <p class="contact-wechat"><span data-lang="en" lang="en">You can also reach me on WeChat: <strong>SJTUcs0416</strong>.</span><span data-lang="zh" lang="zh-CN">也欢迎添加微信交流：<strong>SJTUcs0416</strong>。</span></p>
  <div class="reading-reflection">
    <p><span data-lang="en" lang="en">Seek truth through causes; renew through reflection; unite knowledge and action.</span><span data-lang="zh" lang="zh-CN">循因求真，自省日新，知行合一。</span></p>
  </div>
</section>

<section class="homepage-section news-section" aria-labelledby="news">
  <h2 id="news"><span data-lang="en" lang="en">News</span><span data-lang="zh" lang="zh-CN">近况</span></h2>
  {% include news.html %}
</section>

<section class="homepage-section publications-section" aria-labelledby="-publications--research">
  <h2 id="-publications--research"><span data-lang="en" lang="en">Publications</span><span data-lang="zh" lang="zh-CN">论文与研究</span></h2>
  <div class="publication-list">
    {% for paper in site.data.publications %}{% include publication.html paper=paper %}{% endfor %}
  </div>
</section>

<section class="homepage-section education-section" aria-labelledby="-educations">
  <h2 id="-educations"><span data-lang="en" lang="en">Education</span><span data-lang="zh" lang="zh-CN">教育经历</span></h2>
  <ol class="education-timeline">
    <li>
      <p class="timeline-date"><span data-lang="en" lang="en">Sep 2026–present</span><span data-lang="zh" lang="zh-CN">2026.09 至今</span></p>
      <div class="timeline-content"><h3><a href="https://www.sjtu.edu.cn/"><span data-lang="en" lang="en">Shanghai Jiao Tong University</span><span data-lang="zh" lang="zh-CN">上海交通大学</span></a></h3><p><span data-lang="en" lang="en">Ph.D. in Cyberspace Security</span><span data-lang="zh" lang="zh-CN">网络空间安全博士在读</span></p></div>
    </li>
    <li>
      <p class="timeline-date"><span data-lang="en" lang="en">Aug 2022–Jun 2026</span><span data-lang="zh" lang="zh-CN">2022.08–2026.06</span></p>
      <div class="timeline-content"><h3><a href="https://www.whu.edu.cn/"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></a></h3><p><span data-lang="en" lang="en">B.E. in Cyberspace Security</span><span data-lang="zh" lang="zh-CN">网络空间安全工学学士</span></p></div>
    </li>
  </ol>
</section>

<section class="homepage-section honors-section" aria-labelledby="-scholarships-and-honors">
  <h2 id="-scholarships-and-honors"><span data-lang="en" lang="en">Honors</span><span data-lang="zh" lang="zh-CN">奖学金与荣誉</span></h2>
  <ul class="honors-list">
    <li><strong><span data-lang="en" lang="en">Outstanding Graduate of WHU</span><span data-lang="zh" lang="zh-CN">武汉大学优秀毕业生</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></span></li>
    <li><strong><span data-lang="en" lang="en">Lei Jun Computer Science Undergraduate Scholarship</span><span data-lang="zh" lang="zh-CN">雷军计算机本科生奖学金</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University &amp; Xiaomi Inc.</span><span data-lang="zh" lang="zh-CN">武汉大学、小米集团</span></span></li>
    <li><strong><span data-lang="en" lang="en">First Class Scholarship of WHU</span><span data-lang="zh" lang="zh-CN">武汉大学一等奖学金</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></span></li>
    <li><strong><span data-lang="en" lang="en">Merit Student</span><span data-lang="zh" lang="zh-CN">武汉大学三好学生</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></span></li>
    <li><strong><span data-lang="en" lang="en">LvMeng Scholarship</span><span data-lang="zh" lang="zh-CN">绿盟奖学金</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></span></li>
    <li><strong><span data-lang="en" lang="en">Advanced Individual in Scientific and Technological Innovation</span><span data-lang="zh" lang="zh-CN">科技创新先进个人</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Wuhan University</span><span data-lang="zh" lang="zh-CN">武汉大学</span></span></li>
    <li><strong><span data-lang="en" lang="en">Lei Jun Fund for Computer Science Innovation and Development</span><span data-lang="zh" lang="zh-CN">雷军计算机创新与发展资助基金</span></strong><span class="honor-organization"><span data-lang="en" lang="en">Funding recipient</span><span data-lang="zh" lang="zh-CN">获资助</span></span></li>
  </ul>
</section>

<section class="homepage-section service-section" aria-labelledby="-activities--services">
  <h2 id="-activities--services"><span data-lang="en" lang="en">Service &amp; Activities</span><span data-lang="zh" lang="zh-CN">活动与服务</span></h2>
  <ul class="service-list">
    <li>
      <p class="service-date"><span data-lang="en" lang="en">Jun–Jul 2025</span><span data-lang="zh" lang="zh-CN">2025.06–2025.07</span></p>
      <div class="service-content"><h3><span data-lang="en" lang="en">Teaching Assistant</span><span data-lang="zh" lang="zh-CN">助教</span></h3><p><span data-lang="en" lang="en">WHU-Jisuanke Joint Practical Training Course “Security Maker Practice”</span><span data-lang="zh" lang="zh-CN">武汉大学—计蒜客联合实训课程「安全创客实践」</span></p><p class="service-note"><span data-lang="en" lang="en">Awarded “Top TA” for contributions to teaching, exercise explanation, and Q&amp;A sessions.</span><span data-lang="zh" lang="zh-CN">参与教学、习题讲解和答疑，获评「Top TA」。</span></p></div>
    </li>
    <li>
      <p class="service-date"><span data-lang="en" lang="en">Jul–Aug 2024</span><span data-lang="zh" lang="zh-CN">2024.07–2024.08</span></p>
      <div class="service-content"><h3><span data-lang="en" lang="en">Teaching Assistant</span><span data-lang="zh" lang="zh-CN">助教</span></h3><p><span data-lang="en" lang="en">WHU-Jisuanke Joint Practical Training Course “Security Maker Practice”</span><span data-lang="zh" lang="zh-CN">武汉大学—计蒜客联合实训课程「安全创客实践」</span></p><p class="service-note"><span data-lang="en" lang="en">Awarded “Excellent TA” for contributions to the one-month practical training course.</span><span data-lang="zh" lang="zh-CN">参与为期一个月的实训教学，获评「优秀助教」。</span></p></div>
    </li>
    <li>
      <p class="service-date"><span data-lang="en" lang="en">Aug 2022–Jul 2024</span><span data-lang="zh" lang="zh-CN">2022.08–2024.07</span></p>
      <div class="service-content"><h3><span data-lang="en" lang="en">Main Member</span><span data-lang="zh" lang="zh-CN">骨干成员</span></h3><p><span data-lang="en" lang="en">SITS Skating Club</span><span data-lang="zh" lang="zh-CN">SITS 轮滑社</span></p></div>
    </li>
    <li>
      <p class="service-date"><span data-lang="en" lang="en">Aug 2022–Jun 2024</span><span data-lang="zh" lang="zh-CN">2022.08–2024.06</span></p>
      <div class="service-content"><h3><span data-lang="en" lang="en">Member</span><span data-lang="zh" lang="zh-CN">成员</span></h3><p><span data-lang="en" lang="en">Ziqiang Student Network Culture Studio</span><span data-lang="zh" lang="zh-CN">自强学生网络文化工作室</span></p></div>
    </li>
  </ul>
</section>

<footer class="homepage-footer">
  <a href="mailto:{{ site.author.email }}"><span data-lang="en" lang="en">Contact</span><span data-lang="zh" lang="zh-CN">联系我</span> <span>{{ site.author.email }}</span></a>
</footer>
