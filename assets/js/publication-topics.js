// All topics remain readable when JavaScript is unavailable.
(() => {
  const container = document.querySelector(".publications-by-topic");
  if (!container) return;

  const nav = container.querySelector(".publication-topic-nav");
  const links = [...nav.querySelectorAll("a[data-topic]")];
  const sections = [...container.querySelectorAll(".publication-topic")];
  const status = container.querySelector("#publication-topic-status");

  function updateTopic(scroll = true) {
    let target = null;
    try {
      target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    } catch {
      // A malformed fragment should leave the full bibliography accessible.
    }
    const selected = target?.closest(".publication-topic");

    sections.forEach((section) => {
      section.hidden = Boolean(selected && section !== selected);
    });
    links.forEach((link) => {
      const active = selected ? link.hash === "#" + selected.id : link.dataset.topic === "all";
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

    const visible = sections.filter((section) => !section.hidden);
    const count = visible.reduce((total, section) => total + section.querySelectorAll("ol.bibliography > li").length, 0);
    const topic = selected ? selected.querySelector("h2").textContent : "all topics";
    status.textContent = `${count} publications in ${topic}.`;

    if (scroll && target && container.contains(target)) {
      // Existing links to individual papers still reveal and scroll to that paper.
      const destination = selected && target !== selected ? target : nav;
      requestAnimationFrame(() => destination.scrollIntoView({ block: "start" }));
    }
  }

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-topic]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.location.hash !== link.hash) history.pushState(null, "", link.hash);
    updateTopic();
  });

  window.addEventListener("hashchange", () => updateTopic());
  updateTopic(Boolean(window.location.hash));
})();
