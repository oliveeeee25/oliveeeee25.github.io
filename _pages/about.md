---
layout: about
title: About
permalink: /
subtitle:

profile:
  align: right
  image: square.png
  image_circular: false # crops the image to make it circular

introduction: |
  Hi, I’m Xiaoying, a Ph.D. Candidate in Data Science at the University of North Texas, advised by [Dr. Lingzi Hong](https://ci.unt.edu/lingzi-hong/). I received my M.S. in Information Science from Central China Normal University in 2023. My work has appeared at NeurIPS, EMNLP, NAACL, COLM, and COLING.

  I develop LLM systems that **collaborate effectively**, **adapt to user needs**, and **generate reliable responses**. My research combines multi-agent RAG, reinforcement learning, and parameter-efficient fine-tuning for multi-turn dialogue and controllable generation, with applications in health misinformation and crisis communication. I evaluate these systems through diagnostic benchmarks and human judgments.

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

<div class="research-pillars">
  <div class="pillar">
    <h3>LLM Agents &amp; Post-Training</h3>
    <p>Learning when to ask or answer, coordinating multi-agent RAG, and optimizing dialogue decisions and generation through reinforcement learning and fine-tuning.</p>
    <div class="pillar-pubs">
      <a href="/publications/#song2026ask">RL for ask-or-answer decisions in multi-turn dialogue <span>EMNLP 2026</span></a>
      <a href="/publications/#anikmulti">Multi-agent RAG against health misinformation <span>COLM 2025</span></a>
      <a href="/publications/#hong2024outcome">Outcome-constrained LLMs for countering hate speech <span>EMNLP 2024</span></a>
    </div>
  </div>
  <div class="pillar">
    <h3>Personalized Alignment</h3>
    <p>Adapting responses to users’ literacy levels and preferences, with modular safety controls for authorized, domain-specific contexts.</p>
    <div class="pillar-pubs">
      <a href="/publications/#song2025speaking">Literacy-controlled counterspeech with RAG-RL <span>EMNLP 2025</span></a>
      <a href="/publications/#tan2026palette">Palette: on-demand authorized safety control <span>NeurIPS 2026</span></a>
    </div>
  </div>
  <div class="pillar">
    <h3>Human-Centered Evaluation</h3>
    <p>Assessing response human likeness, consistency, and grounding through diagnostic benchmarks, automated metrics, and human evaluation.</p>
    <div class="pillar-pubs">
      <a href="/publications/#song2025assessing">Human likeness of AI-generated counterspeech <span>COLING 2025</span></a>
      <a href="/publications/#song2025dynamic">Evaluating and improving crisis response consistency <span>EMNLP 2025</span></a>
      <a href="/publications/#do2026stcrisis">ST-Crisis: benchmarking spatiotemporal grounding <span>Under review</span></a>
    </div>
  </div>
</div>
