---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<div class="publications publications-by-topic" id="all-publications">
  <nav class="publication-topic-nav" aria-label="Publication topics">
    <a href="#all-publications" data-topic="all">All topics <span class="topic-count">{% bibliography_count %}</span></a>
    {% for topic in site.data.publication_topics %}
      <a href="#topic-{{ topic.id }}" data-topic="{{ topic.id }}">{{ topic.label }} <span class="topic-count">{% bibliography_count --query @*[topic={{topic.id}}]* %}</span></a>
    {% endfor %}
  </nav>
  <p class="sr-only" id="publication-topic-status" role="status" aria-live="polite"></p>
  {% for topic in site.data.publication_topics %}
    <section class="publication-topic" id="topic-{{ topic.id }}" aria-labelledby="heading-{{ topic.id }}">
      <header class="publication-topic-heading">
        <h2 id="heading-{{ topic.id }}">{{ topic.title }}</h2>
        <p>{{ topic.description }}</p>
      </header>
      {% bibliography --group_by none --query @*[topic={{topic.id}}]* %}
    </section>
  {% endfor %}
</div>

<script defer src="{{ '/assets/js/publication-topics.js' | relative_url | bust_file_cache }}"></script>
