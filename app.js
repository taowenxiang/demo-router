const demos = [
  {
    title: "BridgeChat",
    route: "/bridgechat",
    status: "Live",
    description:
      "A standalone demo experience exposed through this router so it can be shared from a clean, memorable path.",
    tags: ["Chat", "Standalone Repo", "Vercel"],
    note: "Routed from this domain into its dedicated deployment.",
    href: "/bridgechat",
    cta: "Open demo",
  },
];

const stats = [
  {
    label: "Live demos",
    value: String(demos.length).padStart(2, "0"),
  },
  {
    label: "Hosting",
    value: "Vercel",
  },
  {
    label: "Structure",
    value: "Multi-repo",
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
        This page is already structured so the next project only needs one more
        data entry and a matching Vercel rewrite.
      </p>
      <div class="card-tags">
        <span class="tag">Scalable</span>
        <span class="tag">Easy to extend</span>
        <span class="tag">Consistent brand</span>
      </div>
      <div class="card-footer">
        <p class="card-note">Add another object in <code>app.js</code> when the next demo is ready.</p>
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
