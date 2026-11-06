const priorities = {
  "student-success": {
    label: "Student Success",
    title: "Talent becomes opportunity.",
    summary: "Across three academic years, internships, scholarships, national conferences and professional experiences helped students turn preparation into momentum.",
    metric: "29",
    metricLabel: "public-policy internships from Summer 2023 through Spring 2025",
    image: "students-campus.webp",
    alt: "Jackson State students gathered on campus",
    caption: "Student learning and opportunity · Jackson State University",
    highlights: [
      "Whitley Smith was one of 32 students selected nationally for the 2024 NFL Experienceship.",
      "Thirty theatre and speech students represented JSU at a national conference, earning awards and national officer positions.",
      "Ten creative-writing students received James Patterson Foundation scholarships totaling $75,000."
    ]
  },
  "academic-prominence": {
    label: "Academic Prominence",
    title: "Scholarship reached national stages.",
    summary: "Convenings, performances, publications and public programs strengthened Jackson State’s standing as a destination for Black intellectual and creative life.",
    metric: "250+",
    metricLabel: "participants at the 84th College Language Association Convention",
    image: "doctoral-hooding.webp",
    alt: "Jackson State faculty participating in a doctoral hooding ceremony",
    caption: "Faculty leadership and distinction · Jackson State University",
    highlights: [
      "The Sonic Boom performed at Super Bowl LVIII, the Rose Parade and the National Folk Festival.",
      "Three vocal students advanced to the National NATS Student Auditions.",
      "The College hosted national scholars, writers, performers and educators through major conventions and festivals."
    ]
  },
  "research-excellence": {
    label: "Research Excellence",
    title: "Research spans disciplines and audiences.",
    summary: "Funded inquiry connected health equity, racial trauma, public safety and community engagement with urgent questions in Mississippi and beyond.",
    metric: "$1.5M",
    metricLabel: "health-equity research and community engagement project",
    image: "byron-orey.png",
    alt: "A Jackson State faculty scholar presenting research",
    caption: "Faculty research and scholarship · Jackson State University",
    highlights: [
      "A $509,000 National Science Foundation award supports research on racial trauma and political behavior.",
      "Prevention, education and public-safety outreach reached more than 41,000 students.",
      "Faculty scholarship addressed environmental justice, artificial intelligence, digital health, Black history and public administration."
    ]
  },
  "campus-culture": {
    label: "Improvement of Campus Culture and Enhancement of JSU Brand",
    title: "JSU’s story reached wider audiences.",
    summary: "Archives, performances, historic spaces and national partnerships extended Jackson State’s cultural presence from campus to museums and public audiences.",
    metric: "100+",
    metricLabel: "years of JSU history presented through the Getty Images collaboration",
    image: "sonic-boom-report.png",
    alt: "The Sonic Boom of the South performing for a national audience",
    caption: "Creative visibility and the JSU brand · Jackson State University",
    highlights: [
      "Margaret Walker Center materials reached national audiences through the Smithsonian.",
      "The College invested in archives, historic spaces and digital access to cultural resources.",
      "National performances and cultural programs expanded the visibility of Jackson State’s creative work."
    ]
  },
  "staff-excellence": {
    label: "Staff Excellence",
    title: "Staff-led systems sustain public impact.",
    summary: "Staff-led centers converted grants, partnerships, archives and outreach programs into sustained public service.",
    metric: "41,000+",
    metricLabel: "students reached through prevention and driver-education outreach",
    image: "community-public-service.png",
    alt: "Interdisciplinary Alcohol and Drug Studies Center staff receiving a national public service award",
    caption: "Center staff · Public Service Award for alcohol prevention and safe driving",
    highlights: [
      "The Interdisciplinary Alcohol and Drug Studies Center secured more than $493,000 in 2025.",
      "The Margaret Walker Center received $450,000 from Mellon and $317,039 from IMLS for capacity, preservation and access.",
      "Staff across College centers expanded cultural stewardship, professional pathways and community-facing infrastructure."
    ]
  }
};

const impactViews = {
  snapshot: {
    stats: [
      ["3", "schools united by one public mission"],
      ["11", "academic departments represented in the report"],
      ["8", "centers and affiliated special units"],
      ["3", "academic years from Fall 2023 through Spring 2026"]
    ],
    note: "This overview reflects the College’s three schools, academic departments, centers and affiliated units."
  },
  students: {
    stats: [
      ["1 of 32", "national NFL Experienceship selections was JSU student Whitley Smith"],
      ["29", "public policy internship placements from Summer 2023 through Spring 2025"],
      ["30", "theatre and speech students who represented JSU at a national conference"],
      ["10", "creative writing students awarded James Patterson Foundation scholarships"]
    ],
    note: "Each figure highlights a distinct way JSU students expanded their academic and professional experience."
  },
  creativity: {
    stats: [
      ["250+", "participants at the 84th College Language Association Convention"],
      ["3", "JSU vocal students who qualified for the National NATS Student Auditions"],
      ["7", "HBCUs participating in the Denyce Graves Foundation Shared Voices program"],
      ["100+", "years of JSU history presented through the Getty Images collaboration"]
    ],
    note: "Together, these measures show the reach of JSU’s literary, musical, visual and cultural programs."
  },
  research: {
    stats: [
      ["41,000+", "students reached through prevention, education and public-safety outreach"],
      ["$1.5M", "health-equity research and community engagement project"],
      ["$509K", "National Science Foundation support for racial-trauma research"],
      ["$493K+", "secured in 2025 for prevention and driver-education initiatives"]
    ],
    note: "These initiatives bring research, education and public service together to strengthen communities."
  },
  funding: {
    stats: [
      ["$450K", "Mellon Foundation support for the Margaret Walker Center"],
      ["$317K", "Institute of Museum and Library Services award for archives and access"],
      ["$300K", "AccessLex support for the Bob Owens Pre-Law Center Pipeline Program"],
      ["$170K", "triple Home Depot Retool Your School grant package"]
    ],
    note: "Each award supports a distinct initiative and time period, so the investments are presented separately."
  },
  recognition: {
    stats: [
      ["4 years", "of consecutive Humanities Teacher of the Year honorees"],
      ["5+", "awards earned at the 86th National Association of Dramatic and Speech Arts Conference"],
      ["2", "national officer positions earned by JSU theatre and speech students"],
      ["1st", "HBCU student to win Mississippi’s senior MTNA strings division"]
    ],
    note: "These honors recognize the achievements of JSU students and faculty across the three-year reporting period."
  }
};

const impactButtons = [...document.querySelectorAll("[data-impact-view]")];
const impactStats = document.querySelector("#impact-stats");

function updateImpactView(key, focus = false) {
  const view = impactViews[key];
  const button = impactButtons.find((entry) => entry.dataset.impactView === key);
  if (!view || !button) return;
  impactStats.classList.add("is-changing");
  window.setTimeout(() => {
    impactStats.innerHTML = view.stats.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("");
    document.querySelector("#dashboard-note").textContent = view.note;
    impactStats.setAttribute("aria-labelledby", button.id);
    impactStats.classList.remove("is-changing");
  }, 140);
  impactButtons.forEach((entry) => {
    const selected = entry === button;
    entry.setAttribute("aria-selected", String(selected));
    entry.tabIndex = selected ? 0 : -1;
  });
  if (focus) impactStats.focus({ preventScroll: true });
}

impactButtons.forEach((button, index) => {
  button.addEventListener("click", () => updateImpactView(button.dataset.impactView));
  button.addEventListener("keydown", (event) => {
    let next = index;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (index + 1) % impactButtons.length;
    else if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (index - 1 + impactButtons.length) % impactButtons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = impactButtons.length - 1;
    else return;
    event.preventDefault();
    updateImpactView(impactButtons[next].dataset.impactView);
    impactButtons[next].focus();
  });
});

const priorityButtons = [...document.querySelectorAll("[data-priority]")];
const priorityPanel = document.querySelector("#priority-panel");
const priorityList = document.querySelector(".priority-list");
const priorityShell = document.querySelector(".priority-shell");
let activePriority = "student-success";

function updatePriority(key, options = {}) {
  const item = priorities[key];
  const button = priorityButtons.find((entry) => entry.dataset.priority === key);
  if (!item || !button) return;

  activePriority = key;
  priorityPanel.classList.add("is-changing");
  window.setTimeout(() => {
    document.querySelector("#priority-label").textContent = item.label;
    document.querySelector("#priority-title").textContent = item.title;
    document.querySelector("#priority-summary").textContent = item.summary;
    document.querySelector("#priority-metric").textContent = item.metric;
    document.querySelector("#priority-metric-label").textContent = item.metricLabel;
    const image = document.querySelector("#priority-image");
    image.src = item.image;
    image.alt = item.alt;
    document.querySelector("#priority-caption").textContent = item.caption;
    document.querySelector("#priority-highlights").innerHTML = item.highlights.map((highlight) => `<li>${highlight}</li>`).join("");
    priorityPanel.setAttribute("aria-labelledby", button.id);
    priorityPanel.classList.remove("is-changing");
  }, 160);

  priorityButtons.forEach((entry) => {
    const selected = entry === button;
    entry.setAttribute("aria-selected", String(selected));
    entry.tabIndex = selected ? 0 : -1;
  });

  if (window.matchMedia("(max-width: 720px)").matches) button.insertAdjacentElement("afterend", priorityPanel);
  else priorityShell.append(priorityPanel);

  if (options.updateHash) history.replaceState(null, "", `${location.pathname}${location.search}#priority-${key}`);
  if (options.focusPanel) priorityPanel.focus({ preventScroll: true });
}

priorityButtons.forEach((button, index) => {
  button.addEventListener("click", () => updatePriority(button.dataset.priority, { updateHash: true }));
  button.addEventListener("keydown", (event) => {
    let next = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key)) next = (index + 1) % priorityButtons.length;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key)) next = (index - 1 + priorityButtons.length) % priorityButtons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = priorityButtons.length - 1;
    else return;
    event.preventDefault();
    updatePriority(priorityButtons[next].dataset.priority);
    priorityButtons[next].focus();
  });
});

document.querySelectorAll("[data-open-priority]").forEach((link) => {
  link.addEventListener("click", () => updatePriority(link.dataset.openPriority, { updateHash: true }));
});

function syncPriorityLayout() {
  const keyFromHash = location.hash.replace("#priority-", "");
  const key = priorities[keyFromHash] ? keyFromHash : activePriority;
  updatePriority(key);
}

window.addEventListener("resize", syncPriorityLayout);
window.addEventListener("hashchange", syncPriorityLayout);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const menuLabel = menuToggle.querySelector("span");

function closeNavigation(returnFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuLabel.textContent = "Menu";
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (returnFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuLabel.textContent = open ? "Close" : "Menu";
  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  closeNavigation();
}));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) closeNavigation(true);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1050 && navigation.classList.contains("is-open")) closeNavigation();
});

const progressBar = document.querySelector(".scroll-progress span");
let progressFrame;
function updateScrollProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = distance > 0 ? Math.min(1, window.scrollY / distance) : 0;
  progressBar.style.width = `${progress * 100}%`;
  progressFrame = null;
}
window.addEventListener("scroll", () => {
  if (!progressFrame) progressFrame = requestAnimationFrame(updateScrollProgress);
}, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("is-visible");
});

const presentationSteps = [...document.querySelectorAll("[data-present-step]")];
const presenterControls = document.querySelector(".presenter-controls");
const presenterCounter = document.querySelector("[data-present-counter]");
const presenterLabel = document.querySelector("[data-present-label]");
const presenterStatus = document.querySelector("#presenter-status");
const presenterPrevious = document.querySelector("[data-present-prev]");
const presenterNext = document.querySelector("[data-present-next]");
const presenterExit = document.querySelector("[data-present-exit]");
const presentationTrigger = document.querySelector("#start-presentation");
let presentationIndex = 0;
let presentationActive = false;

function presentationUrl(enabled, hash = location.hash) {
  const url = new URL(location.href);
  if (enabled) url.searchParams.set("present", "1");
  else url.searchParams.delete("present");
  url.hash = hash;
  return `${url.pathname}${url.search}${url.hash}`;
}

function updatePresentationControls(announce = false) {
  const step = presentationSteps[presentationIndex];
  if (!step) return;
  const title = step.dataset.presentTitle || "Presentation chapter";
  presenterCounter.textContent = `${presentationIndex + 1} / ${presentationSteps.length}`;
  presenterLabel.textContent = title;
  presenterPrevious.disabled = presentationIndex === 0;
  presenterNext.disabled = presentationIndex === presentationSteps.length - 1;
  if (announce) presenterStatus.textContent = `Chapter ${presentationIndex + 1} of ${presentationSteps.length}: ${title}`;
}

function goToPresentationStep(index, announce = true) {
  presentationIndex = Math.max(0, Math.min(index, presentationSteps.length - 1));
  const step = presentationSteps[presentationIndex];
  step.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", presentationUrl(true, `#${step.id}`));
  updatePresentationControls(announce);
}

async function activatePresentation(requestFullscreen = false) {
  presentationActive = true;
  document.body.classList.add("present-mode");
  presenterControls.hidden = false;
  const hashIndex = presentationSteps.findIndex((step) => `#${step.id}` === location.hash);
  presentationIndex = hashIndex >= 0 ? hashIndex : 0;
  history.replaceState(null, "", presentationUrl(true, location.hash || "#opening"));
  updatePresentationControls(true);
  if (requestFullscreen && document.documentElement.requestFullscreen) {
    try { await document.documentElement.requestFullscreen(); } catch (_) { /* Fullscreen is an optional enhancement. */ }
  }
}

async function exitPresentation() {
  presentationActive = false;
  document.body.classList.remove("present-mode");
  presenterControls.hidden = true;
  history.replaceState(null, "", presentationUrl(false));
  presenterStatus.textContent = "Presentation mode ended.";
  if (document.fullscreenElement && document.exitFullscreen) {
    try { await document.exitFullscreen(); } catch (_) { /* The page remains usable without fullscreen. */ }
  }
  presentationTrigger.focus({ preventScroll: true });
}

presentationTrigger.addEventListener("click", (event) => {
  event.preventDefault();
  activatePresentation(true);
});
presenterPrevious.addEventListener("click", () => goToPresentationStep(presentationIndex - 1));
presenterNext.addEventListener("click", () => goToPresentationStep(presentationIndex + 1));
presenterExit.addEventListener("click", exitPresentation);

document.addEventListener("keydown", (event) => {
  if (!presentationActive) return;
  const interactive = event.target.closest("button, a, input, select, textarea, [role='tab']");
  if (event.key === "Escape") {
    event.preventDefault();
    exitPresentation();
    return;
  }
  if (interactive) return;
  if (["ArrowRight", "PageDown"].includes(event.key)) {
    event.preventDefault();
    goToPresentationStep(presentationIndex + 1);
  } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    goToPresentationStep(presentationIndex - 1);
  } else if (event.key === "Home") {
    event.preventDefault();
    goToPresentationStep(0);
  } else if (event.key === "End") {
    event.preventDefault();
    goToPresentationStep(presentationSteps.length - 1);
  }
});

if ("IntersectionObserver" in window) {
  const presentationObserver = new IntersectionObserver((entries) => {
    if (!presentationActive) return;
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const index = presentationSteps.indexOf(visible.target);
    if (index >= 0 && index !== presentationIndex) {
      presentationIndex = index;
      updatePresentationControls(false);
    }
  }, { threshold: [0.35, 0.6] });
  presentationSteps.forEach((step) => presentationObserver.observe(step));
}

if (new URLSearchParams(location.search).get("present") === "1") activatePresentation(false);

syncPriorityLayout();
