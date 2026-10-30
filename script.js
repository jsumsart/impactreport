const priorities = {
  "student-success": {
    label: "Student Success",
    title: "From preparation to professional momentum.",
    summary: "Students are testing their voices, building networks and entering professional environments where classroom learning becomes confidence and direction.",
    metric: "29",
    metricLabel: "public policy internship placements",
    image: "student-whitley-smith.png",
    alt: "Whitley Smith seated in a JSU stadium suite",
    caption: "Whitley Smith · Journalism and Media Studies",
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
    image: "sonic-boom-report.png",
    alt: "The Sonic Boom of the South performing before a crowd",
    caption: "Sonic Boom of the South · College impact report",
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
    image: "community-public-service.png",
    alt: "JSU representatives receiving a national public service award",
    caption: "Community engagement and public service · College impact report",
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
    image: "smithsonian-vanguard.png",
    alt: "JSU representatives at the Smithsonian At the Vanguard exhibition",
    caption: "At the Vanguard · National Museum of African American History and Culture",
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
    image: "dean-rico-chapman.jpg",
    alt: "Rico D. Chapman, Dean of the College of Liberal Arts",
    caption: "Rico D. Chapman · Fulbright U.S. Scholar",
    highlights: [
      "Art, Music and Theatre faculty earned Humanities Teacher of the Year honors from 2023 through 2026.",
      "Rico D. Chapman and Kofi Barima received Fulbright awards that expanded global scholarly connections.",
      "Gloria Billingsley became a 2026 National Academy of Public Administration Fellow and led national accreditation work."
    ]
  }
};

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
