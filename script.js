const priorities = {
  "student-success": {
    label: "Student Success",
    title: "From preparation to professional momentum.",
    summary: "Students are testing their voices, building networks and entering professional environments where classroom learning becomes confidence and direction.",
    metric: "29",
    metricLabel: "public policy internship placements",
    image: "prelaw-pathways.png",
    alt: "JSU pre-law students visiting a professional law office",
    caption: "Pre-law professional pathways · College impact report",
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
    image: "campus-improvement.png",
    alt: "JSU and community partners opening an improved historic campus space",
    caption: "Campus and community improvement · College impact report",
    highlights: [
      "A Getty Images collaboration transformed more than a century of Jackson State history into a public exhibition.",
      "Margaret Walker Center materials appeared in the Smithsonian’s At the Vanguard exhibition.",
      "Three Home Depot grants supported campus improvement, an innovation lounge and COFO beautification."
    ]
  },
  "staff-excellence": {
    label: "Staff Excellence",
    title: "Leadership that extends the College’s reach.",
    summary: "Faculty and staff are earning national recognition, building programs and shaping professional standards across disciplines.",
    metric: "4 years",
    metricLabel: "of consecutive Humanities Teachers of the Year",
    image: "byron-orey.png",
    alt: "Professor Byron D’Andra Orey",
    caption: "Byron D’Andra Orey · Southern Political Science Association president",
    highlights: [
      "Art, Music and Theatre faculty earned Humanities Teacher of the Year honors from 2023 through 2026.",
      "Rico D. Chapman and Kofi Barima received Fulbright awards that expanded global scholarly connections.",
      "Gloria Billingsley became a 2026 National Academy of Public Administration Fellow and led national accreditation work."
    ]
  }
};

const impactViews = {
  snapshot: {
    stats: [
      ["$4.1M+", "selected support documented across featured awards and investments"],
      ["11", "academic departments represented in the impact report"],
      ["41,000+", "students reached through prevention and public-safety outreach"],
      ["29", "public policy internship placements from Summer 2023–Spring 2025"]
    ],
    note: "The support figure combines selected awards and investments named in the report. It is not presented as an audited fundraising total."
  },
  funding: {
    stats: [
      ["$4.1M+", "selected external support and investments documented in featured stories"],
      ["$1.5M", "health-equity research and community engagement project"],
      ["$509K", "National Science Foundation support for racial-trauma research"],
      ["$493K+", "secured in 2025 for prevention, education and community outreach"]
    ],
    note: "Awards may span different grant periods and purposes. The figures are shown individually in the report and are not an audited fundraising total."
  },
  structure: {
    stats: [
      ["3", "schools spanning communications, fine and performing arts, and social and behavioral sciences"],
      ["11", "academic departments featured across the College"],
      ["8", "centers and affiliated special units named in the report"],
      ["3", "academic years of impact from Fall 2023 through Spring 2026"]
    ],
    note: "College structure is transcribed from the report’s overview of departments, centers and affiliated special units."
  },
  recognition: {
    stats: [
      ["250+", "participants at the 84th College Language Association Convention"],
      ["100+", "years of JSU history presented through the Getty Images collaboration"],
      ["4 years", "of consecutive Humanities Teacher of the Year honorees"],
      ["3", "vocal students who qualified for the National NATS Student Auditions"]
    ],
    note: "These figures describe distinct programs and recognitions; they are not intended to be combined into a single total."
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
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
});
navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}));

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
