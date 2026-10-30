const priorities = {
  "student-success": {
    label: "Student Success",
    title: "From preparation to professional momentum.",
    summary: "Students are testing their voices, building networks and entering professional environments where classroom learning becomes confidence and direction.",
    metric: "29",
    metricLabel: "public policy internship placements",
    image: "doctoral-hooding.webp",
    alt: "A graduate being hooded during commencement",
    caption: "Student achievement at commencement · Jackson State University",
    highlights: [
      "Whitley Smith was one of 32 students selected from more than 100 applicants for the 2024 NFL Experienceship.",
      "Thirty theatre and speech students represented JSU nationally, earning more than five awards and two national officer positions.",
      "Students entered graduate programs, published in national outlets and presented creative and scholarly work at conferences."
    ]
  },
  "academic-prominence": {
    label: "Academic Prominence",
    title: "A national stage for scholarship and creativity.",
    summary: "Convenings, performances and public programs position Jackson State as a destination for Black intellectual and creative life.",
    metric: "250+",
    metricLabel: "College Language Association participants",
    image: "student-arts-conference.png",
    alt: "Jackson State theatre and speech students gathered at a national conference",
    caption: "Theatre and speech arts students · College impact report",
    highlights: [
      "JSU hosted the 84th College Language Association Convention for scholars, writers, students and educators.",
      "The Sonic Boom performed at Super Bowl LVIII, the Rose Parade and the National Folk Festival.",
      "Three vocal students advanced to the National NATS Student Auditions after earning regional honors."
    ]
  },
  "research-excellence": {
    label: "Research Excellence",
    title: "Research translated into healthier communities.",
    summary: "Faculty expertise, external investment and sustained outreach are addressing racial trauma, health disparities and public safety across Mississippi.",
    metric: "$1.5M",
    metricLabel: "health-equity research project",
    image: "archives-research.png",
    alt: "A researcher reviewing archival materials at the Margaret Walker Center",
    caption: "Archives, memory and public scholarship · College impact report",
    highlights: [
      "A Robert Wood Johnson Foundation-supported project advances health-equity research and community engagement.",
      "A $509,000 National Science Foundation grant supports research on racial trauma and political behavior.",
      "Prevention and driver-education outreach reached more than 41,000 students and secured more than $493,000 in 2025."
    ]
  },
  "campus-culture": {
    label: "Improvement of Campus Culture and Enhancement of JSU Brand",
    title: "Preserving memory while expanding public presence.",
    summary: "Archives, historic spaces, exhibitions and national partnerships make JSU’s cultural legacy visible on campus and far beyond it.",
    metric: "100+",
    metricLabel: "years of JSU history presented with Getty Images",
    image: "dollye-robinson-building.webp",
    alt: "The Dollye M. E. Robinson Building on Jackson State University’s campus",
    caption: "Dollye M. E. Robinson Building · Jackson State University",
    highlights: [
      "A Getty Images collaboration transformed more than a century of Jackson State history into a public exhibition.",
      "Margaret Walker Center materials appeared in the Smithsonian’s At the Vanguard exhibition.",
      "Three Home Depot grants supported campus improvement, an innovation lounge and COFO beautification."
    ]
  },
  "staff-excellence": {
    label: "Staff Excellence",
    title: "The people and centers that make public impact possible.",
    summary: "Staff-led centers turn expertise, grants and partnerships into prevention, professional access, archival stewardship, public programs and sustained community service.",
    metric: "41,000+",
    metricLabel: "students reached through center-led prevention outreach",
    image: "community-public-service.png",
    alt: "Interdisciplinary Alcohol and Drug Studies Center staff receiving a national public service award",
    caption: "Center staff · Public Service Award for alcohol prevention and safe driving",
    highlights: [
      "The Interdisciplinary Alcohol and Drug Studies Center secured more than $493,000 in 2025, while Director Nita Hilton received JSU’s Top Grant Award.",
      "Margaret Walker Center staff advanced archive preservation and access through $450,000 in Mellon support and a $317,039 IMLS award.",
      "Staff across the Margaret Walker, COFO, Bob Owens Pre-Law and Africana Digital Humanities centers expanded public programs, professional pathways and cultural access."
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
    note: "College structure is transcribed from the report’s overview of schools, departments, centers and affiliated units."
  },
  students: {
    stats: [
      ["32", "students chosen nationally for the 2024 NFL Experienceship"],
      ["29", "public policy internship placements from Summer 2023 through Spring 2025"],
      ["30", "theatre and speech students who represented JSU at a national conference"],
      ["10", "creative writing students awarded James Patterson Foundation scholarships"]
    ],
    note: "Each figure represents a distinct student pathway or cohort documented in the report."
  },
  creativity: {
    stats: [
      ["250+", "participants at the 84th College Language Association Convention"],
      ["3", "JSU vocal students who qualified for the National NATS Student Auditions"],
      ["7", "HBCUs participating in the Denyce Graves Foundation Shared Voices program"],
      ["100+", "years of JSU history presented through the Getty Images collaboration"]
    ],
    note: "These measures reflect separate literary, musical, visual and cultural initiatives documented in the report."
  },
  research: {
    stats: [
      ["41,000+", "students reached through prevention, education and public-safety outreach"],
      ["$1.5M", "health-equity research and community engagement project"],
      ["$509K", "National Science Foundation support for racial-trauma research"],
      ["$493K+", "secured in 2025 for prevention and driver-education initiatives"]
    ],
    note: "Research and outreach figures describe different projects, periods and purposes and should be read independently."
  },
  funding: {
    stats: [
      ["$450K", "Mellon Foundation support for the Margaret Walker Center"],
      ["$317K", "Institute of Museum and Library Services award for archives and access"],
      ["$300K", "AccessLex support for the Bob Owens Pre-Law Center Pipeline Program"],
      ["$170K", "triple Home Depot Retool Your School grant package"]
    ],
    note: "Awards span different grant periods, sources and purposes. They are presented individually rather than as a fundraising total."
  },
  recognition: {
    stats: [
      ["4 years", "of consecutive Humanities Teacher of the Year honorees"],
      ["5+", "awards earned at the 86th National Association of Dramatic and Speech Arts Conference"],
      ["2", "national officer positions earned by JSU theatre and speech students"],
      ["1st", "HBCU student to win Mississippi’s senior MTNA strings division"]
    ],
    note: "Recognition figures represent distinct faculty and student achievements documented across the report period."
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

const reportFilterButtons = [...document.querySelectorAll("[data-report-filter]")];
const reportCards = [...document.querySelectorAll("[data-report-group]")];

reportFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.reportFilter;
    let visible = 0;
    reportFilterButtons.forEach((entry) => entry.setAttribute("aria-pressed", String(entry === button)));
    reportCards.forEach((card) => {
      const show = filter === "all" || card.dataset.reportGroup === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    const label = filter === "all" ? "all" : button.childNodes[0].textContent.trim();
    document.querySelector("#filter-status").textContent = `Showing ${visible} ${label.toLowerCase()} report ${visible === 1 ? "story" : "stories"}.`;
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

  if (options.updateHash) history.replaceState(null, "", `#priority-${key}`);
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

syncPriorityLayout();
