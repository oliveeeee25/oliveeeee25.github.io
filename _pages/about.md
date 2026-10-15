---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate & Research Assistant · University of North Texas

profile:
  align: right
  image: square.png
  image_circular: false # crops the image to make it circular

introduction: |
  I’m Xiaoying, a Ph.D. candidate in **Data Science** at the University of North Texas, advised by [Dr. Lingzi Hong](https://ci.unt.edu/lingzi-hong/). Before joining UNT, I received my M.S. in Information Science from Central China Normal University in 2023.

  I build language model systems that **collaborate with people, adapt to their needs, and respond reliably**. My research asks when an agent should seek clarification, how its responses should change for different users, and how we can evaluate the quality of those interactions.

  I combine **multi-agent retrieval-augmented generation**, **reinforcement learning**, and **parameter-efficient fine-tuning** to study these questions in health misinformation intervention, counterspeech, and crisis communication. My work connects model development with diagnostic benchmarks and human evaluation, and has appeared at **NeurIPS, EMNLP, NAACL, COLM, and COLING**.

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
    <div>
      <p class="section-eyebrow">Research agenda</p>
      <h2 id="research-heading">Three connected directions</h2>
    </div>
    <p class="section-description">From better dialogue decisions to models that understand their users.</p>
  </div>
  <div class="research-pillars">
  <article class="pillar">
    <span class="pillar-number" aria-hidden="true">01</span>
    <h3>LLM Agents<br>&amp; Post-Training</h3>
    <p>I build agents that learn when to ask for more information and when to respond. Multi-agent RAG, reinforcement learning, and fine-tuning help coordinate evidence retrieval and improve decisions across a conversation.</p>
    <p class="pillar-methods">Multi-turn dialogue · RAG · Reinforcement learning</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#song2026ask">Ask or Answer <span>EMNLP 2026 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#anikmulti">Multi-Agent RAG <span>COLM 2025 ↗</span></a>
    </div>
  </article>
  <article class="pillar">
    <span class="pillar-number" aria-hidden="true">02</span>
    <h3>Personalized<br>Alignment</h3>
    <p>I adapt generation to users’ literacy levels, preferences, and authorized needs. This includes accessible counterspeech and modular safety controls that can be composed across domains without retraining.</p>
    <p class="pillar-methods">Literacy control · Safety alignment · LoRA</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#tan2026palette">Palette <span>NeurIPS 2026 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#song2025speaking">Speaking at the Right Level <span>EMNLP 2025 ↗</span></a>
    </div>
  </article>
  <article class="pillar">
    <span class="pillar-number" aria-hidden="true">03</span>
    <h3>Human-Centered<br>Evaluation</h3>
    <p>I study how people experience model outputs, from human likeness and consistency to grounding in time and place. I pair automated metrics and diagnostic benchmarks with human judgments to understand where systems fall short.</p>
    <p class="pillar-methods">Human evaluation · Benchmarks · Grounding</p>
    <div class="pillar-pubs">
      <a href="{{ '/publications/' | relative_url }}#song2025assessing">Human Likeness of Counterspeech <span>COLING 2025 ↗</span></a>
      <a href="{{ '/publications/' | relative_url }}#do2026stcrisis">ST-Crisis <span>Under review ↗</span></a>
    </div>
  </article>
  </div>
</section>
