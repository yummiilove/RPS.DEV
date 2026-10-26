/**
 * ------------------------------------------------------------------
 * RUDRA PRATAP SINGH — HIGH-IMPACT PORTFOLIO SYSTEM
 * ------------------------------------------------------------------
 */

// Profile picture path
const PROFILE_PICTURE_SRC = "images/rudra-image.png";

// 1. Projects Data Structure (Including new XAT Exam Simulator)
const projectsData = [
  {
    id: "xat-simulator",
    tag: "EDTECH / SIMULATOR",
    num: "01",
    title: "XAT Exam Simulator",
    shortDesc: "Realistic national exam portal with sectional timers, live palettes, and official negative marking.",
    fullDesc: "A complete computer-based testing engine replicating the official XLRI XAT environment.\n\n• Custom Timers & Section Drills: Select individual sections (VALR, DM, QA-DI, GK) with custom time caps (60/100/180m) and automatic Part 1 / Part 2 transitions.\n• Accurate XAT Marking Algorithm: Computes +1.0 for correct, -0.25 for incorrect, and exact unattempted question penalties (-0.10 deduction past the first 8 unattempted in Part 1; no negative marking in GK).\n• Performance Analytics & Downloads: Section-wise score breakdowns, color-coded solution reviews, and one-click JSON/Printable HTML revision sheets.\n• Multi-Mock Architecture: Decoupled JSON data store handling multiple mocks cleanly.",
    icon: "fa-graduation-cap",
    stack: "Vanilla JS (ES6+), Multi-Mock JSON, LocalStorage, Web APIs",
    status: "Production Ready / Live",
    liveUrl: "https://xatexam.vercel.app/",
    repoUrl: "https://github.com/yummiilove/xat-exam-simulator",
    isProfile: false
  },
  {
    id: "lumeeflame",
    tag: "E-COMMERCE / BRAND",
    num: "02",
    title: "LumeeFlame",
    shortDesc: "Sculpted soy candle storefront with clean UI, optimized checkout, and responsive design.",
    fullDesc: "An artisanal candle e-commerce brand developed with a distinct visual identity, high-speed image loading, mobile-first responsiveness, and structured catalog displays.",
    icon: "fa-fire-flame-curved",
    stack: "HTML5, CSS3, JS, AI Visual Prompts",
    status: "Live & Active",
    liveUrl: "https://lummeflame.vercel.app",
    repoUrl: "https://github.com/yummiilove",
    isProfile: false
  },
  {
    id: "profile",
    isProfile: true,
    tag: "IDENTITY",
    handle: "@rudra",
    bio: "1st Year BCA student blending AI web design with robust full-stack software development."
  },
  {
    id: "spendy",
    tag: "FINTECH / UTILITY",
    num: "03",
    title: "Spendy Tracker",
    shortDesc: "Modern expense tracker web app with dynamic balance calculations and sleek aesthetics.",
    fullDesc: "Spendy offers instant financial ledger tracking with category distributions, dynamic calculation algorithms, and clean data feedback without bulky dependencies.",
    icon: "fa-wallet",
    stack: "Vanilla JS, LocalStorage, CSS Grids",
    status: "Production Ready",
    liveUrl: "https://spendy-indol.vercel.app/",
    repoUrl: "https://github.com/yummiilove",
    isProfile: false
  },
  {
    id: "ads-platform",
    tag: "MONETIZATION",
    num: "04",
    title: "Ad-Integrated Engine",
    shortDesc: "High-performance web architecture seamlessly configured with programmatic ad scripts.",
    fullDesc: "Engineered specifically to solve layout shifts and performance degradation when integrating dynamic ad networks and banner scripts into modern web pages.",
    icon: "fa-rectangle-ad",
    stack: "JavaScript, AdSense / Dynamic Scripts",
    status: "Production Ready",
    liveUrl: "https://webpage-for-ads.vercel.app/",
    repoUrl: "https://github.com/yummiilove",
    isProfile: false
  },
  {
    id: "todo-scheduler",
    tag: "PRODUCTIVITY",
    num: "05",
    title: "Interactive Scheduler",
    shortDesc: "Clean task scheduler built with pure JavaScript state management and local persistence.",
    fullDesc: "A zero-lag productivity board built to demonstrate mastery over pure DOM mutations, state stores, event bubbling, and responsive layouts.",
    icon: "fa-list-check",
    stack: "HTML5, CSS3, JavaScript",
    status: "Open Source",
    liveUrl: "https://github.com/yummiilove",
    repoUrl: "https://github.com/yummiilove",
    isProfile: false
  }
];

// 2. Expandable Skills Configuration
const skillsConfig = [
  {
    category: "Languages",
    icon: "fa-code",
    skills: [
      { name: "JavaScript (ES6+)", learning: false },
      { name: "Python", learning: false },
      { name: "C Programming", learning: false },
      { name: "HTML5 & CSS3", learning: false }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "fa-server",
    skills: [
      { name: "Java (Core & Backend)", learning: true },
      { name: "Node.js", learning: true },
      { name: "REST APIs", learning: true }
    ]
  },
  {
    category: "Frameworks & Animation",
    icon: "fa-cubes",
    skills: [
      { name: "React.js", learning: true },
      { name: "GSAP Animation", learning: false },
      { name: "CSS 3D Transforms", learning: false }
    ]
  },
  {
    category: "Design & AI Workflows",
    icon: "fa-brain",
    skills: [
      { name: "AI Web Development", learning: false },
      { name: "AI Web Designing", learning: false },
      { name: "Figma UI/UX", learning: false },
      { name: "Google Stitch", learning: false }
    ]
  },
  {
    category: "Workflow & Tools",
    icon: "fa-terminal",
    skills: [
      { name: "Git & GitHub", learning: false },
      { name: "VS Code", learning: false },
      { name: "Ad Integration", learning: false }
    ]
  }
];

// 3. Render Deck Cards
function renderDeck() {
  const container = document.getElementById("deckCards");
  if (!container) return;

  container.innerHTML = projectsData.map((item, idx) => {
    if (item.isProfile) {
      return `
        <article class="deck-item is-profile" data-index="${idx}" data-id="${item.id}">
          <div class="deck-item-inner">
            <div class="profile-avatar-wrap">
              <img src="${PROFILE_PICTURE_SRC}" alt="Rudra Pratap Singh" />
            </div>
            <div class="profile-info">
              <div class="profile-status"><span class="status-dot"></span> OPEN FOR PROJECTS</div>
              <h4>${item.handle}</h4>
              <p>${item.bio}</p>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="deck-item" data-index="${idx}" data-id="${item.id}">
        <div class="deck-item-inner">
          <div class="card-top">
            <span class="card-tag">${item.tag}</span>
            <span class="card-num">${item.num}</span>
          </div>
          <div class="card-body">
            <i class="fa-solid ${item.icon} card-icon"></i>
            <h3>${item.title}</h3>
            <p>${item.shortDesc}</p>
          </div>
          <div class="card-bottom">
            <span class="card-click-hint"><i class="fa-solid fa-expand"></i> Click to inspect</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 4. GSAP Fan-out Math with Responsive Breakpoint Handling
function initialize3DDeck() {
  const cards = document.querySelectorAll(".deck-item");
  const total = cards.length;
  const isMobile = window.innerWidth <= 768;
  const middleIndex = Math.floor(total / 2);

  // Geometry tailored for mobile vs desktop
  const angles = isMobile 
    ? [-16, -8, 0, 8, 16, 24] 
    : [-30, -18, -6, 6, 18, 30];
  const xOffsets = isMobile 
    ? [-70, -35, 0, 35, 70, 105] 
    : [-220, -130, -45, 45, 130, 220];
  const yOffsets = isMobile 
    ? [14, 6, 0, 6, 14, 22] 
    : [28, 12, 0, 0, 12, 28];

  cards.forEach((card, index) => {
    const defaultAngle = angles[index] || 0;
    const defaultX = xOffsets[index] || 0;
    const defaultY = yOffsets[index] || 0;
    const baseZ = 20 - Math.abs(middleIndex - index);

    // Initial entrance
    gsap.set(card, { x: 0, y: 120, rotation: 0, opacity: 0, zIndex: baseZ });
    gsap.to(card, {
      duration: 0.9,
      x: defaultX,
      y: defaultY,
      rotation: defaultAngle,
      opacity: 1,
      ease: "power3.out",
      delay: 0.08 * index
    });

    // Desktop hover & 3D Parallax tilt (disabled on touch devices for fluid performance)
    if (!isMobile) {
      card.addEventListener("mouseenter", () => {
        cards.forEach((otherCard, otherIdx) => {
          if (otherCard !== card) {
            const otherBaseZ = 20 - Math.abs(middleIndex - otherIdx);
            gsap.set(otherCard, { zIndex: otherBaseZ });
          }
        });
        gsap.set(card, { zIndex: 100 });
      });

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const tiltX = (mouseY / (rect.height / 2)) * -10;
        const tiltY = (mouseX / (rect.width / 2)) * 10;

        gsap.to(card, {
          x: defaultX,
          y: defaultY - 26,
          rotation: defaultAngle * 0.35,
          rotationX: tiltX,
          rotationY: tiltY,
          scale: 1.05,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          x: defaultX,
          y: defaultY,
          rotation: defaultAngle,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
          onComplete: () => {
            gsap.set(card, { zIndex: baseZ });
          }
        });
      });
    }

    // Modal Trigger
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-id");
      openProjectModal(projId);
    });
  });
}

// 5. Project Detail Pop-up Modal
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

function openProjectModal(id) {
  const project = projectsData.find((p) => p.id === id);
  if (!project || project.isProfile) return;

  document.getElementById("modalTag").innerText = project.tag;
  document.getElementById("modalTitle").innerText = project.title;
  
  // Format linebreaks into clean paragraphs
  const descEl = document.getElementById("modalDesc");
  descEl.innerHTML = project.fullDesc.replace(/\n/g, "<br>");

  document.getElementById("modalStack").innerText = project.stack;
  document.getElementById("modalStatus").innerText = project.status;
  document.getElementById("modalLiveLink").href = project.liveUrl;
  document.getElementById("modalRepoLink").href = project.repoUrl;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// 6. Dynamic Skills Matrix
function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = skillsConfig.map((group) => `
    <div class="skill-category-card">
      <div class="category-header">
        <span><i class="fa-solid ${group.icon}"></i> ${group.category}</span>
        <span>${group.skills.length}</span>
      </div>
      <div class="skill-pill-list">
        ${group.skills.map((s) => `
          <span class="skill-pill ${s.learning ? "status-learning" : ""}">
            <i class="fa-solid ${s.learning ? "fa-spinner fa-spin-pulse" : "fa-check"}"></i>
            ${s.name}${s.learning ? '<small style="opacity:0.65;">(learning)</small>' : ""}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// 7. Recruiter Interactive Terminal
const terminalInput = document.getElementById("terminalInput");
const terminalBody = document.getElementById("terminalBody");

const commandOutputs = {
  help: "Available commands: <span class='term-highlight'>about</span>, <span class='term-highlight'>skills</span>, <span class='term-highlight'>projects</span>, <span class='term-highlight'>xat</span>, <span class='term-highlight'>education</span>, <span class='term-highlight'>hire</span>, <span class='term-highlight'>clear</span>",
  about: "Rudra Pratap Singh — AI Web Developer & Designer. Passionate about shipping production web software, interactive UI systems, and mastering backend engineering.",
  skills: "HTML5, CSS3, JavaScript, Python, C, GSAP, Figma, Git. Currently expanding into: Java, React.js, Node.js.",
  projects: "1. XAT Exam Simulator (Live Engine)<br>2. LumeeFlame (E-commerce)<br>3. Spendy (Expense Tracker)<br>4. Monetization Engine (Ad-Integrated)<br>5. Task Scheduler",
  xat: "XAT Simulator: Replicates national MBA testing UI with sectional timers (VALR, DM, QA-DI, GK), negative scoring (-0.25), unattempted question penalty (-0.10 past 8 skipped), and downloadable answer keys. URL: <a href='https://xatexam.vercel.app/' target='_blank' style='color:#ff3333;'>xatexam.vercel.app</a>",
  education: `
    <strong>1. BCA (1st Year, 2025–Present)</strong><br>
    Maharana Pratap Engineering College, Kanpur (Affiliated with AKTU)<br><br>
    <strong>2. 12th Intermediate (2025)</strong><br>
    J S P I C Paramandapur, Jansa, Varanasi<br><br>
    <strong>3. 10th Matriculation (2022)</strong><br>
    Army Public School (APS), Unchi Bassi, Punjab
  `,
  hire: "Send an email directly to: <a href='mailto:rudsigeamer@gmail.com' style='color:#ff3333;'>rudsigeamer@gmail.com</a>"
};

terminalInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputVal = terminalInput.value.trim().toLowerCase();
    if (!inputVal) return;

    if (inputVal === "clear") {
      terminalBody.innerHTML = "";
    } else {
      const userLine = document.createElement("div");
      userLine.className = "term-line";
      userLine.innerHTML = `<span class="term-prompt">rudra:~$</span> ${inputVal}`;
      terminalBody.appendChild(userLine);

      const respLine = document.createElement("div");
      respLine.className = "term-line output";
      respLine.innerHTML = commandOutputs[inputVal] || `Command not found: "${inputVal}". Type <span class='term-highlight'>help</span> for commands.`;
      terminalBody.appendChild(respLine);
    }

    terminalInput.value = "";
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

// 8. Custom Magnetic Cursor (Desktop Only)
const cursorDot = document.getElementById("cursorDot");
const cursorCircle = document.getElementById("cursorCircle");

if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    cursorCircle.animate({ left: `${x}px`, top: `${y}px` }, { duration: 250, fill: "forwards" });
  });

  document.querySelectorAll("a, button, .deck-item, input").forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

// 9. Resize recalculation
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initialize3DDeck();
  }, 250);
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderDeck();
  initialize3DDeck();
  renderSkills();
});