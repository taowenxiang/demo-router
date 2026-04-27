const demos = [
  {
    title: "BridgeChat",
    route: "/bridgechat",
    status: "Live",
    description:
      "A live demo you can open and explore right away.",
    tags: ["Interactive", "Conversation", "Live Demo"],
    note: "Open it directly and experience it in the browser.",
    href: "/bridgechat",
    cta: "Open demo",
  },
  {
    title: "KGTI",
    route: "/kgti",
    status: "Live",
    description:
      "Interactive web demo served from the KGTI project — open it in the browser to explore.",
    tags: ["Interactive", "Web", "Live Demo"],
    note: "Routed to the live deployment; assets load under the same path prefix.",
    href: "/kgti",
    cta: "Open demo",
  },
];

const stats = [
  {
    label: "Live demos",
    value: String(demos.length).padStart(2, "0"),
  },
  {
    label: "Current focus",
    value: "Demos",
  },
  {
    label: "Updated",
    value: "Ongoing",
  },
];

function renderStats() {
  const container = document.querySelector("#hero-stats");

  if (!container) {
    return;
  }

  container.innerHTML = stats
    .map(
      (stat) => `
        <div class="meta-card">
          <span class="meta-item">${stat.label}</span>
          <span class="meta-value">${stat.value}</span>
        </div>
      `,
    )
    .join("");
}

function renderDemos() {
  const container = document.querySelector("#demo-grid");

  if (!container) {
    return;
  }

  const cards = demos
    .map(
      (demo) => `
        <article class="demo-card">
          <div class="card-topline">
            <span class="card-route">${demo.route}</span>
            <span class="card-status">${demo.status}</span>
          </div>
          <h3>${demo.title}</h3>
          <p class="demo-card-description">${demo.description}</p>
          <div class="card-tags">
            ${demo.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="card-footer">
            <p class="card-note">${demo.note}</p>
            <a class="card-link" href="${demo.href}">${demo.cta}</a>
          </div>
        </article>
      `,
    )
    .join("");

  const upcomingCard = `
    <article class="demo-card">
      <div class="card-topline">
        <span class="card-route">/next-demo</span>
        <span class="card-status">Soon</span>
      </div>
      <h3>More demos are on the way</h3>
      <p class="demo-card-description">
        This gallery will continue to grow as more projects are ready to be
        shared.
      </p>
      <div class="card-tags">
        <span class="tag">New work</span>
        <span class="tag">Experiments</span>
        <span class="tag">Coming soon</span>
      </div>
      <div class="card-footer">
        <p class="card-note">More interactive projects will appear here soon.</p>
      </div>
    </article>
  `;

  container.innerHTML = cards + upcomingCard;
}

function renderYear() {
  const footerYear = document.querySelector("#footer-year");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

renderStats();
renderDemos();
renderYear();
