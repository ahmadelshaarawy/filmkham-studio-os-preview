/* ============================================================
   STUDIO OS — Screen builder
   All screens are generated as HTML strings and injected.
   ============================================================ */

// ---- Icon helper ----
const icon = (path, size = 16) =>
  `<svg class="ico" style="width:${size}px;height:${size}px" viewBox="0 0 24 24">${path}</svg>`;

const I = {
  home: icon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
  project: icon('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M7 4v4M17 4v4"/>'),
  chat: icon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  tasks: icon('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'),
  pipeline: icon('<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/><path d="M10 7h4M7 10v4M17 10v4M10 17h4"/>'),
  archive: icon('<rect x="2" y="3" width="20" height="5"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>'),
  calendar: icon('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  budget: icon('<path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>'),
  settings: icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>'),
  search: icon('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>'),
  plus: icon('<path d="M12 5v14M5 12h14"/>'),
  bell: icon('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'),
  arrow: icon('<path d="M5 12h14M12 5l7 7-7 7"/>'),
  drive: icon('<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h.01M10 12h.01"/>'),
  hash: icon('<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>'),
  users: icon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
  film: icon('<rect x="2" y="2" width="20" height="20" rx="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>'),
  folder: icon('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
  clock: icon('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  paperclip: icon('<path d="M21.4 11l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7L9.4 17.4a2 2 0 0 1-2.8-2.8L15 6.2"/>'),
  send: icon('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'),
  smile: icon('<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>'),
  mic: icon('<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>'),
  video: icon('<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>'),
  code: icon('<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>'),
  dollar: icon('<path d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>'),
  check: icon('<polyline points="20 6 9 17 4 12"/>'),
  more: icon('<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'),
  phone: icon('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/>'),
  camera: icon('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'),
  star: icon('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'),
  link: icon('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
  edit: icon('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>'),
  sparkles: icon('<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>'),
  wifi: icon('<path d="M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>'),
  battery: icon('<rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 13v-2"/>'),
};

// ---- Shared rail (left icon bar) ----
function rail(active = 'home', badges = {}) {
  const items = [
    { k: 'home', icon: I.home, b: '' },
    { k: 'project', icon: I.project, b: '' },
    { k: 'chat', icon: I.chat, b: badges.chat ? 'dot' : '' },
    { k: 'tasks', icon: I.tasks, b: '' },
    { k: 'pipeline', icon: I.pipeline, b: '' },
    { k: 'archive', icon: I.archive, b: '' },
    { k: 'calendar', icon: I.calendar, b: '' },
    { k: 'budget', icon: I.budget, b: '' },
  ];
  return `
    <aside class="rail">
      <div class="rail-logo">F</div>
      <div class="rail-items">
        ${items.map(it => `
          <div class="rail-item ${it.k === active ? 'active' : ''}">
            ${it.icon}
            ${it.b === 'dot' ? '<span class="dot-badge"></span>' : ''}
          </div>
        `).join('')}
      </div>
      <div class="rail-bottom">
        <div class="rail-item">${I.settings}</div>
        <div class="rail-avatar">AH</div>
      </div>
    </aside>`;
}

// ---- Topbar ----
function topbar(crumbs, title, actions = '') {
  return `
    <div class="topbar">
      <div>
        <div class="crumb-row">
          ${crumbs.map((c, i) => `<span>${c}</span>${i < crumbs.length - 1 ? '<span class="crumb-sep">/</span>' : ''}`).join('')}
        </div>
        <h1>${title}</h1>
      </div>
      <div class="spacer"></div>
      <div class="top-actions">${actions}</div>
    </div>`;
}

// ============================================================
// SCREEN 1: VISION
// ============================================================
function screenVision() {
  return `
  <section class="screen active vision" id="screen-vision">
    <div class="vision-hero">
      <div class="vision-kicker"><span class="pulse"></span>Concept v2 · Studio OS</div>
      <h1 class="vision-h">One operating system<br>for <span class="grad">everything your studio does.</span></h1>
      <p class="vision-p">From first pitch to final archive — briefs, shoot schedules, budgets, chat, tasks, file naming, SSD → archive workflow — all in one dark, modern, distraction-free app. Built for teams who ship.</p>
      <div class="vision-actions">
        <button class="btn btn-primary">Explore the system ${I.arrow}</button>
        <button class="btn btn-secondary">See pipeline flow</button>
      </div>
    </div>

    <!-- Pillars -->
    <div class="pillars">
      <div class="pillar" style="--accent-color: var(--brand);">
        <div class="pillar-icon" style="background: var(--brand-soft); color: var(--brand);">${I.project}</div>
        <h3 class="pillar-h">Project Hub</h3>
        <p class="pillar-p">Every production gets a single home: brief, budget, schedule, team, drives, chat, tasks — linked, not scattered.</p>
        <div class="pillar-meta">Replaces · Trello · Notion · Airtable</div>
      </div>
      <div class="pillar" style="--accent-color: var(--info);">
        <div class="pillar-icon" style="background: var(--info-soft); color: var(--info);">${I.chat}</div>
        <h3 class="pillar-h">Threads &amp; Chat</h3>
        <p class="pillar-p">Slack-style channels per project, with deep links to drives, tasks, and footage. Mention files the way you mention people.</p>
        <div class="pillar-meta">Replaces · Slack · WhatsApp groups</div>
      </div>
      <div class="pillar" style="--accent-color: var(--ok);">
        <div class="pillar-icon" style="background: var(--ok-soft); color: var(--ok);">${I.tasks}</div>
        <h3 class="pillar-h">Tasks &amp; To-Dos</h3>
        <p class="pillar-p">Kanban boards, personal to-dos, and team assignments — scoped to projects or global. Priorities and deadlines built in.</p>
        <div class="pillar-meta">Replaces · Asana · Todoist</div>
      </div>
      <div class="pillar" style="--accent-color: var(--film);">
        <div class="pillar-icon" style="background: var(--film-soft); color: var(--film);">${I.archive}</div>
        <h3 class="pillar-h">Archive &amp; Pipeline</h3>
        <p class="pillar-p">The original archive system, now tightly wired: auto-naming, SSD → HDD handoff, QR codes, audit logs — all triggered by workflow.</p>
        <div class="pillar-meta">Extends · the current app</div>
      </div>
    </div>

    <!-- Pipeline flow -->
    <div class="flow-card">
      <h2 class="flow-title">The production pipeline, as software</h2>
      <p class="flow-sub">Material flows through 6 stages. The app tracks each step so nothing gets lost between cards.</p>
      <div class="flow">
        <div class="flow-step"><div class="flow-num">1</div><div class="flow-icon" style="background: var(--pink-soft); color: var(--pink);">${I.sparkles}</div><h4>Brief &amp; Budget</h4><p>Client brief, team, budget breakdown, contracts.</p></div>
        <div class="flow-step"><div class="flow-num">2</div><div class="flow-icon" style="background: var(--info-soft); color: var(--info);">${I.calendar}</div><h4>Schedule</h4><p>Shoot days, locations, cast, call sheets.</p></div>
        <div class="flow-step"><div class="flow-num">3</div><div class="flow-icon" style="background: var(--film-soft); color: var(--film);">${I.camera}</div><h4>Shoot</h4><p>Daily notes, raw footage ingest, SSD offload.</p></div>
        <div class="flow-step"><div class="flow-num">4</div><div class="flow-icon" style="background: var(--warn-soft); color: var(--warn);">${I.edit}</div><h4>Naming</h4><p>Auto-rename to studio convention. QR tags.</p></div>
        <div class="flow-step"><div class="flow-num">5</div><div class="flow-icon" style="background: var(--teal-soft); color: var(--teal);">${I.video}</div><h4>Post</h4><p>Edit, color, sound. Proxy drives linked.</p></div>
        <div class="flow-step"><div class="flow-num">6</div><div class="flow-icon" style="background: var(--ok-soft); color: var(--ok);">${I.archive}</div><h4>Archive</h4><p>SSD → HDD move, backup mirror, QR sticker.</p></div>
      </div>
    </div>

    <!-- Everything connects -->
    <div class="connect-card">
      <h2 class="connect-title">Everything connects to the project</h2>
      <p class="connect-sub">A thread mentions a file. The file lives on a drive. The drive links to 3 more projects. One click gets you there.</p>
      <div class="connect-map">
        <div class="node center" style="left:50%; top:42%; transform:translate(-50%,-50%);">
          <div class="node-icon" style="background: var(--brand-soft); color: var(--brand);">${I.film}</div>
          Sunset in Giza
        </div>
        <div class="node" style="left:8%; top:4%;"><div class="node-icon" style="background: var(--info-soft); color: var(--info);">${I.chat}</div>#sunset-dailies</div>
        <div class="node" style="right:8%; top:4%;"><div class="node-icon" style="background: var(--ok-soft); color: var(--ok);">${I.tasks}</div>12 open tasks</div>
        <div class="node" style="left:2%; top:42%;"><div class="node-icon" style="background: var(--film-soft); color: var(--film);">${I.drive}</div>3 drives · 840 GB</div>
        <div class="node" style="right:2%; top:42%;"><div class="node-icon" style="background: var(--pink-soft); color: var(--pink);">${I.users}</div>Team of 7</div>
        <div class="node" style="left:10%; bottom:4%;"><div class="node-icon" style="background: var(--warn-soft); color: var(--warn);">${I.dollar}</div>Budget 78%</div>
        <div class="node" style="left:50%; bottom:4%; transform:translateX(-50%);"><div class="node-icon" style="background: var(--teal-soft); color: var(--teal);">${I.calendar}</div>8 shoot days</div>
        <div class="node" style="right:10%; bottom:4%;"><div class="node-icon" style="background: var(--brand-soft); color: var(--brand);">${I.link}</div>14 deliverables</div>
        <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 900 360" preserveAspectRatio="none">
          <g stroke="rgba(110,123,255,0.25)" stroke-width="1" fill="none" stroke-dasharray="3 4">
            <line x1="450" y1="150" x2="120" y2="40"/>
            <line x1="450" y1="150" x2="780" y2="40"/>
            <line x1="450" y1="150" x2="40" y2="150"/>
            <line x1="450" y1="150" x2="860" y2="150"/>
            <line x1="450" y1="150" x2="130" y2="330"/>
            <line x1="450" y1="150" x2="450" y2="330"/>
            <line x1="450" y1="150" x2="770" y2="330"/>
          </g>
        </svg>
      </div>
    </div>
  </section>`;
}

// ============================================================
// SCREEN 2: HOME / COMMAND CENTER
// ============================================================
function screenHome() {
  return `
  <section class="screen" id="screen-home">
    <p class="s-eyebrow">Screen 01 · Home</p>
    <h2 class="s-title">Command Center</h2>
    <p class="s-desc">Your morning glance. One hero that actually welcomes you, four KPIs that matter today, your active projects with real progress, and the studio heartbeat on the right.</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">Film Kham · Studio OS</span>
      </div>
      <div class="app">
        ${rail('home', { chat: true })}
        ${sidePanelHome()}
        <div class="main">
          ${topbar(['Workspace'], 'Home', `
            <button class="btn-icon">${I.bell}</button>
            <button class="btn btn-secondary btn-sm">${I.search} Search</button>
            <button class="btn btn-primary btn-sm">${I.plus} New project</button>
          `)}
          <div class="content">

            <!-- Hero row -->
            <div class="hero-row">
              <div class="hero-card">
                <div class="hero-greet"><span class="pulse"></span>Thursday · April 5 · 9:42 AM</div>
                <h2 class="hero-title">Good morning, Ahmed.</h2>
                <p class="hero-sub">You have <b style="color:var(--ink)">6 tasks</b> due today, <b style="color:var(--ink)">2 shoots</b> this week, and <b style="color:var(--warn)">3 drives</b> that need your attention. Nothing on fire.</p>
                <div class="hero-stats">
                  <div class="hero-stat"><div class="hero-stat-n">12</div><div class="hero-stat-l">Active projects</div></div>
                  <div class="hero-stat"><div class="hero-stat-n">48</div><div class="hero-stat-l">Open tasks</div></div>
                  <div class="hero-stat"><div class="hero-stat-n">7</div><div class="hero-stat-l">Team online</div></div>
                  <div class="hero-stat"><div class="hero-stat-n">186<span style="font-size:14px;color:var(--ink-3)"> TB</span></div><div class="hero-stat-l">Archive storage</div></div>
                </div>
              </div>

              <div class="today">
                <div class="today-head">
                  <h3>Today's focus</h3>
                  <span>3 of 6 done</span>
                </div>
                <div class="today-task">
                  <div class="today-check on">${icon('<polyline points="20 6 9 17 4 12"/>', 10)}</div>
                  <div class="today-text done">Review Qahwa Spot rough cut
                    <div class="today-meta">10:00 AM · #qahwa-dailies</div>
                  </div>
                </div>
                <div class="today-task">
                  <div class="today-check on">${icon('<polyline points="20 6 9 17 4 12"/>', 10)}</div>
                  <div class="today-text done">Approve invoice — Red Sea Films
                    <div class="today-meta">11:30 AM · Finance</div>
                  </div>
                </div>
                <div class="today-task">
                  <div class="today-check on">${icon('<polyline points="20 6 9 17 4 12"/>', 10)}</div>
                  <div class="today-text done">Sign call sheet — Sunset Day 4
                    <div class="today-meta">12:00 PM</div>
                  </div>
                </div>
                <div class="today-task">
                  <div class="today-check"></div>
                  <div class="today-text">Archive Nile Blue dailies → HDD_17
                    <div class="today-meta">${I.clock} 2:00 PM · Archive</div>
                  </div>
                </div>
                <div class="today-task">
                  <div class="today-check"></div>
                  <div class="today-text">Review Al Bahr budget v3
                    <div class="today-meta">${I.clock} 4:00 PM · with Karim</div>
                  </div>
                </div>
                <div class="today-task">
                  <div class="today-check"></div>
                  <div class="today-text">Ship director's cut — Jasmine &amp; Fire
                    <div class="today-meta">${I.clock} EOD</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- KPIs -->
            <div class="kpis">
              <div class="kpi" style="--kpi-accent: var(--brand);">
                <div class="kpi-head"><span class="kpi-label">Active projects</span><div class="kpi-icon" style="background: var(--brand-soft); color: var(--brand);">${I.project}</div></div>
                <div class="kpi-val">12</div>
                <div class="kpi-sub"><span class="trend">↑ 2</span>from last week</div>
              </div>
              <div class="kpi" style="--kpi-accent: var(--ok);">
                <div class="kpi-head"><span class="kpi-label">Tasks done</span><div class="kpi-icon" style="background: var(--ok-soft); color: var(--ok);">${I.tasks}</div></div>
                <div class="kpi-val">34<span style="font-size:14px;color:var(--ink-3)">/48</span></div>
                <div class="kpi-sub">71% this week</div>
              </div>
              <div class="kpi" style="--kpi-accent: var(--film);">
                <div class="kpi-head"><span class="kpi-label">Budget utilized</span><div class="kpi-icon" style="background: var(--film-soft); color: var(--film);">${I.dollar}</div></div>
                <div class="kpi-val">62<span style="font-size:14px;color:var(--ink-3)">%</span></div>
                <div class="kpi-sub">$186k of $300k Q2</div>
              </div>
              <div class="kpi" style="--kpi-accent: var(--warn);">
                <div class="kpi-head"><span class="kpi-label">Needs attention</span><div class="kpi-icon" style="background: var(--warn-soft); color: var(--warn);">${icon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>')}</div></div>
                <div class="kpi-val" style="color: var(--warn);">5</div>
                <div class="kpi-sub">3 full drives · 2 overdue</div>
              </div>
            </div>

            <!-- Main two-col -->
            <div class="home-grid">
              <div class="card">
                <div class="card-head">
                  <div><div class="card-title">Active projects</div><div class="card-sub">Last touched in the past 7 days</div></div>
                  <a class="card-action">See all →</a>
                </div>
                <div class="card-body">
                  ${projectRow('Sunset in Giza', 'Feature · Lumière Studios', 68, 'pp-g1', ['NH','MR','SA'], 'chip-brand', 'Production')}
                  ${projectRow('Qahwa Spot', 'Commercial · Nescafé MENA', 92, 'pp-g2', ['KF','MR'], 'chip-warn', 'Post')}
                  ${projectRow('Nile Blue', 'Documentary · Aflam', 44, 'pp-g3', ['NH','AH','SA','KF'], 'chip-info', 'Shooting')}
                  ${projectRow('Al Bahr', 'Feature · Red Sea Films', 28, 'pp-g4', ['AH','KF'], 'chip-brand', 'Prep')}
                  ${projectRow('Desert Radio', 'Music video · Rotana', 78, 'pp-g6', ['MR','NH'], 'chip-info', 'Post')}
                </div>
              </div>

              <div class="card">
                <div class="card-head">
                  <div><div class="card-title">Team activity</div><div class="card-sub">Live feed</div></div>
                </div>
                <div class="card-body">
                  ${feedItem('MR', 'var(--film)', 'Mohamed R.', 'mentioned you in', '#sunset-dailies', '12 min ago')}
                  ${feedItem('NH', 'var(--brand)', 'Nour H.', 'archived', 'The Quiet Reel', '1 hour ago')}
                  ${feedItem('SA', 'var(--ok)', 'Sara A.', 'scanned', 'HDD_ARCHIVE_22', '3 hours ago')}
                  ${feedItem('KF', 'var(--pink)', 'Karim F.', 'approved budget for', 'Al Bahr', 'Yesterday')}
                  ${feedItem('MR', 'var(--film)', 'Mohamed R.', 'uploaded 42 files to', 'Nile Blue / RAW', 'Yesterday')}
                  ${feedItem('NH', 'var(--brand)', 'Nour H.', 'finished editing', 'Sunset Day 3 dailies', '2 days ago')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function sidePanelHome() {
  return `
  <aside class="side">
    <div class="side-head">
      <div class="side-title">Film Kham Studio</div>
      <div class="side-sub">Cairo · 7 online now</div>
    </div>
    <div class="side-search">
      ${I.search}
      <span>Search everything</span>
      <span class="kbd">⌘K</span>
    </div>
    <div class="side-section">
      <div class="side-section-label">Workspace</div>
      <a class="side-item active">${I.home} Home</a>
      <a class="side-item">${I.project} Projects <span class="count">12</span></a>
      <a class="side-item">${I.tasks} My tasks <span class="unread">6</span></a>
      <a class="side-item">${I.calendar} Calendar</a>
      <a class="side-item">${I.archive} Archive <span class="count">42</span></a>
    </div>
    <div class="side-section">
      <div class="side-section-label">Channels <span class="add">+</span></div>
      <a class="side-item">${I.hash} sunset-giza <span class="unread">3</span></a>
      <a class="side-item">${I.hash} qahwa-spot</a>
      <a class="side-item">${I.hash} nile-blue <span class="unread">12</span></a>
      <a class="side-item">${I.hash} studio-general</a>
      <a class="side-item">${I.hash} archive-ops</a>
    </div>
    <div class="side-section">
      <div class="side-section-label">Direct</div>
      <a class="side-item"><span class="emoji">🟢</span>Nour H. <span class="live-dot"></span></a>
      <a class="side-item"><span class="emoji">🟢</span>Mohamed R. <span class="live-dot"></span></a>
      <a class="side-item"><span class="emoji">⚪</span>Karim F.</a>
      <a class="side-item"><span class="emoji">🟢</span>Sara A. <span class="live-dot"></span></a>
    </div>
  </aside>`;
}

function projectRow(title, sub, pct, gradient, avatars, chipClass, chipLabel) {
  const barClass = pct > 85 ? 'warn' : pct > 60 ? '' : 'ok';
  return `
    <div class="project-row">
      <div class="project-poster-sm ${gradient}"></div>
      <div class="project-info">
        <div class="project-row-title">${title}</div>
        <div class="project-row-sub">${sub}</div>
        <div class="project-row-bar">
          <div class="mini-bar"><div class="mini-bar-fill ${barClass}" style="width:${pct}%"></div></div>
          <span class="mini-bar-label">${pct}% complete</span>
        </div>
      </div>
      <span class="chip ${chipClass}"><span class="chip-dot"></span>${chipLabel}</span>
      <div class="project-row-avatars">
        ${avatars.map((a, i) => `<div class="mini-av" style="background: ${['#6E7BFF','#FF8A3D','#34D399','#F472B6'][i%4]};">${a}</div>`).join('')}
      </div>
    </div>`;
}

function feedItem(initials, color, name, verb, target, time) {
  return `
    <div class="feed-item">
      <div class="feed-av" style="background: ${color};">${initials}</div>
      <div class="feed-body">
        <b>${name}</b> ${verb} <span class="ch">${target}</span>
        <div class="feed-time">${time}</div>
      </div>
    </div>`;
}

// ============================================================
// SCREEN 3: PROJECT HUB
// ============================================================
function screenProject() {
  return `
  <section class="screen" id="screen-project">
    <p class="s-eyebrow">Screen 02 · Project Hub</p>
    <h2 class="s-title">One home per production</h2>
    <p class="s-desc">Everything about a project in one place: brief, schedule, budget, team, linked drives, tasks, and the project's own chat channel. No hunting across apps.</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">Sunset in Giza — Studio OS</span>
      </div>
      <div class="app">
        ${rail('project')}
        ${sidePanelProjects()}
        <div class="main">
          ${topbar(['Projects', 'Sunset in Giza'], 'Sunset in Giza', `
            <button class="btn btn-secondary btn-sm">${I.link} Share</button>
            <button class="btn btn-secondary btn-sm">${I.star}</button>
            <button class="btn btn-primary btn-sm">${I.plus} New task</button>
          `)}
          <div class="content">
            <!-- Big poster hero -->
            <div class="hub-hero">
              <div class="hub-hero-content">
                <div class="hub-poster"><div class="hub-poster-label">SUNSET<br>IN GIZA</div></div>
                <div class="hub-info">
                  <div class="hub-eyebrow">Feature · Lumière Studios <span class="chip chip-brand"><span class="chip-dot"></span>In production</span></div>
                  <h1 class="hub-title">Sunset in Giza</h1>
                  <div class="hub-meta-row">
                    <span>Dir. Yasmin Fawzi</span><span class="sep">·</span>
                    <span>92 days remaining</span><span class="sep">·</span>
                    <span>68% complete</span><span class="sep">·</span>
                    <div class="team">
                      ${['NH','MR','SA','AH','KF'].map((a,i)=>`<div class="mini-av" style="background: ${['#6E7BFF','#FF8A3D','#34D399','#F472B6','#60A5FA'][i%5]};">${a}</div>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pipeline stages -->
            <div class="pipe-strip">
              <div class="pipe-stage done"><div class="pipe-stage-label">Brief</div><div class="pipe-stage-num">${I.check}</div></div>
              <div class="pipe-sep">→</div>
              <div class="pipe-stage done"><div class="pipe-stage-label">Schedule</div><div class="pipe-stage-num">${I.check}</div></div>
              <div class="pipe-sep">→</div>
              <div class="pipe-stage active"><div class="pipe-stage-label">Shoot</div><div class="pipe-stage-num">4 / 8 days</div></div>
              <div class="pipe-sep">→</div>
              <div class="pipe-stage pending"><div class="pipe-stage-label">Naming</div><div class="pipe-stage-num">—</div></div>
              <div class="pipe-sep">→</div>
              <div class="pipe-stage pending"><div class="pipe-stage-label">Post</div><div class="pipe-stage-num">—</div></div>
              <div class="pipe-sep">→</div>
              <div class="pipe-stage pending"><div class="pipe-stage-label">Archive</div><div class="pipe-stage-num">—</div></div>
            </div>

            <!-- Tabs -->
            <div class="hub-tabs">
              <button class="hub-tab active">${I.home} Overview</button>
              <button class="hub-tab">${I.tasks} Tasks <span class="count">24</span></button>
              <button class="hub-tab">${I.chat} Channel <span class="count">#sunset-giza</span></button>
              <button class="hub-tab">${I.calendar} Schedule</button>
              <button class="hub-tab">${I.dollar} Budget</button>
              <button class="hub-tab">${I.drive} Drives <span class="count">3</span></button>
              <button class="hub-tab">${I.folder} Files</button>
            </div>

            <!-- Hub grid -->
            <div class="hub-grid">
              <div class="hub-col">

                <!-- Brief / key facts -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Brief &amp; key facts</div></div>
                    <a class="card-action">${I.edit} Edit</a>
                  </div>
                  <div class="facts">
                    <div class="fact"><div class="fact-l">Client</div><div class="fact-v">Lumière Studios</div></div>
                    <div class="fact"><div class="fact-l">Director</div><div class="fact-v">Yasmin Fawzi</div></div>
                    <div class="fact"><div class="fact-l">Format</div><div class="fact-v">Feature · 110 min</div></div>
                    <div class="fact"><div class="fact-l">Genre</div><div class="fact-v">Drama</div></div>
                    <div class="fact"><div class="fact-l">Start</div><div class="fact-v">Feb 12, 2026</div></div>
                    <div class="fact"><div class="fact-l">Delivery</div><div class="fact-v">Jul 8, 2026</div></div>
                    <div class="fact"><div class="fact-l">Editor</div><div class="fact-v">Nour H.</div></div>
                    <div class="fact"><div class="fact-l">DOP</div><div class="fact-v">Mohamed R.</div></div>
                  </div>
                </div>

                <!-- Next tasks -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Tasks this week</div><div class="card-sub">6 open · 2 overdue</div></div>
                    <a class="card-action">Open board →</a>
                  </div>
                  <div class="task-item done">
                    <div class="task-check on">${icon('<polyline points="20 6 9 17 4 12"/>', 10)}</div>
                    <span class="task-title">Lock Day 4 call sheet and notify cast</span>
                    <div class="task-avatar" style="background: #FF8A3D;">MR</div>
                    <span class="task-date">Apr 2</span>
                  </div>
                  <div class="task-item">
                    <div class="task-check"></div>
                    <span class="task-title">Ingest Day 3 footage → SSD_MASTER_04</span>
                    <div class="task-avatar" style="background: #34D399;">SA</div>
                    <span class="task-date" style="color: var(--warn);">Today</span>
                  </div>
                  <div class="task-item">
                    <div class="task-check"></div>
                    <span class="task-title">Deliver editor's first cut to director</span>
                    <div class="task-avatar" style="background: #6E7BFF;">NH</div>
                    <span class="task-date">Apr 8</span>
                  </div>
                  <div class="task-item">
                    <div class="task-check"></div>
                    <span class="task-title">Catering contract — week 2</span>
                    <div class="task-avatar" style="background: #F472B6;">KF</div>
                    <span class="task-date" style="color: var(--bad);">Overdue</span>
                  </div>
                  <div class="task-item">
                    <div class="task-check"></div>
                    <span class="task-title">Review sound designer quotes</span>
                    <div class="task-avatar" style="background: #6E7BFF;">AH</div>
                    <span class="task-date">Apr 12</span>
                  </div>
                </div>

                <!-- Linked drives -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Linked drives</div><div class="card-sub">3 drives · 840 GB used</div></div>
                    <a class="card-action">Open in Archive →</a>
                  </div>
                  <div class="linked-drive">
                    <div class="ld-icon" style="background: var(--brand-soft); color: var(--brand);">${I.drive}</div>
                    <div class="ld-info"><div class="ld-name">SSD_MASTER_04</div><div class="ld-sub">NVMe 2 TB · Studio A · RAW + Proxies</div></div>
                    <div class="ld-bar"><div class="ld-bar-fill" style="width: 42%"></div></div>
                    <span class="ld-pct">42%</span>
                  </div>
                  <div class="linked-drive">
                    <div class="ld-icon" style="background: var(--film-soft); color: var(--film);">${I.drive}</div>
                    <div class="ld-info"><div class="ld-name">HDD_ARCHIVE_17</div><div class="ld-sub">WD 8 TB · Vault · Backup mirror</div></div>
                    <div class="ld-bar"><div class="ld-bar-fill" style="width: 87%; background: var(--warn);"></div></div>
                    <span class="ld-pct" style="color: var(--warn);">87%</span>
                  </div>
                  <div class="linked-drive">
                    <div class="ld-icon" style="background: var(--brand-soft); color: var(--brand);">${I.drive}</div>
                    <div class="ld-info"><div class="ld-name">SSD_PROXY_CACHE</div><div class="ld-sub">Samsung T9 4 TB · Edit Bay 2</div></div>
                    <div class="ld-bar"><div class="ld-bar-fill" style="width: 28%"></div></div>
                    <span class="ld-pct">28%</span>
                  </div>
                </div>

              </div>
              <div class="hub-col">

                <!-- Budget mini -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Budget</div><div class="card-sub">$186,420 of $300,000</div></div>
                    <a class="card-action">Detail →</a>
                  </div>
                  <div class="budget-viz">
                    <div class="budget-total">
                      <span class="amount">$186,420</span>
                      <span class="of">/ $300,000 · 62% spent</span>
                    </div>
                    <div class="budget-bar">
                      <div class="budget-seg" style="width: 28%; background: var(--brand);"></div>
                      <div class="budget-seg" style="width: 14%; background: var(--film);"></div>
                      <div class="budget-seg" style="width: 10%; background: var(--teal);"></div>
                      <div class="budget-seg" style="width: 6%; background: var(--pink);"></div>
                      <div class="budget-seg" style="width: 4%; background: var(--info);"></div>
                      <div class="budget-seg" style="width: 38%; background: var(--surface-3);"></div>
                    </div>
                    <div class="budget-legend">
                      <div class="budget-legend-item"><span class="d" style="background: var(--brand);"></span>Crew <span class="v">$84k</span></div>
                      <div class="budget-legend-item"><span class="d" style="background: var(--film);"></span>Equipment <span class="v">$42k</span></div>
                      <div class="budget-legend-item"><span class="d" style="background: var(--teal);"></span>Locations <span class="v">$30k</span></div>
                      <div class="budget-legend-item"><span class="d" style="background: var(--pink);"></span>Cast <span class="v">$18k</span></div>
                      <div class="budget-legend-item"><span class="d" style="background: var(--info);"></span>Post <span class="v">$12k</span></div>
                      <div class="budget-legend-item"><span class="d" style="background: var(--surface-3);"></span>Remaining <span class="v">$114k</span></div>
                    </div>
                  </div>
                </div>

                <!-- Shoot schedule -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Shoot schedule</div><div class="card-sub">Day 4 of 8</div></div>
                    <a class="card-action">Calendar →</a>
                  </div>
                  <div class="schedule-day">
                    <div class="schedule-date today"><div class="m">Apr</div><div class="d">05</div></div>
                    <div class="schedule-info"><div class="schedule-loc">Pyramids plateau · Magic hour</div><div class="schedule-cast">Lead · 12 crew · Steadicam</div></div>
                    <span class="schedule-time">4:30 – 7:00 PM</span>
                  </div>
                  <div class="schedule-day">
                    <div class="schedule-date"><div class="m">Apr</div><div class="d">07</div></div>
                    <div class="schedule-info"><div class="schedule-loc">Downtown Cairo · Apartment int.</div><div class="schedule-cast">Lead + Supporting · 9 crew</div></div>
                    <span class="schedule-time">8:00 AM – 6:00 PM</span>
                  </div>
                  <div class="schedule-day">
                    <div class="schedule-date"><div class="m">Apr</div><div class="d">10</div></div>
                    <div class="schedule-info"><div class="schedule-loc">Nile Corniche · Walking scene</div><div class="schedule-cast">Lead · 6 crew · Dolly</div></div>
                    <span class="schedule-time">7:00 – 11:00 AM</span>
                  </div>
                </div>

                <!-- Team -->
                <div class="card">
                  <div class="card-head">
                    <div><div class="card-title">Team</div><div class="card-sub">7 people · 5 online</div></div>
                    <a class="card-action">${I.plus}</a>
                  </div>
                  <div class="card-body" style="display: flex; flex-direction: column; gap: 10px;">
                    ${['Yasmin F. · Director · 🟢','Nour H. · Editor · 🟢','Mohamed R. · DOP · 🟢','Sara A. · DIT · 🟢','Karim F. · Producer · ⚪','Ahmed E. · Archive · 🟢','Laila M. · PM · ⚪'].map((t,i) => `
                      <div style="display:flex;align-items:center;gap:10px;">
                        <div class="mini-av" style="background: ${['#FF8A3D','#6E7BFF','#F472B6','#34D399','#60A5FA','#FBBF24','#2DD4BF'][i]}; width:26px;height:26px;font-size:9px;">${t.split(' ')[0][0]}${t.split(' ')[1][0]}</div>
                        <span style="font-size:12px;flex:1;">${t}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function sidePanelProjects() {
  return `
  <aside class="side">
    <div class="side-head">
      <div class="side-title">Projects</div>
      <div class="side-sub">12 active · 8 draft · 23 archived</div>
    </div>
    <div class="side-search">${I.search}<span>Filter projects</span></div>
    <div class="side-section">
      <div class="side-section-label">Pinned</div>
      <a class="side-item active"><span class="emoji">🎬</span>Sunset in Giza</a>
      <a class="side-item"><span class="emoji">☕</span>Qahwa Spot</a>
      <a class="side-item"><span class="emoji">🌊</span>Nile Blue</a>
    </div>
    <div class="side-section">
      <div class="side-section-label">In production</div>
      <a class="side-item"><span class="emoji">🎭</span>Al Bahr</a>
      <a class="side-item"><span class="emoji">📻</span>Desert Radio</a>
      <a class="side-item"><span class="emoji">🌙</span>Midnight Cairo</a>
      <a class="side-item"><span class="emoji">🔥</span>Jasmine &amp; Fire</a>
    </div>
    <div class="side-section">
      <div class="side-section-label">Archived</div>
      <a class="side-item" style="color:var(--ink-4);"><span class="emoji">📀</span>The Quiet Reel</a>
      <a class="side-item" style="color:var(--ink-4);"><span class="emoji">🎞</span>Last Summer</a>
    </div>
  </aside>`;
}

// ============================================================
// SCREEN 4: THREADS / CHAT
// ============================================================
function screenThreads() {
  return `
  <section class="screen" id="screen-threads">
    <p class="s-eyebrow">Screen 03 · Threads</p>
    <h2 class="s-title">Chat that knows your work</h2>
    <p class="s-desc">Every channel is a project. Every message can reference a file, a drive, a task. Click any attachment to open it in its real home — no context switching.</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">#sunset-giza — Studio OS</span>
      </div>
      <div class="app" style="grid-template-columns: 64px 1fr;">
        ${rail('chat', { chat: true })}
        <div class="threads-layout">

          <!-- Channels list -->
          <aside class="threads-list">
            <div class="threads-list-head">
              <span>Channels</span>
              <button class="btn-icon" style="width:26px;height:26px;">${icon('<path d="M12 5v14M5 12h14"/>', 12)}</button>
            </div>
            ${['sunset-giza|3|active','qahwa-spot|0|','nile-blue|12|','al-bahr|0|','desert-radio|0|','jasmine-fire|1|','studio-general|0|','archive-ops|0|','random|0|'].map(c => {
              const [name, unread, active] = c.split('|');
              return `<div class="channel-item ${active}">${I.hash}<span style="flex:1;">${name}</span>${unread !== '0' ? `<span class="unread">${unread}</span>` : ''}</div>`;
            }).join('')}
            <div class="threads-list-head" style="margin-top: 14px;"><span>Direct</span></div>
            ${[['Nour H.', true], ['Mohamed R.', true], ['Sara A.', true], ['Karim F.', false], ['Yasmin F.', false]].map(([n, online]) => `
              <div class="channel-item">${online ? '🟢' : '⚪'}<span style="flex:1;">${n}</span></div>
            `).join('')}
          </aside>

          <!-- Chat main -->
          <div class="chat-main">
            <div class="chat-head">
              <div>
                <div class="chat-head-title">${I.hash} sunset-giza</div>
                <div class="chat-head-sub"><span>Sunset in Giza · Feature</span><span>·</span><span>7 members</span><span>·</span><span style="color: var(--ok);">● 5 online</span></div>
              </div>
              <div class="chat-head-actions">
                <button class="btn-icon">${I.phone}</button>
                <button class="btn-icon">${I.video}</button>
                <button class="btn-icon">${I.users}</button>
                <button class="btn-icon">${I.more}</button>
              </div>
            </div>

            <div class="chat-body">
              ${msg('NH', '#6E7BFF', 'Nour H.', '9:42 AM',
                `Good morning everyone. Day 4 footage is ingested — <span class="mention">@mohamed.ramy</span> the proxies are ready for your review.`,
                attach('drive', 'SSD_MASTER_04 / 03_Proxies / Day4', '140 GB · 42 clips', 'Open in Archive'),
                [['🔥', 2, false], ['✅', 1, true]]
              )}

              ${msg('MR', '#FF8A3D', 'Mohamed R.', '9:48 AM',
                `Amazing. Already watching — the magic hour shots are stunning. One thing: clip <b>A012_C034</b> has a focus issue at ~00:14. Let's reshoot that one tonight.`,
                null, [['👍', 3, true]], 'Reply in thread · 3 replies'
              )}

              ${msg('SA', '#34D399', 'Sara A.', '10:02 AM',
                `Adding the reshoot to the shot list for tonight. Call sheet updated.`,
                attach('task', 'Reshoot A012_C034 at Pyramids plateau', 'Due tonight · High priority', 'Open task'),
                null
              )}

              ${msg('AH', '#F472B6', 'Ahmed E.', '10:15 AM',
                `Heads up <span class="mention">@sara.ahmed</span> <span class="mention">@nour.hossam</span> — HDD_ARCHIVE_17 is at 87%. I'll move the old dailies to HDD_BACKUP_MIRROR_A tonight so we don't run out during tomorrow's ingest.`,
                attach('drive', 'HDD_ARCHIVE_17 → HDD_BACKUP_MIRROR_A', 'Move 1.2 TB · Est. 2h', 'Schedule move'),
                [['🙏', 2, false], ['💪', 1, false]]
              )}

              ${msg('KF', '#FBBF24', 'Karim F.', '10:38 AM',
                `Budget check: we're at 62%, still on track. Catering for week 2 is locked. <span class="mention">@ahmed.elsharawy</span> I need you to approve the equipment rental for the Nile scene — invoice attached to the budget tab.`,
                null, null
              )}
            </div>

            <!-- Composer -->
            <div class="chat-composer">
              <div class="composer-box">
                <textarea class="composer-text" rows="2" placeholder="Message #sunset-giza — use @ to mention, # to reference drives or projects…"></textarea>
                <div class="composer-actions">
                  <button class="composer-btn">${I.paperclip}</button>
                  <button class="composer-btn">${I.smile}</button>
                  <button class="composer-btn">${I.mic}</button>
                  <button class="composer-btn">${I.code}</button>
                  <button class="composer-btn">${I.link}</button>
                  <button class="composer-send">${I.send} Send</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Context panel -->
          <aside class="thread-context">
            <div class="ctx-section">
              <div class="ctx-label">About this channel</div>
              <div class="ctx-card">
                <div class="ctx-poster pp-g1"></div>
                <h4>Sunset in Giza</h4>
                <p>Feature · Lumière Studios · Dir. Yasmin Fawzi</p>
                <div class="ctx-stats">
                  <div><div class="ctx-stat-l">Progress</div><div class="ctx-stat-v">68%</div></div>
                  <div><div class="ctx-stat-l">Shoot day</div><div class="ctx-stat-v">4 / 8</div></div>
                  <div><div class="ctx-stat-l">Tasks</div><div class="ctx-stat-v">24 open</div></div>
                  <div><div class="ctx-stat-l">Drives</div><div class="ctx-stat-v">3 linked</div></div>
                </div>
              </div>
            </div>
            <div class="ctx-section">
              <div class="ctx-label">Pinned</div>
              <div class="ctx-card" style="padding: 10px 12px; display: flex; align-items: center; gap: 10px;">
                ${I.folder}
                <div><div style="font-size:12px;font-weight:600;">Call Sheets · Week 1</div><div style="font-size:10px;color:var(--ink-3);">7 documents</div></div>
              </div>
            </div>
            <div class="ctx-section">
              <div class="ctx-label">Members (7)</div>
              <div class="ctx-members">
                ${['NH·Nour','MR·Mohamed','SA·Sara','KF·Karim','AH·Ahmed','YF·Yasmin','LM·Laila'].map((p,i)=>`
                  <div class="ctx-member"><div class="av" style="background:${['#6E7BFF','#FF8A3D','#34D399','#FBBF24','#F472B6','#60A5FA','#2DD4BF'][i]}">${p.split('·')[0]}</div>${p.split('·')[1]}</div>
                `).join('')}
              </div>
            </div>
            <div class="ctx-section">
              <div class="ctx-label">Shared recently</div>
              ${['📄 Call_Sheet_Day_4.pdf','🎞 A012_C034_proxy.mp4','💰 Catering_Week2.xlsx'].map(f => `
                <div style="padding: 8px 10px; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; font-size: 11px; margin-bottom: 6px;">${f}</div>
              `).join('')}
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>`;
}

function msg(initials, color, name, time, body, attachHtml, reactions, thread) {
  return `
    <div class="msg">
      <div class="msg-av" style="background: ${color};">${initials}</div>
      <div class="msg-body">
        <div class="msg-head"><span class="msg-name">${name}</span><span class="msg-time">${time}</span></div>
        <div class="msg-text">${body}</div>
        ${attachHtml || ''}
        ${reactions ? `<div class="reactions">${reactions.map(([e, n, me]) => `<div class="reaction ${me ? 'me' : ''}">${e} ${n}</div>`).join('')}</div>` : ''}
        ${thread ? `<div class="thread-reply">💬 ${thread}</div>` : ''}
      </div>
    </div>`;
}

function attach(type, title, sub, cta) {
  const iconMap = {
    drive: { icon: I.drive, bg: 'var(--brand-soft)', color: 'var(--brand)' },
    task: { icon: I.tasks, bg: 'var(--ok-soft)', color: 'var(--ok)' },
    file: { icon: I.folder, bg: 'var(--film-soft)', color: 'var(--film)' },
  };
  const m = iconMap[type];
  return `
    <div class="msg-attach">
      <div class="msg-attach-icon" style="background: ${m.bg}; color: ${m.color};">${m.icon}</div>
      <div class="msg-attach-info">
        <div class="msg-attach-title">${title}</div>
        <div class="msg-attach-sub">${sub}</div>
      </div>
      <div class="msg-attach-open">${cta} →</div>
    </div>`;
}

// ============================================================
// SCREEN 5: TASKS (Kanban)
// ============================================================
function screenTasks() {
  return `
  <section class="screen" id="screen-tasks">
    <p class="s-eyebrow">Screen 04 · Tasks</p>
    <h2 class="s-title">Kanban that moves with the pipeline</h2>
    <p class="s-desc">Drag cards across stages. Each card is tagged by project, phase, and priority. Built-in views for board, list, timeline, and "my tasks only."</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">Tasks — Studio OS</span>
      </div>
      <div class="app">
        ${rail('tasks')}
        ${sidePanelTasks()}
        <div class="main">
          ${topbar(['Workspace'], 'Tasks', `
            <button class="btn btn-secondary btn-sm">Filter</button>
            <button class="btn btn-primary btn-sm">${I.plus} New task</button>
          `)}
          <div class="content">
            <div class="kanban-head">
              <div>
                <div class="kanban-title">All tasks</div>
                <div class="kanban-sub">48 open · 34 done this week · 2 overdue</div>
              </div>
              <div class="kanban-views">
                <button class="kanban-view active">Board</button>
                <button class="kanban-view">List</button>
                <button class="kanban-view">Timeline</button>
                <button class="kanban-view">Mine</button>
              </div>
            </div>

            <div class="kanban-board">
              <!-- Column: Backlog -->
              <div class="kanban-col">
                <div class="kanban-col-head">
                  <div class="kanban-col-indicator" style="background: var(--ink-4);"></div>
                  <span class="kanban-col-title">Backlog</span>
                  <span class="kanban-col-count">8</span>
                  <span class="kanban-col-add">+</span>
                </div>
                <div class="kanban-cards">
                  ${kanbanCard('Review sound designer quotes for Sunset', 'post', 'Sunset in Giza', 'Apr 12', 'AH', '#6E7BFF', false, 3, 2)}
                  ${kanbanCard('Scout new Downtown location', 'shoot', 'Al Bahr', 'Apr 15', 'MR', '#FF8A3D', false, 0, 0)}
                  ${kanbanCard('Draft contract — Desert Radio talent', 'admin', 'Desert Radio', 'Apr 18', 'KF', '#FBBF24', false, 1, 0)}
                  ${kanbanCard('Archive The Quiet Reel masters to cold storage', 'archive', 'The Quiet Reel', 'Apr 20', 'AH', '#6E7BFF', false, 2, 1)}
                </div>
              </div>

              <!-- Column: In Progress -->
              <div class="kanban-col">
                <div class="kanban-col-head">
                  <div class="kanban-col-indicator" style="background: var(--brand);"></div>
                  <span class="kanban-col-title">In progress</span>
                  <span class="kanban-col-count">6</span>
                  <span class="kanban-col-add">+</span>
                </div>
                <div class="kanban-cards">
                  ${kanbanCard('Ingest Day 3 footage → SSD_MASTER_04', 'archive', 'Sunset in Giza', 'Today', 'SA', '#34D399', true, 5, 3)}
                  ${kanbanCard('Edit Qahwa Spot rough cut v3', 'post', 'Qahwa Spot', 'Apr 7', 'NH', '#6E7BFF', false, 12, 4)}
                  ${kanbanCard('Nile Blue interview day — 4 subjects', 'shoot', 'Nile Blue', 'Apr 8', 'MR', '#FF8A3D', false, 8, 2)}
                  ${kanbanCard('Color grade Desert Radio hero shots', 'post', 'Desert Radio', 'Apr 10', 'NH', '#6E7BFF', false, 4, 1)}
                </div>
              </div>

              <!-- Column: Review -->
              <div class="kanban-col">
                <div class="kanban-col-head">
                  <div class="kanban-col-indicator" style="background: var(--warn);"></div>
                  <span class="kanban-col-title">Review</span>
                  <span class="kanban-col-count">4</span>
                  <span class="kanban-col-add">+</span>
                </div>
                <div class="kanban-cards">
                  ${kanbanCard('Deliver editor\'s first cut — Sunset', 'post', 'Sunset in Giza', 'Apr 8', 'NH', '#6E7BFF', false, 0, 0)}
                  ${kanbanCard('Client approval — Jasmine & Fire trailer', 'post', 'Jasmine & Fire', 'Apr 6', 'KF', '#FBBF24', true, 6, 8)}
                  ${kanbanCard('Legal review on Lumière Studios contract', 'admin', 'Sunset in Giza', 'Apr 9', 'KF', '#FBBF24', false, 2, 0)}
                </div>
              </div>

              <!-- Column: Done -->
              <div class="kanban-col">
                <div class="kanban-col-head">
                  <div class="kanban-col-indicator" style="background: var(--ok);"></div>
                  <span class="kanban-col-title">Done</span>
                  <span class="kanban-col-count">34</span>
                </div>
                <div class="kanban-cards">
                  ${kanbanCard('Lock Day 4 call sheet', 'shoot', 'Sunset in Giza', 'Apr 2', 'MR', '#FF8A3D', false, 5, 1)}
                  ${kanbanCard('Approve invoice — Red Sea Films', 'admin', 'Al Bahr', 'Apr 2', 'KF', '#FBBF24', false, 0, 0)}
                  ${kanbanCard('QR-tag HDD_ARCHIVE_21', 'archive', 'Archive ops', 'Apr 1', 'AH', '#6E7BFF', false, 1, 0)}
                  ${kanbanCard('Edit Qahwa Spot v2', 'post', 'Qahwa Spot', 'Mar 30', 'NH', '#6E7BFF', false, 8, 3)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function sidePanelTasks() {
  return `
  <aside class="side">
    <div class="side-head">
      <div class="side-title">Tasks</div>
      <div class="side-sub">Your workspace</div>
    </div>
    <div class="side-search">${I.search}<span>Filter tasks</span></div>
    <div class="side-section">
      <div class="side-section-label">Views</div>
      <a class="side-item active">${I.tasks} All tasks <span class="count">48</span></a>
      <a class="side-item">${I.star} My tasks <span class="unread">6</span></a>
      <a class="side-item">${I.clock} Due today <span class="count">3</span></a>
      <a class="side-item">${icon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>')} Overdue <span class="count">2</span></a>
    </div>
    <div class="side-section">
      <div class="side-section-label">By project</div>
      <a class="side-item">${I.project} Sunset in Giza <span class="count">24</span></a>
      <a class="side-item">${I.project} Qahwa Spot <span class="count">6</span></a>
      <a class="side-item">${I.project} Nile Blue <span class="count">12</span></a>
      <a class="side-item">${I.project} Al Bahr <span class="count">4</span></a>
      <a class="side-item">${I.project} Desert Radio <span class="count">2</span></a>
    </div>
    <div class="side-section">
      <div class="side-section-label">By phase</div>
      <a class="side-item">${I.sparkles} Brief</a>
      <a class="side-item">${I.calendar} Schedule</a>
      <a class="side-item">${I.camera} Shoot</a>
      <a class="side-item">${I.edit} Naming</a>
      <a class="side-item">${I.video} Post</a>
      <a class="side-item">${I.archive} Archive</a>
    </div>
  </aside>`;
}

function kanbanCard(title, tag, project, date, avatar, avColor, priorityHi, comments, attachments) {
  const tagMap = {
    post: ['kc-tag-post', 'Post'],
    shoot: ['kc-tag-shoot', 'Shoot'],
    admin: ['kc-tag-admin', 'Admin'],
    archive: ['kc-tag-archive', 'Archive'],
  };
  const [tagClass, tagLabel] = tagMap[tag];
  const dateColor = date === 'Today' || date === 'Overdue' ? 'color: var(--warn);' : '';
  return `
    <div class="kanban-card ${priorityHi ? 'priority-hi' : ''}">
      <div class="kanban-card-tags">
        <span class="kanban-card-tag ${tagClass}">${tagLabel}</span>
        <span class="kanban-card-tag" style="background: var(--surface-3); color: var(--ink-3);">${project}</span>
      </div>
      <div class="kanban-card-title">${title}</div>
      <div class="kanban-card-foot">
        <div class="kanban-card-meta">
          ${comments > 0 ? `<span>${icon('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', 11)} ${comments}</span>` : ''}
          ${attachments > 0 ? `<span>${icon('<path d="M21.4 11l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7L9.4 17.4a2 2 0 0 1-2.8-2.8L15 6.2"/>', 11)} ${attachments}</span>` : ''}
          <span style="${dateColor}">${I.clock} ${date}</span>
        </div>
        <div class="kanban-card-av" style="background: ${avColor};">${avatar}</div>
      </div>
    </div>`;
}

// ============================================================
// SCREEN 6: PIPELINE
// ============================================================
function screenPipeline() {
  return `
  <section class="screen" id="screen-pipeline">
    <p class="s-eyebrow">Screen 05 · Pipeline</p>
    <h2 class="s-title">The studio's assembly line</h2>
    <p class="s-desc">Every project flows through six lanes. This is the view producers open every morning to see where everything stands — and where things are stuck.</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">Pipeline — Studio OS</span>
      </div>
      <div class="app">
        ${rail('pipeline')}
        ${sidePanelPipeline()}
        <div class="main">
          ${topbar(['Workspace'], 'Pipeline', `
            <button class="btn btn-secondary btn-sm">This month</button>
            <button class="btn btn-primary btn-sm">${I.plus} New project</button>
          `)}
          <div class="content">
            <h2 class="pipe-page-title">Production pipeline</h2>
            <p class="pipe-page-sub">Thursday, April 5 · 12 active projects across 6 stages</p>

            <div class="pipe-lanes">
              ${pipeLane(1, 'Brief & Budget', 'Client onboarding, contracts, budget', 'var(--pink)', 'var(--pink-soft)', 2, [
                ['Midnight Cairo', 'pp-g5', 'Independent'],
                ['New Client — TBD', 'pp-g1', 'Lumière Studios'],
              ])}
              ${pipeLane(2, 'Schedule', 'Call sheets, locations, cast, crew', 'var(--info)', 'var(--info-soft)', 1, [
                ['Al Bahr', 'pp-g4', 'Red Sea Films'],
              ])}
              ${pipeLane(3, 'Shoot', 'Active production, daily footage', 'var(--film)', 'var(--film-soft)', 3, [
                ['Sunset in Giza', 'pp-g1', 'Day 4 of 8'],
                ['Nile Blue', 'pp-g3', 'Interviews ongoing'],
                ['Desert Radio', 'pp-g6', 'Final hero shot'],
              ])}
              ${pipeLane(4, 'Naming', 'Auto-rename footage, QR tag', 'var(--warn)', 'var(--warn-soft)', 1, [
                ['Qahwa Spot', 'pp-g2', '420 clips'],
              ])}
              ${pipeLane(5, 'Post', 'Edit, color, sound', 'var(--teal)', 'var(--teal-soft)', 3, [
                ['Jasmine & Fire', 'pp-g7', 'Client review'],
                ['Qahwa Spot', 'pp-g2', 'Color grading'],
                ['Desert Radio', 'pp-g6', 'Sound design'],
              ])}
              ${pipeLane(6, 'Archive', 'SSD → HDD, backup mirror, QR', 'var(--ok)', 'var(--ok-soft)', 2, [
                ['The Quiet Reel', 'pp-g7', 'Cold storage'],
                ['Last Summer', 'pp-g8', 'Mirror backup'],
              ])}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function sidePanelPipeline() {
  return `
  <aside class="side">
    <div class="side-head">
      <div class="side-title">Pipeline</div>
      <div class="side-sub">Studio flow</div>
    </div>
    <div class="side-search">${I.search}<span>Find a project</span></div>
    <div class="side-section">
      <div class="side-section-label">View</div>
      <a class="side-item active">${I.pipeline} All stages</a>
      <a class="side-item">${I.sparkles} Brief · 2</a>
      <a class="side-item">${I.calendar} Schedule · 1</a>
      <a class="side-item">${I.camera} Shoot · 3</a>
      <a class="side-item">${I.edit} Naming · 1</a>
      <a class="side-item">${I.video} Post · 3</a>
      <a class="side-item">${I.archive} Archive · 2</a>
    </div>
    <div class="side-section">
      <div class="side-section-label">Bottlenecks</div>
      <a class="side-item" style="color: var(--warn);">${icon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>')} Qahwa Spot stuck 4 days</a>
      <a class="side-item" style="color: var(--bad);">${icon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>')} 3 drives near full</a>
    </div>
  </aside>`;
}

function pipeLane(num, title, sub, color, bgColor, count, items) {
  return `
    <div class="pipe-lane">
      <div class="pipe-lane-head">
        <div class="pipe-lane-num" style="background: ${bgColor}; color: ${color};">${num}</div>
        <div>
          <div class="pipe-lane-title">${title}</div>
          <div class="pipe-lane-sub">${sub}</div>
        </div>
        <span class="pipe-lane-count">${count} ${count === 1 ? 'project' : 'projects'}</span>
      </div>
      <div class="pipe-items">
        ${items.map(([name, gradient, meta]) => `
          <div class="pipe-item">
            <div class="pipe-item-poster ${gradient}"></div>
            <div class="pipe-item-title">${name}</div>
            <div class="pipe-item-meta"><span>${meta}</span></div>
            <div class="pipe-item-progress"><div class="pipe-item-progress-fill" style="width: ${Math.floor(30 + Math.random() * 60)}%;"></div></div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// ============================================================
// SCREEN 7: ARCHIVE (dark)
// ============================================================
function screenArchive() {
  return `
  <section class="screen" id="screen-archive">
    <p class="s-eyebrow">Screen 06 · Archive</p>
    <h2 class="s-title">The original archive — now darker, sharper</h2>
    <p class="s-desc">Everything you already know about drives, folders, and QR codes — rebuilt in the new visual language and wired to the rest of Studio OS.</p>

    <div class="device">
      <div class="device-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <span class="device-title">Archive — Studio OS</span>
      </div>
      <div class="app">
        ${rail('archive')}
        ${sidePanelArchive()}
        <div class="main">
          ${topbar(['Workspace'], 'Archive', `
            <button class="btn btn-secondary btn-sm">${icon('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>')} Batch QR</button>
            <button class="btn btn-secondary btn-sm">Scan drive</button>
            <button class="btn btn-primary btn-sm">${I.plus} New drive</button>
          `)}
          <div class="content">
            <div class="arch-head">
              <div>
                <div class="arch-title">All drives</div>
                <div class="arch-sub">42 drives across 5 locations · 186 TB used of 312 TB</div>
              </div>
              <div class="arch-stats">
                <div class="arch-stat"><div class="arch-stat-v">42</div><div class="arch-stat-l">Drives</div></div>
                <div class="arch-stat"><div class="arch-stat-v">186 TB</div><div class="arch-stat-l">Used</div></div>
                <div class="arch-stat"><div class="arch-stat-v" style="color: var(--warn);">5</div><div class="arch-stat-l">Attention</div></div>
              </div>
            </div>

            <div class="arch-toolbar">
              <div class="arch-search">${I.search}<input placeholder="Search by name, serial, location, or project…"><span class="kbd">/</span></div>
              <button class="btn btn-ghost btn-sm">Sort: Usage ↓</button>
              <div class="kanban-views"><button class="kanban-view active">Table</button><button class="kanban-view">Cards</button></div>
            </div>

            <div class="arch-chips">
              <div class="arch-chip active">All <span class="pc">42</span></div>
              <div class="arch-chip">SSD <span class="pc">14</span></div>
              <div class="arch-chip">HDD <span class="pc">28</span></div>
              <div class="arch-chip">Critical (>92%) <span class="pc">2</span></div>
              <div class="arch-chip">Needs attention <span class="pc">5</span></div>
              <div class="arch-chip">Studio A</div>
              <div class="arch-chip">Studio B</div>
              <div class="arch-chip">Vault</div>
              <div class="arch-chip">Edit Bay 1</div>
              <div class="arch-chip">Edit Bay 2</div>
            </div>

            <div class="arch-table">
              <div class="arch-table-head">
                <span></span><span>Name</span><span>Type &amp; capacity</span><span>Location</span><span>Usage</span><span>Status</span><span></span>
              </div>
              ${driveRow('SSD_MASTER_04', 'S4X-***-991', 'ssd', 'NVMe SSD', '2 TB · 840 GB used', 'Studio A', 'Edit desk · Rack 1', 42, '', 'chip-ok', 'Healthy')}
              ${driveRow('HDD_ARCHIVE_17', 'W7A-***-482', 'hdd', 'HDD 8 TB', '6.96 TB used', 'Vault', 'Shelf 3 · Cold', 87, 'warn', 'chip-warn', 'Nearly full')}
              ${driveRow('HDD_RAW_DAILIES_03', 'LC3-***-221', 'hdd', 'HDD 12 TB', '11.5 TB used', 'Edit Bay 2', 'Colorist station', 96, 'crit', 'chip-bad', 'Critical')}
              ${driveRow('SSD_PROXY_CACHE', 'T9P-***-118', 'ssd', 'External SSD', '4 TB · 1.12 TB used', 'Studio B', 'Rack 2', 28, '', 'chip-ok', 'Healthy')}
              ${driveRow('HDD_BACKUP_MIRROR_A', 'IW-***-633', 'hdd', 'HDD 16 TB', '10.56 TB used', 'Vault', 'Shelf 1 · Mirror', 66, '', 'chip-brand', 'Backup')}
              ${driveRow('SSD_COLOR_PIPELINE', 'OE1-***-445', 'ssd', 'External SSD', '2 TB · 1.04 TB used', 'Edit Bay 1', 'Colorist station', 52, '', 'chip-ok', 'Healthy')}
              ${driveRow('HDD_CLIENT_DELIVERABLES', 'WE8-***-712', 'hdd', 'HDD 10 TB', '8.2 TB used', 'Vault', 'Shelf 2', 82, 'warn', 'chip-warn', 'Watch')}
              ${driveRow('SSD_INGEST_STATION', 'SX5-***-029', 'ssd', 'NVMe SSD', '4 TB · 320 GB used', 'Studio A', 'DIT cart', 8, '', 'chip-ok', 'Healthy')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function sidePanelArchive() {
  return `
  <aside class="side">
    <div class="side-head">
      <div class="side-title">Archive</div>
      <div class="side-sub">42 drives · 186 TB</div>
    </div>
    <div class="side-search">${I.search}<span>Find a drive</span></div>
    <div class="side-section">
      <div class="side-section-label">Views</div>
      <a class="side-item active">${I.drive} All drives <span class="count">42</span></a>
      <a class="side-item">${I.film} SSDs <span class="count">14</span></a>
      <a class="side-item">${I.archive} HDDs <span class="count">28</span></a>
      <a class="side-item" style="color: var(--warn);">${icon('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>')} Needs attention <span class="count">5</span></a>
    </div>
    <div class="side-section">
      <div class="side-section-label">Locations</div>
      <a class="side-item">📍 Studio A <span class="count">8</span></a>
      <a class="side-item">📍 Studio B <span class="count">6</span></a>
      <a class="side-item">📍 Vault <span class="count">18</span></a>
      <a class="side-item">📍 Edit Bay 1 <span class="count">5</span></a>
      <a class="side-item">📍 Edit Bay 2 <span class="count">5</span></a>
    </div>
  </aside>`;
}

function driveRow(name, sn, type, cap, capSub, loc, locSub, pct, fillClass, chipClass, status) {
  const pctColor = pct > 92 ? 'color: var(--bad);' : pct > 85 ? 'color: var(--warn);' : '';
  return `
    <div class="arch-table-row">
      <div class="at-icon ${type}">${I.drive}</div>
      <div>
        <div class="at-name">${name}</div>
        <div class="at-sn">${sn}</div>
      </div>
      <div class="at-cell"><b>${cap}</b><br><span style="color: var(--ink-4); font-size: 10px;">${capSub}</span></div>
      <div class="at-cell">${loc}<br><span style="color: var(--ink-4); font-size: 10px;">${locSub}</span></div>
      <div class="at-usage">
        <div class="at-usage-bar"><div class="at-usage-fill ${fillClass}" style="width: ${pct}%;"></div></div>
        <span class="at-pct" style="${pctColor}">${pct}%</span>
      </div>
      <div><span class="chip ${chipClass}"><span class="chip-dot"></span>${status}</span></div>
      <button class="btn-icon" style="width:28px;height:28px;">${I.more}</button>
    </div>`;
}

// ============================================================
// SCREEN 8: DEVICES (Mac + iPad + iPhone)
// ============================================================
function screenDevices() {
  return `
  <section class="screen" id="screen-devices">
    <p class="s-eyebrow">Screen 07 · Devices</p>
    <h2 class="s-title">Mac · iPad · iPhone</h2>
    <p class="s-desc">Same design language, three form factors. Desktop is the control room. iPad is the shoot-day companion. iPhone is the pocket check-in.</p>

    <div class="devices-grid">

      <!-- Mac -->
      <div class="mac-preview">
        <div style="font-size: 11px; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 14px;">Mac · 16"</div>
        <div class="device" style="max-width: 740px;">
          <div class="device-bar">
            <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
            <span class="device-title">Studio OS — Home</span>
          </div>
          <div class="app" style="height: 500px; grid-template-columns: 48px 180px 1fr;">
            <aside class="rail" style="padding: 10px 0;">
              <div class="rail-logo" style="width: 30px; height: 30px; font-size: 12px;">F</div>
              <div class="rail-items" style="margin-top: 12px;">
                ${['home','project','chat','tasks','pipeline','archive'].map((k,i) => `<div class="rail-item ${k==='home'?'active':''}" style="width:32px;height:32px;">${I[k]}</div>`).join('')}
              </div>
              <div class="rail-bottom"><div class="rail-avatar" style="width: 28px; height: 28px; font-size: 9px;">AH</div></div>
            </aside>
            <aside class="side">
              <div class="side-head" style="padding: 12px 12px 8px;">
                <div class="side-title" style="font-size: 13px;">Film Kham</div>
                <div class="side-sub" style="font-size: 9px;">7 online</div>
              </div>
              <div class="side-section" style="padding: 4px 8px;">
                <div class="side-section-label" style="padding: 8px 8px 4px; font-size: 9px;">Workspace</div>
                <a class="side-item active" style="padding: 6px 8px; font-size: 11px;">${I.home} Home</a>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.project} Projects <span class="count">12</span></a>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.tasks} Tasks <span class="unread">6</span></a>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.archive} Archive</a>
              </div>
              <div class="side-section" style="padding: 4px 8px;">
                <div class="side-section-label" style="padding: 8px 8px 4px; font-size: 9px;">Channels</div>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.hash} sunset-giza <span class="unread">3</span></a>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.hash} nile-blue <span class="unread">12</span></a>
                <a class="side-item" style="padding: 6px 8px; font-size: 11px;">${I.hash} qahwa-spot</a>
              </div>
            </aside>
            <div class="main">
              <div class="topbar" style="padding: 10px 18px;">
                <div>
                  <div class="crumb-row" style="font-size: 10px;">Workspace</div>
                  <h1 style="font-size: 15px;">Home</h1>
                </div>
                <div class="spacer"></div>
                <button class="btn btn-primary btn-sm" style="padding: 5px 10px; font-size: 10px;">${I.plus} New</button>
              </div>
              <div class="content" style="padding: 16px;">
                <div class="hero-card" style="padding: 20px;">
                  <div class="hero-greet" style="font-size: 9px; margin-bottom: 6px;"><span class="pulse"></span>Apr 5 · 9:42 AM</div>
                  <div class="hero-title" style="font-size: 22px; margin-bottom: 6px;">Good morning, Ahmed.</div>
                  <div class="hero-sub" style="font-size: 11px; margin-bottom: 14px;">6 tasks due today · 2 shoots this week · 3 drives need attention.</div>
                </div>
                <div class="kpis" style="grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 12px; margin-bottom: 0;">
                  ${[['Projects','12','var(--brand)'],['Tasks','34/48','var(--ok)'],['Budget','62%','var(--film)'],['Attention','5','var(--warn)']].map(([l,v,c]) => `
                    <div class="kpi" style="padding: 10px 12px;">
                      <div class="kpi-label" style="font-size: 8px;">${l}</div>
                      <div class="kpi-val" style="font-size: 16px; margin-top: 4px;">${v}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- iPad -->
      <div>
        <div style="font-size: 11px; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 14px; text-align: center;">iPad Pro</div>
        <div class="ipad-frame">
          <div class="ipad-screen">
            <div class="ipad-app">
              <aside class="ipad-rail">
                <div class="ipad-rail-logo"></div>
                ${['home','project','chat','tasks','archive'].map((k,i) => `<div class="ipad-rail-item ${i===0?'active':''}">${I[k]}</div>`).join('')}
              </aside>
              <div class="ipad-main">
                <div class="ipad-title">Good morning</div>
                <div class="ipad-sub">Thursday, April 5</div>
                <div class="ipad-hero">
                  <div class="ipad-hero-title">12 active projects</div>
                  <div class="ipad-hero-sub">Day 4 of Sunset in Giza shoot · Everything on track</div>
                </div>
                <div class="ipad-grid">
                  <div class="ipad-kpi"><div class="ipad-kpi-l">Tasks</div><div class="ipad-kpi-v">34<span style="font-size:10px;color:var(--ink-3);">/48</span></div></div>
                  <div class="ipad-kpi"><div class="ipad-kpi-l">Budget</div><div class="ipad-kpi-v">62%</div></div>
                  <div class="ipad-kpi"><div class="ipad-kpi-l">Storage</div><div class="ipad-kpi-v">186<span style="font-size:9px;">TB</span></div></div>
                  <div class="ipad-kpi"><div class="ipad-kpi-l">Team online</div><div class="ipad-kpi-v">7</div></div>
                </div>
                <div class="ipad-list">
                  <div class="ipad-list-item">
                    <div class="ipad-list-poster pp-g1"></div>
                    <div style="flex:1;min-width:0;"><div class="ipad-list-title">Sunset in Giza</div><div class="ipad-list-meta">Day 4 · 68%</div></div>
                    <span class="chip chip-brand" style="font-size: 8px; padding: 2px 6px;">Shoot</span>
                  </div>
                  <div class="ipad-list-item">
                    <div class="ipad-list-poster pp-g2"></div>
                    <div style="flex:1;min-width:0;"><div class="ipad-list-title">Qahwa Spot</div><div class="ipad-list-meta">Post · 92%</div></div>
                    <span class="chip chip-warn" style="font-size: 8px; padding: 2px 6px;">Review</span>
                  </div>
                  <div class="ipad-list-item">
                    <div class="ipad-list-poster pp-g3"></div>
                    <div style="flex:1;min-width:0;"><div class="ipad-list-title">Nile Blue</div><div class="ipad-list-meta">Interviews · 44%</div></div>
                    <span class="chip chip-info" style="font-size: 8px; padding: 2px 6px;">Shoot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- iPhone -->
      <div>
        <div style="font-size: 11px; color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 14px; text-align: center;">iPhone 16 Pro</div>
        <div class="iphone-frame">
          <div class="iphone-notch"></div>
          <div class="iphone-screen" style="position: relative;">
            <div class="iphone-status">
              <span>9:42</span>
              <span style="display:flex;gap:4px;align-items:center;">${icon('<path d="M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',12)} <span style="font-size:9px;">100%</span></span>
            </div>
            <div class="iphone-content">
              <div class="iphone-greet">Apr 5 · Thursday</div>
              <div class="iphone-title">Good morning</div>
              <div class="iphone-card">
                <div class="iphone-card-l">Active now</div>
                <div class="iphone-card-v">12 projects</div>
                <div class="iphone-card-s">6 tasks due today · 3 drives need attention</div>
              </div>
              <div class="iphone-list">
                <div class="iphone-row">
                  <div class="iphone-row-poster pp-g1"></div>
                  <div style="flex:1;min-width:0;">
                    <div class="iphone-row-title">Sunset in Giza</div>
                    <div class="iphone-row-sub">Shoot day 4 · 68%</div>
                  </div>
                  <span class="iphone-row-chip" style="background: var(--brand-soft); color: var(--brand);">Live</span>
                </div>
                <div class="iphone-row">
                  <div class="iphone-row-poster pp-g2"></div>
                  <div style="flex:1;min-width:0;">
                    <div class="iphone-row-title">Qahwa Spot</div>
                    <div class="iphone-row-sub">Review · 92%</div>
                  </div>
                  <span class="iphone-row-chip" style="background: var(--warn-soft); color: var(--warn);">!</span>
                </div>
                <div class="iphone-row">
                  <div class="iphone-row-poster pp-g3"></div>
                  <div style="flex:1;min-width:0;">
                    <div class="iphone-row-title">Nile Blue</div>
                    <div class="iphone-row-sub">Shooting · 44%</div>
                  </div>
                </div>
                <div class="iphone-row">
                  <div class="iphone-row-poster pp-g6"></div>
                  <div style="flex:1;min-width:0;">
                    <div class="iphone-row-title">Desert Radio</div>
                    <div class="iphone-row-sub">Post · 78%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="iphone-tab-bar">
              <div class="iphone-tab active">${I.home}<span>Home</span></div>
              <div class="iphone-tab">${I.project}<span>Projects</span></div>
              <div class="iphone-tab">${I.chat}<span>Chat</span></div>
              <div class="iphone-tab">${I.tasks}<span>Tasks</span></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>`;
}

// ============================================================
// MOUNT
// ============================================================
const SCREEN_ORDER = ['vision', 'home', 'project', 'threads', 'tasks', 'pipeline', 'archive', 'devices'];
const SCREEN_LABELS = {
  vision: 'Vision',
  home: 'Command Center',
  project: 'Project Hub',
  threads: 'Threads',
  tasks: 'Tasks',
  pipeline: 'Pipeline',
  archive: 'Archive',
  devices: 'Devices',
};

const MODULE_PRESETS = {
  'Project Hub': {
    badge: 'System Module',
    meta: 'Brief, budget, schedule, drives',
    description: 'One production surface that now behaves like a real product: faster transitions, quick-open panels, and clearer motion hierarchy.',
    stats: [
      { label: 'Linked views', value: '6' },
      { label: 'Drive sync', value: 'Live' },
      { label: 'Focus state', value: 'Shoot' },
    ],
    bullets: [
      'Open tasks, schedules, and linked drives without leaving the screen.',
      'Move from overview to archive context with one interaction.',
      'Every key row now behaves like a live surface instead of static art.',
    ],
    screen: 'project',
  },
  'Threads & Chat': {
    badge: 'System Module',
    meta: 'Project chat with attachment context',
    description: 'Thread surfaces now react like a working collaboration tool, with channel switching, quick previews, and a more tactile message layer.',
    stats: [
      { label: 'Live channels', value: '9' },
      { label: 'Shared files', value: 'Pinned' },
      { label: 'Context', value: 'Project-aware' },
    ],
    bullets: [
      'Channel clicks update the active thread state and header.',
      'Attachments open in a live side panel instead of staying decorative.',
      'Composer actions give feedback so the mockup feels active.',
    ],
    screen: 'threads',
  },
  'Tasks & To-Dos': {
    badge: 'System Module',
    meta: 'Board, priorities, and daily execution',
    description: 'Tasks can now be checked, opened, and navigated like a real workflow layer inside the system.',
    stats: [
      { label: 'Board modes', value: '3' },
      { label: 'Quick updates', value: 'Live' },
      { label: 'Views', value: 'Board + list' },
    ],
    bullets: [
      'Checkboxes now toggle state directly inside the prototype.',
      'Cards open a richer quick-view instead of acting like dead blocks.',
      'Navigation connects the board with home and project context.',
    ],
    screen: 'tasks',
  },
  'Archive & Pipeline': {
    badge: 'System Module',
    meta: 'SSD to archive workflow',
    description: 'The archive side now feels operational: drive rows open, filters respond, and pipeline surfaces carry stronger motion and depth.',
    stats: [
      { label: 'Tracked stages', value: '6' },
      { label: 'Drive states', value: '42' },
      { label: 'Attention', value: '5 items' },
    ],
    bullets: [
      'Drive surfaces open with usage, location, and next-step context.',
      'Pipeline cards now feel like entries in a live production stream.',
      'Archive filters and view chips react like working controls.',
    ],
    screen: 'archive',
  },
  'Brief & Budget': {
    badge: 'Pipeline Stage',
    meta: 'Stage 1 of 6',
    description: 'The system starts with a structured brief and budget layer that can now open context and jump straight into the deeper workflow.',
    stats: [
      { label: 'Stage', value: '01' },
      { label: 'Outputs', value: 'Scope + cost' },
      { label: 'Next', value: 'Schedule' },
    ],
    bullets: [
      'Capture client scope and crew needs in one place.',
      'Tie budget assumptions to live project surfaces.',
      'Hand off directly into schedule planning.',
    ],
    screen: 'pipeline',
  },
  'Schedule': {
    badge: 'Pipeline Stage',
    meta: 'Stage 2 of 6',
    description: 'Schedules now act like active planning surfaces with linked days, locations, and quick-open detail context.',
    stats: [
      { label: 'Stage', value: '02' },
      { label: 'Focus', value: 'Shoot days' },
      { label: 'Next', value: 'Shoot' },
    ],
    bullets: [
      'Open dates and locations from the schedule itself.',
      'Keep cast, crew, and call times visible in quick context.',
      'Push directly into the shoot execution layer.',
    ],
    screen: 'project',
  },
  'Shoot': {
    badge: 'Pipeline Stage',
    meta: 'Stage 3 of 6',
    description: 'Daily production now reads like a live operating state, not just a diagram, with more motion, focus, and active quick views.',
    stats: [
      { label: 'Stage', value: '03' },
      { label: 'Mode', value: 'Live set' },
      { label: 'Next', value: 'Naming' },
    ],
    bullets: [
      'Track active days, ingest, and team coordination in one motion system.',
      'Open linked tasks or drives from the project hub instantly.',
      'Hand off footage without losing context.',
    ],
    screen: 'project',
  },
  'Naming': {
    badge: 'Pipeline Stage',
    meta: 'Stage 4 of 6',
    description: 'File naming now feels like part of a living product flow, with clearer transitions from ingest to archive actions.',
    stats: [
      { label: 'Stage', value: '04' },
      { label: 'Mode', value: 'Convention sync' },
      { label: 'Next', value: 'Post' },
    ],
    bullets: [
      'Keep naming standards attached to actual footage states.',
      'Open archive context without breaking the main flow.',
      'Make QR and rename operations feel like part of the same system.',
    ],
    screen: 'archive',
  },
  'Post': {
    badge: 'Pipeline Stage',
    meta: 'Stage 5 of 6',
    description: 'Post work stays connected to tasks, notes, and files, with stronger reveal motion and clearer clickable states.',
    stats: [
      { label: 'Stage', value: '05' },
      { label: 'Mode', value: 'Edit + review' },
      { label: 'Next', value: 'Archive' },
    ],
    bullets: [
      'Move between review, revisions, and linked files quickly.',
      'Attachments now open like real working objects.',
      'Post surfaces feel closer to a shipping product.',
    ],
    screen: 'threads',
  },
  'Archive': {
    badge: 'Pipeline Stage',
    meta: 'Stage 6 of 6',
    description: 'Final archive states now feel operational, with responsive filters, richer drive previews, and more tactile hover behavior.',
    stats: [
      { label: 'Stage', value: '06' },
      { label: 'Mode', value: 'Cold storage' },
      { label: 'Status', value: 'Verified' },
    ],
    bullets: [
      'Quick-open drive rows with usage and status context.',
      'Surface storage risk before it becomes a bottleneck.',
      'Complete the pipeline without leaving the archive layer.',
    ],
    screen: 'archive',
  },
};

const PROJECT_PRESETS = {
  'Sunset in Giza': {
    meta: 'Feature project · active shoot week',
    description: 'A live project surface that now opens from multiple places across the prototype, keeping context intact between chat, tasks, and archive.',
    stats: [
      { label: 'Progress', value: '68%' },
      { label: 'Shoot day', value: '4 / 8' },
      { label: 'Drives', value: '3 linked' },
    ],
    bullets: [
      'Open the project from home, threads, pipeline, or mobile previews.',
      'Jump into tasks or archive without losing the production thread.',
      'The richer quick-view makes the concept feel like a real app surface.',
    ],
    screen: 'project',
  },
  'Qahwa Spot': {
    meta: 'Commercial spot · post review',
    description: 'This project now behaves like a live review surface with clearer focus, motion, and open states across screens.',
    stats: [
      { label: 'Progress', value: '92%' },
      { label: 'Phase', value: 'Review' },
      { label: 'Attention', value: '1 blocker' },
    ],
    bullets: [
      'Open from task lists, mobile previews, or project rows.',
      'Carry review context across the board and communication surfaces.',
      'Use the detail sheet as a real quick-preview layer.',
    ],
    screen: 'project',
  },
  'Nile Blue': {
    meta: 'Interview series · active production',
    description: 'A project surface tuned for ongoing production, now reinforced with responsive quick views and connected navigation.',
    stats: [
      { label: 'Progress', value: '44%' },
      { label: 'Mode', value: 'Shooting' },
      { label: 'Crew', value: '7 active' },
    ],
    bullets: [
      'Move between project progress, tasks, and files with less friction.',
      'Use the mobile preview entries like live entry points.',
      'Hover and open states add momentum without clutter.',
    ],
    screen: 'project',
  },
  'Desert Radio': {
    meta: 'Series package · post production',
    description: 'Post-production context now feels active and connected instead of static, with quicker access to the right surface.',
    stats: [
      { label: 'Progress', value: '78%' },
      { label: 'Mode', value: 'Post' },
      { label: 'Outputs', value: 'Cut + review' },
    ],
    bullets: [
      'Open straight from the device preview list.',
      'Keep the visual language consistent across desktop and mobile.',
      'Use the side panel as a lightweight real-world quick preview.',
    ],
    screen: 'project',
  },
  'The Quiet Reel': {
    meta: 'Archive-ready master delivery',
    description: 'A project close to archive now benefits from stronger handoff cues and quick-open storage context.',
    stats: [
      { label: 'Progress', value: 'Finaling' },
      { label: 'Status', value: 'Archive next' },
      { label: 'Risk', value: 'Low' },
    ],
    bullets: [
      'Open related archive actions right from the task layer.',
      'Use storage quick views to confirm handoff state.',
      'Keep final delivery context close to the pipeline.',
    ],
    screen: 'archive',
  },
};

const THREAD_CONTEXT = {
  'sunset-giza': {
    title: 'sunset-giza',
    direct: false,
    metaSegments: ['Sunset in Giza', 'Feature', '7 members', '5 online'],
    projectTitle: 'Sunset in Giza',
    projectMeta: 'Feature · Lumiere Studios · Dir. Yasmin Fawzi',
    poster: 'pp-g1',
    stats: ['68%', '4 / 8', '24 open', '3 linked'],
    pinnedTitle: 'Call Sheets · Week 1',
    pinnedSub: '7 documents',
    recent: ['Call_Sheet_Day_4.pdf', 'A012_C034_proxy.mp4', 'Catering_Week2.xlsx'],
  },
  'qahwa-spot': {
    title: 'qahwa-spot',
    direct: false,
    metaSegments: ['Qahwa Spot', 'Commercial', '4 members', '2 online'],
    projectTitle: 'Qahwa Spot',
    projectMeta: 'Commercial · Post review · Dir. Karim Fawzy',
    poster: 'pp-g2',
    stats: ['92%', 'Review', '7 open', '2 linked'],
    pinnedTitle: 'Review Notes · Final Pass',
    pinnedSub: '3 items',
    recent: ['Cut_v12.mov', 'Client_notes_round3.pdf', 'Music_sync_list.csv'],
  },
  'nile-blue': {
    title: 'nile-blue',
    direct: false,
    metaSegments: ['Nile Blue', 'Interview series', '6 members', '4 online'],
    projectTitle: 'Nile Blue',
    projectMeta: 'Interview series · Active shoot · Prod. Sara Ahmed',
    poster: 'pp-g3',
    stats: ['44%', '2 / 5', '18 open', '4 linked'],
    pinnedTitle: 'Interview Schedule',
    pinnedSub: '5 sheets',
    recent: ['Drive_log_day2.csv', 'Interview_B_cam.mp4', 'Talent_release.pdf'],
  },
  'al-bahr': {
    title: 'al-bahr',
    direct: false,
    metaSegments: ['Al Bahr', 'Planning', '5 members', '3 online'],
    projectTitle: 'Al Bahr',
    projectMeta: 'Planning phase · Budgeting and prep',
    poster: 'pp-g4',
    stats: ['18%', 'Prep', '12 open', '1 linked'],
    pinnedTitle: 'Budget v3',
    pinnedSub: '1 spreadsheet',
    recent: ['Moodboard.pdf', 'Budget_v3.xlsx', 'Vendor_shortlist.docx'],
  },
  'desert-radio': {
    title: 'desert-radio',
    direct: false,
    metaSegments: ['Desert Radio', 'Series package', '6 members', '3 online'],
    projectTitle: 'Desert Radio',
    projectMeta: 'Post production · Package design',
    poster: 'pp-g6',
    stats: ['78%', 'Post', '9 open', '2 linked'],
    pinnedTitle: 'Episode map',
    pinnedSub: '12 pages',
    recent: ['Radio_mix_notes.txt', 'Episode_03_cut.mov', 'Sound_pass_v2.wav'],
  },
};

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function cleanText(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

function textWithin(el, selector) {
  const target = el.querySelector(selector);
  return cleanText(target ? target.textContent : '');
}

function inferScreenTarget(label) {
  const value = cleanText(label).toLowerCase();
  if (!value) return null;
  if (value.includes('vision')) return 'vision';
  if (value.includes('home')) return 'home';
  if (value.includes('project')) return 'project';
  if (value.includes('thread') || value.includes('chat') || value.includes('#')) return 'threads';
  if (value.includes('task')) return 'tasks';
  if (value.includes('pipeline')) return 'pipeline';
  if (value.includes('archive') || value.includes('drive') || value.includes('hdd') || value.includes('ssd')) return 'archive';
  if (value.includes('ipad') || value.includes('iphone') || value.includes('device')) return 'devices';
  return null;
}

function buildDetailConfig(base) {
  const config = {
    badge: base.badge || 'Live Surface',
    title: base.title || 'Studio OS',
    meta: base.meta || 'Interactive preview',
    description: base.description || 'This prototype element now behaves like a live product surface with stronger motion and quick-open context.',
    stats: Array.isArray(base.stats) ? base.stats : [],
    bullets: Array.isArray(base.bullets) ? base.bullets : [],
    miniCards: Array.isArray(base.miniCards) ? base.miniCards : [],
    screen: base.screen || null,
  };

  if (!config.stats.length) {
    config.stats = [
      { label: 'State', value: 'Interactive' },
      { label: 'Motion', value: 'Enhanced' },
      { label: 'Context', value: 'Quick open' },
    ];
  }

  if (!config.bullets.length) {
    config.bullets = [
      'This surface now opens instead of staying static.',
      'Transitions and feedback make the prototype feel closer to a real product.',
      'Use the linked screen action to keep moving through the flow.',
    ];
  }

  return config;
}

function buildProjectDetail(title, meta = '', screen = 'project', extra = {}) {
  const preset = PROJECT_PRESETS[title] || {};
  return buildDetailConfig({
    badge: extra.badge || preset.badge || 'Project',
    title,
    meta: extra.meta || preset.meta || meta || `${SCREEN_LABELS[screen]} surface`,
    description: extra.description || preset.description,
    stats: extra.stats || preset.stats,
    bullets: extra.bullets || preset.bullets,
    miniCards: extra.miniCards || [
      { label: 'Open next', value: SCREEN_LABELS[screen] || 'Project Hub' },
      { label: 'Prototype feel', value: 'Motion + quick view' },
    ],
    screen: extra.screen || preset.screen || screen,
  });
}

function buildModuleDetail(title, fallbackMeta = '', screen = 'home') {
  const preset = MODULE_PRESETS[title];
  if (preset) return buildDetailConfig({ title, ...preset });
  return buildDetailConfig({
    badge: 'Module',
    title,
    meta: fallbackMeta || `${SCREEN_LABELS[screen]} system surface`,
    description: 'This module now opens as a live quick-view with more responsive motion and clearer hierarchy.',
    screen,
  });
}

function buildTaskDetail(title, meta = '', screen = 'tasks') {
  return buildDetailConfig({
    badge: 'Task',
    title,
    meta: meta || 'Action item',
    description: 'Tasks now support live toggles, stronger hover states, and quick-open context so the board feels operational.',
    stats: [
      { label: 'Status', value: title.toLowerCase().includes('archive') ? 'Needs action' : 'In progress' },
      { label: 'Surface', value: SCREEN_LABELS[screen] || 'Tasks' },
      { label: 'Type', value: 'Quick update' },
    ],
    bullets: [
      'Checkboxes can now toggle state directly inside the prototype.',
      'Rows and cards open a quick-view instead of acting like dead content.',
      `Jump into ${SCREEN_LABELS[screen] || 'Tasks'} to continue the flow.`,
    ],
    miniCards: [
      { label: 'Primary action', value: 'Open quick-view' },
      { label: 'Linked screen', value: SCREEN_LABELS[screen] || 'Tasks' },
    ],
    screen,
  });
}

function buildDriveDetail(title, meta = '', usage = '', screen = 'archive') {
  return buildDetailConfig({
    badge: 'Drive',
    title,
    meta: [meta, usage].filter(Boolean).join(' · ') || 'Archive surface',
    description: 'Storage rows now open like live operational objects, with clearer focus on status, capacity, and the next handoff.',
    stats: [
      { label: 'Surface', value: SCREEN_LABELS[screen] || 'Archive' },
      { label: 'Usage', value: usage || 'Live' },
      { label: 'Mode', value: 'Tracked' },
    ],
    bullets: [
      'Open a storage quick-view from messages, project hub, or archive rows.',
      'Filters and view chips now behave like real controls.',
      'Archive interaction now feels like part of the wider studio system.',
    ],
    miniCards: [
      { label: 'Next jump', value: 'Archive' },
      { label: 'Interaction', value: 'Quick preview' },
    ],
    screen,
  });
}

function buildScheduleDetail(title, meta = '', time = '') {
  return buildDetailConfig({
    badge: 'Shoot Day',
    title,
    meta: [meta, time].filter(Boolean).join(' · '),
    description: 'Schedule entries now feel like active planning objects, with enough context to open and decide quickly.',
    stats: [
      { label: 'Mode', value: 'Production' },
      { label: 'Focus', value: 'Location' },
      { label: 'Jump', value: 'Project Hub' },
    ],
    bullets: [
      'Use the quick-view to keep cast, time, and location close together.',
      'Move from schedule to project or task context with one step.',
      'Adds a more operational feel to planning-heavy sections.',
    ],
    miniCards: [
      { label: 'Status', value: 'Scheduled' },
      { label: 'Linked area', value: 'Project Hub' },
    ],
    screen: 'project',
  });
}

function buildNodeDetail(label) {
  const value = cleanText(label);
  if (value.includes('tasks')) return buildModuleDetail('Tasks & To-Dos', value, 'tasks');
  if (value.includes('drive')) return buildDriveDetail(value, 'Project-linked storage', '840 GB visible', 'archive');
  if (value.includes('deliverables')) return buildProjectDetail('Sunset in Giza', value, 'pipeline');
  if (value.includes('shoot days')) return buildScheduleDetail('Shoot calendar', value, 'Week view');
  if (value.includes('budget')) return buildModuleDetail('Brief & Budget', value, 'pipeline');
  return buildProjectDetail('Sunset in Giza', value, 'project');
}

function renderDetailBody(config) {
  return `
    <div class="detail-hero">
      <div class="detail-tag"><span class="chip-dot"></span>${escapeHTML(config.badge)}</div>
      <h3 class="detail-title">${escapeHTML(config.title)}</h3>
      <div class="detail-meta">${escapeHTML(config.meta)}</div>
      <p class="detail-description">${escapeHTML(config.description)}</p>
      <div class="detail-actions">
        ${config.screen ? `<button class="btn btn-primary" data-detail-screen="${config.screen}">${I.arrow} Open ${escapeHTML(SCREEN_LABELS[config.screen] || 'screen')}</button>` : ''}
        <button class="btn btn-secondary" data-detail-toast="Pinned to quick access">Pin quick access</button>
      </div>
    </div>
    <div class="detail-stats">
      ${config.stats.map(stat => `
        <div class="detail-stat">
          <div class="detail-stat-label">${escapeHTML(stat.label)}</div>
          <div class="detail-stat-value">${escapeHTML(stat.value)}</div>
        </div>
      `).join('')}
    </div>
    <div class="detail-section">
      <h4>What changed</h4>
      <div class="detail-list">
        ${config.bullets.map(item => `<div class="detail-list-item">${escapeHTML(item)}</div>`).join('')}
      </div>
    </div>
    <div class="detail-section">
      <h4>Quick context</h4>
      <div class="detail-mini-grid">
        ${config.miniCards.map(card => `
          <div class="detail-mini-card">
            <div class="detail-mini-label">${escapeHTML(card.label)}</div>
            <div class="detail-mini-value">${escapeHTML(card.value)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function ensureInteractionShell() {
  if (document.getElementById('detail-sheet')) return;

  const shell = document.createElement('div');
  shell.innerHTML = `
    <div class="cursor-glow" id="cursor-glow"></div>
    <div class="detail-overlay" id="detail-overlay"></div>
    <aside class="detail-sheet" id="detail-sheet" aria-hidden="true">
      <div class="detail-sheet-panel">
        <div class="detail-sheet-top">
          <div class="detail-live-badge">Live preview</div>
          <button class="detail-close" id="detail-close" aria-label="Close quick view">&times;</button>
        </div>
        <div class="detail-sheet-body" id="detail-sheet-body"></div>
      </div>
    </aside>
    <div class="toast-stack" id="toast-stack"></div>
  `;
  document.body.appendChild(shell);

  document.getElementById('detail-overlay').addEventListener('click', closeDetail);
  document.getElementById('detail-close').addEventListener('click', closeDetail);
}

function openDetail(config) {
  ensureInteractionShell();
  const detailConfig = buildDetailConfig(config);
  const overlay = document.getElementById('detail-overlay');
  const sheet = document.getElementById('detail-sheet');
  const body = document.getElementById('detail-sheet-body');

  body.innerHTML = renderDetailBody(detailConfig);
  overlay.classList.add('open');
  sheet.classList.add('open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.classList.add('detail-open');

  body.querySelectorAll('[data-detail-screen]').forEach(button => {
    button.addEventListener('click', () => {
      closeDetail();
      showScreen(button.dataset.detailScreen);
    });
  });

  body.querySelectorAll('[data-detail-toast]').forEach(button => {
    button.addEventListener('click', () => showToast('Quick access', button.dataset.detailToast));
  });
}

function closeDetail() {
  const overlay = document.getElementById('detail-overlay');
  const sheet = document.getElementById('detail-sheet');
  if (!overlay || !sheet) return;
  overlay.classList.remove('open');
  sheet.classList.remove('open');
  sheet.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('detail-open');
}

function showToast(title, copy) {
  ensureInteractionShell();
  const stack = document.getElementById('toast-stack');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-title">${escapeHTML(title)}</div>
    <div class="toast-copy">${escapeHTML(copy)}</div>
  `;
  stack.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  window.setTimeout(() => {
    toast.classList.remove('show');
    window.setTimeout(() => toast.remove(), 220);
  }, 2200);
}

function markRevealables() {
  const selector = [
    '.vision-hero',
    '.pillars > *',
    '.flow-card',
    '.connect-card',
    '.hero-row > *',
    '.kpis > *',
    '.home-grid > *',
    '.hub-hero',
    '.hub-tabs',
    '.hub-grid > *',
    '.threads-layout',
    '.kanban-head',
    '.kanban-col',
    '.pipe-lane',
    '.arch-head',
    '.arch-toolbar',
    '.arch-chips',
    '.arch-table',
    '.devices-grid > *',
  ].join(',');

  SCREEN_ORDER.forEach(screenName => {
    const screen = document.getElementById(`screen-${screenName}`);
    if (!screen) return;
    screen.querySelectorAll(selector).forEach((node, index) => {
      node.setAttribute('data-reveal', '');
      node.style.setProperty('--reveal-index', index);
    });
  });
}

function playScreenIntro(screen) {
  if (!screen) return;
  const items = screen.querySelectorAll('[data-reveal]');
  items.forEach((item, index) => {
    item.classList.remove('is-visible');
    item.style.setProperty('--reveal-index', index);
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      items.forEach(item => item.classList.add('is-visible'));
    });
  });
}

function setActiveWithinGroup(item, selector) {
  const parent = item.closest(selector);
  if (!parent) return;
  parent.querySelectorAll('.active').forEach(node => node.classList.remove('active'));
  item.classList.add('active');
}

function syncLiveTimestamps() {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(now);
  const monthDay = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(now);
  const time = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(now);

  const homeGreeting = document.querySelector('#screen-home .hero-greet');
  if (homeGreeting) {
    homeGreeting.innerHTML = `<span class="pulse"></span>${weekday} · ${monthDay} · ${time}`;
  }

  const ipadSub = document.querySelector('#screen-devices .ipad-sub');
  if (ipadSub) ipadSub.textContent = `${weekday} · ${monthDay}`;

  const iphoneTime = document.querySelector('#screen-devices .iphone-status span');
  if (iphoneTime) iphoneTime.textContent = time;

  const iphoneGreeting = document.querySelector('#screen-devices .iphone-greet');
  if (iphoneGreeting) iphoneGreeting.textContent = `${monthDay} · ${weekday}`;

  const pipelineSub = document.querySelector('#screen-pipeline .pipe-page-sub');
  if (pipelineSub) pipelineSub.textContent = `${weekday}, ${monthDay} · 12 active projects across 6 stages`;
}

function toggleCheckElement(check, checkedClass, onMarkup = '') {
  const active = check.classList.toggle(checkedClass);
  check.innerHTML = active ? onMarkup : '';
  return active;
}

function bindTaskToggles() {
  document.querySelectorAll('.today-check').forEach(check => {
    check.addEventListener('click', event => {
      event.stopPropagation();
      const active = toggleCheckElement(check, 'on', icon('<polyline points="20 6 9 17 4 12"/>', 10));
      const text = check.closest('.today-task')?.querySelector('.today-text');
      if (text) text.classList.toggle('done', active);
      showToast('Task updated', active ? 'Marked complete in Today view' : 'Moved back to in progress');
    });
  });

  document.querySelectorAll('.task-check').forEach(check => {
    check.addEventListener('click', event => {
      event.stopPropagation();
      const active = toggleCheckElement(check, 'on', I.check);
      const row = check.closest('.task-item');
      if (row) row.classList.toggle('done', active);
      showToast('Project task', active ? 'Task marked complete' : 'Task reopened');
    });
  });
}

function updateThreadView(channelName) {
  const data = THREAD_CONTEXT[channelName] || {
    title: channelName,
    direct: !channelName.includes('-') && !channelName.includes('#'),
    metaSegments: channelName.includes('-') ? [channelName, 'Project thread', '5 members', '2 online'] : ['Direct thread', '1:1 context', '2 members', '1 online'],
    projectTitle: channelName.includes('-') ? channelName.replace(/-/g, ' ') : channelName,
    projectMeta: channelName.includes('-') ? 'General project context' : 'Direct message thread',
    poster: 'pp-g5',
    stats: ['Live', 'Context', '4 open', '1 linked'],
    pinnedTitle: 'Shared links',
    pinnedSub: '2 items',
    recent: ['Latest_note.txt', 'Reference_frame.jpg', 'Status_update.md'],
  };

  const headTitle = document.querySelector('.chat-head-title');
  if (headTitle) {
    headTitle.innerHTML = `${data.direct ? I.users : I.hash} ${escapeHTML(data.title)}`;
  }

  const headSub = document.querySelector('.chat-head-sub');
  if (headSub) {
    headSub.innerHTML = data.metaSegments.map((part, index) => {
      if (index === data.metaSegments.length - 1) {
        return `<span style="color: var(--ok);">● ${escapeHTML(part)}</span>`;
      }
      return `<span>${escapeHTML(part)}</span>`;
    }).join('<span>·</span>');
  }

  const deviceTitle = document.querySelector('#screen-threads .device-title');
  if (deviceTitle) deviceTitle.textContent = `${data.direct ? data.title : `#${data.title}`} — Studio OS`;

  const composer = document.querySelector('.composer-text');
  if (composer) composer.placeholder = `Message ${data.direct ? data.title : `#${data.title}`} — use @ to mention, # to reference drives or projects...`;

  const contextCard = document.querySelector('.thread-context .ctx-card');
  if (contextCard) {
    const poster = contextCard.querySelector('.ctx-poster');
    const heading = contextCard.querySelector('h4');
    const copy = contextCard.querySelector('p');
    const statValues = contextCard.querySelectorAll('.ctx-stat-v');

    if (poster) poster.className = `ctx-poster ${data.poster}`;
    if (heading) heading.textContent = data.projectTitle;
    if (copy) copy.textContent = data.projectMeta;
    data.stats.forEach((value, index) => {
      if (statValues[index]) statValues[index].textContent = value;
    });
  }

  const pinnedSection = document.querySelectorAll('.thread-context .ctx-section')[1];
  if (pinnedSection) {
    const pinnedCopy = pinnedSection.querySelector('.ctx-card div div');
    const pinnedMeta = pinnedSection.querySelector('.ctx-card div div + div');
    if (pinnedCopy) pinnedCopy.textContent = data.pinnedTitle;
    if (pinnedMeta) pinnedMeta.textContent = data.pinnedSub;
  }

  const sharedSection = document.querySelectorAll('.thread-context .ctx-section')[3];
  if (sharedSection) {
    sharedSection.innerHTML = `
      <div class="ctx-label">Shared recently</div>
      ${data.recent.map(file => `
        <div style="padding: 8px 10px; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; font-size: 11px; margin-bottom: 6px;">${escapeHTML(file)}</div>
      `).join('')}
    `;
  }
}

function bindChannelSwitching() {
  const channelItems = document.querySelectorAll('.channel-item');
  channelItems.forEach(item => {
    item.addEventListener('click', () => {
      const list = item.closest('.threads-list');
      if (list) {
        list.querySelectorAll('.channel-item').forEach(node => node.classList.remove('active'));
      }
      item.classList.add('active');

      const flexText = item.querySelector('span[style*="flex:1"]');
      const channelName = cleanText(flexText ? flexText.textContent : item.textContent).toLowerCase();
      updateThreadView(channelName);
    });
  });
}

function bindMiniPreviewNav() {
  document.querySelectorAll('#screen-devices .iphone-tab').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.querySelectorAll('.iphone-tab').forEach(tab => tab.classList.remove('active'));
      item.classList.add('active');
      showToast('Device preview', `Switched iPhone preview to ${cleanText(item.textContent)}`);
    });
  });

  document.querySelectorAll('#screen-devices .ipad-rail-item').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.querySelectorAll('.ipad-rail-item').forEach(tab => tab.classList.remove('active'));
      item.classList.add('active');
      showToast('Device preview', 'Updated iPad navigation state');
    });
  });

  document.querySelectorAll('#screen-devices .mac-preview .rail-item').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.querySelectorAll('.rail-item').forEach(tab => tab.classList.remove('active'));
      item.classList.add('active');
      showToast('Device preview', 'Updated Mac preview navigation');
    });
  });
}

function bindPrototypeControls() {
  document.querySelectorAll('.hub-tab').forEach(item => {
    item.addEventListener('click', () => {
      setActiveWithinGroup(item, '.hub-tabs');
      showToast('Project Hub', `Switched to ${cleanText(item.textContent)}`);
    });
  });

  document.querySelectorAll('.kanban-view').forEach(item => {
    item.addEventListener('click', () => {
      const group = item.closest('.kanban-views');
      if (group) {
        group.querySelectorAll('.kanban-view').forEach(node => node.classList.remove('active'));
      }
      item.classList.add('active');
      showToast('Board view', `Changed to ${cleanText(item.textContent)}`);
    });
  });

  document.querySelectorAll('.arch-chip').forEach(item => {
    item.addEventListener('click', () => {
      const group = item.closest('.arch-chips');
      if (group) {
        group.querySelectorAll('.arch-chip').forEach(node => node.classList.remove('active'));
      }
      item.classList.add('active');
      showToast('Archive filter', `Showing ${cleanText(item.textContent)}`);
    });
  });

  document.querySelectorAll('.composer-send').forEach(button => {
    button.addEventListener('click', () => {
      showToast('Message queued', 'Prototype send action simulated');
    });
  });
}

function bindInAppNavigation() {
  const railTargets = ['home', 'project', 'threads', 'tasks', 'pipeline', 'archive', 'project', 'archive'];
  document.querySelectorAll('#stage .screen:not(#screen-devices) .rail-items').forEach(group => {
    group.querySelectorAll('.rail-item').forEach((item, index) => {
      const target = railTargets[index];
      if (!target) return;
      item.addEventListener('click', () => showScreen(target));
    });
  });

  document.querySelectorAll('#stage .screen:not(#screen-devices) .side-item').forEach(item => {
    const target = inferScreenTarget(item.textContent);
    if (!target) return;
    item.addEventListener('click', event => {
      event.preventDefault();
      showScreen(target);
    });
  });

  const visionButtons = document.querySelectorAll('#screen-vision .vision-actions .btn');
  if (visionButtons[0]) visionButtons[0].addEventListener('click', () => showScreen('home'));
  if (visionButtons[1]) visionButtons[1].addEventListener('click', () => showScreen('pipeline'));
}

function bindOpenables() {
  const openableBindings = [
    {
      selector: '.pillar',
      resolve: el => buildModuleDetail(textWithin(el, '.pillar-h'), textWithin(el, '.pillar-p'), inferScreenTarget(textWithin(el, '.pillar-h')) || 'home'),
    },
    {
      selector: '.flow-step',
      resolve: el => buildModuleDetail(textWithin(el, 'h4'), textWithin(el, 'p'), 'pipeline'),
    },
    {
      selector: '.node',
      resolve: el => buildNodeDetail(cleanText(el.textContent)),
    },
    {
      selector: '.hero-card',
      resolve: () => buildProjectDetail('Studio Command Center', 'Morning overview and triage surface', 'home', {
        badge: 'Workspace',
        stats: [
          { label: 'Projects', value: '12 live' },
          { label: 'Tasks', value: '48 open' },
          { label: 'Storage', value: '186 TB' },
        ],
        bullets: [
          'The home screen now has stronger reveals and linked navigation.',
          'You can move from the morning overview into deeper surfaces faster.',
          'The quick-view layer gives the dashboard a more alive product feel.',
        ],
      }),
    },
    {
      selector: '.project-row',
      resolve: el => buildProjectDetail(textWithin(el, '.project-row-title'), textWithin(el, '.project-row-sub'), 'project', {
        stats: [
          { label: 'Progress', value: textWithin(el, '.mini-bar-label') || 'Live' },
          { label: 'Crew', value: `${el.querySelectorAll('.mini-av').length || 3} assigned` },
          { label: 'Entry point', value: 'Home' },
        ],
      }),
    },
    {
      selector: '.today-task',
      resolve: el => buildTaskDetail(cleanText(textWithin(el, '.today-text').split(' ').slice(0, 8).join(' ')), textWithin(el, '.today-meta'), 'tasks'),
    },
    {
      selector: '.task-item',
      resolve: el => buildTaskDetail(textWithin(el, '.task-title'), textWithin(el, '.task-date'), 'tasks'),
    },
    {
      selector: '.linked-drive',
      resolve: el => buildDriveDetail(textWithin(el, '.ld-name'), textWithin(el, '.ld-sub'), textWithin(el, '.ld-pct'), 'archive'),
    },
    {
      selector: '.schedule-day',
      resolve: el => buildScheduleDetail(textWithin(el, '.schedule-loc'), textWithin(el, '.schedule-cast'), textWithin(el, '.schedule-time')),
    },
    {
      selector: '.msg-attach',
      resolve: el => {
        const title = textWithin(el, '.msg-attach-title');
        const meta = textWithin(el, '.msg-attach-sub');
        return /ssd|hdd|drive/i.test(title)
          ? buildDriveDetail(title, meta, 'Linked in thread', 'archive')
          : buildTaskDetail(title, meta, 'threads');
      },
    },
    {
      selector: '.kanban-card',
      resolve: el => {
        const meta = cleanText(Array.from(el.querySelectorAll('.kanban-card-meta span')).map(node => node.textContent).join(' · '));
        return buildTaskDetail(textWithin(el, '.kanban-card-title'), meta, 'tasks');
      },
    },
    {
      selector: '.pipe-item',
      resolve: el => buildProjectDetail(textWithin(el, '.pipe-item-title'), textWithin(el, '.pipe-item-meta'), 'pipeline'),
    },
    {
      selector: '.arch-table-row',
      resolve: el => buildDriveDetail(
        textWithin(el, '.at-name'),
        `${cleanText(el.children[2]?.textContent || '')} · ${cleanText(el.children[3]?.textContent || '')}`,
        textWithin(el, '.at-pct'),
        'archive'
      ),
    },
    {
      selector: '.ipad-list-item',
      resolve: el => buildProjectDetail(textWithin(el, '.ipad-list-title'), textWithin(el, '.ipad-list-meta'), 'devices'),
    },
    {
      selector: '.iphone-row',
      resolve: el => buildProjectDetail(textWithin(el, '.iphone-row-title'), textWithin(el, '.iphone-row-sub'), 'devices'),
    },
  ];

  openableBindings.forEach(binding => {
    document.querySelectorAll(binding.selector).forEach(element => {
      element.classList.add('is-openable');
      element.setAttribute('tabindex', '0');
      const open = event => {
        if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
        if (event.target.closest('button, textarea, input')) return;
        event.preventDefault();
        openDetail(binding.resolve(element));
      };
      element.addEventListener('click', open);
      element.addEventListener('keydown', open);
    });
  });
}

function bindKeyboardShortcuts() {
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeDetail();
      return;
    }

    if (event.target.closest('textarea, input')) return;

    const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
    if (event.key === 'ArrowRight' && currentIndex !== -1) {
      showScreen(SCREEN_ORDER[(currentIndex + 1) % SCREEN_ORDER.length]);
    }
    if (event.key === 'ArrowLeft' && currentIndex !== -1) {
      showScreen(SCREEN_ORDER[(currentIndex - 1 + SCREEN_ORDER.length) % SCREEN_ORDER.length]);
    }
  });
}

function bindPointerGlow() {
  ensureInteractionShell();
  const glow = document.getElementById('cursor-glow');
  if (!glow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let frame = null;
  window.addEventListener('pointermove', event => {
    document.body.classList.add('pointer-live');
    const { clientX, clientY } = event;
    if (frame) window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      glow.style.transform = `translate3d(${clientX - 160}px, ${clientY - 160}px, 0)`;
    });
  });

  window.addEventListener('pointerleave', () => {
    document.body.classList.remove('pointer-live');
  });
}

let currentScreen = 'vision';

const stage = document.getElementById('stage');
stage.innerHTML =
  screenVision() +
  screenHome() +
  screenProject() +
  screenThreads() +
  screenTasks() +
  screenPipeline() +
  screenArchive() +
  screenDevices();

const tabs = Array.from(document.querySelectorAll('.proto-tab'));
const screens = Array.from(document.querySelectorAll('.screen'));

function showScreen(name, options = {}) {
  const targetName = SCREEN_ORDER.includes(name) ? name : 'vision';
  const target = document.getElementById(`screen-${targetName}`);
  if (!target) return;

  currentScreen = targetName;
  closeDetail();

  tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.screen === targetName));
  screens.forEach(screen => screen.classList.toggle('active', screen === target));

  if (options.updateHash !== false) {
    history.replaceState(null, '', `#${targetName}`);
  }

  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  playScreenIntro(target);
  syncLiveTimestamps();
}

ensureInteractionShell();
markRevealables();
bindPointerGlow();
bindTaskToggles();
bindChannelSwitching();
bindPrototypeControls();
bindInAppNavigation();
bindMiniPreviewNav();
bindOpenables();
bindKeyboardShortcuts();
syncLiveTimestamps();
updateThreadView('sunset-giza');
window.setInterval(syncLiveTimestamps, 60000);

tabs.forEach(tab => {
  tab.addEventListener('click', () => showScreen(tab.dataset.screen));
});

const initialScreen = cleanText(window.location.hash).replace('#', '');
showScreen(initialScreen || 'vision', { updateHash: false, scroll: false });
