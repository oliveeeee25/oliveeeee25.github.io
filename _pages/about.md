---
layout: about
title: About
permalink: /
subtitle: Ph.D. candidate & research assistant · University of North Texas

profile:
  align: right
  image: square.png
  image_circular: false # crops the image to make it circular

introduction: |
  I’m Xiaoying, a Ph.D. candidate in **Data Science** at the University of North Texas, advised by [Dr. Lingzi Hong](https://lingzihong.github.io/). I received my M.S. in Information Science from Central China Normal University in 2023.

  I build language models that **collaborate with people, adapt to their needs, and respond reliably**. Using multi-agent RAG, reinforcement learning, and efficient fine-tuning, I study when agents should ask questions, how to personalize their responses, and how to evaluate their interactions. My work connects model development with human evaluation in **health misinformation, counterspeech, and crisis communication**, with publications at NeurIPS, EMNLP, NAACL, COLM, and COLING.

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # contact links appear alongside the introduction

announcements:
  enabled: true # includes a list of news items
  scrollable: false
  limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

<section class="home-section research-section" aria-labelledby="research-heading">
  <div class="section-heading">
    <h2 id="research-heading">Three connected directions</h2>
  </div>
  <div class="research-pillars">
  <article class="pillar">
    <h3>LLM agents &amp; post-training</h3>
    <p>Learning when to ask and when to answer, with reinforcement learning and multi-agent retrieval to support better decisions across a conversation.</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#song2026ask">Ask or Answer <span>EMNLP 2026 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#anikmulti">Multi-Agent RAG <span>COLM 2025 ↗</span></a>
    </div>
  </article>
  <article class="pillar">
    <h3>Personalized alignment</h3>
    <p>Adapting responses to users’ literacy levels and preferences, with accessible generation and modular safety controls for authorized contexts.</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#tan2026palette">Palette <span>NeurIPS 2026 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#song2025speaking">Speaking at the Right Level <span>EMNLP 2025 ↗</span></a>
    </div>
  </article>
  <article class="pillar">
    <h3>Human-centered evaluation</h3>
    <p>Understanding human likeness, consistency, and grounding in time and place through diagnostic benchmarks, automated metrics, and human judgments.</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#song2025assessing">Human likeness <span>COLING 2025 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#do2026stcrisis">ST-Crisis <span>Under review ↗</span></a>
    </div>
  </article>
  </div>
</section>
