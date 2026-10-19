/**
 * ------------------------------------------------------------------
 * RUDRA PRATAP SINGH — HIGH-IMPACT PORTFOLIO SYSTEM
 * ------------------------------------------------------------------
 */

// CHANGE YOUR PROFILE PICTURE HERE DIRECTLY IN CODE:
// You can use a web URL or a local file like: "./profile.jpg"
const PROFILE_PICTURE_SRC = "images/rudra-image.png";

// 1. Projects Data Structure
const projectsData = [
  {
    id: "lumeeflame",
    tag: "E-COMMERCE / BRAND",
    num: "01",
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
    id: "spendy",
    tag: "FINTECH / UTILITY",
    num: "02",
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
    id: "profile",
    isProfile: true,
    tag: "IDENTITY",
    handle: "@Rudra",
    bio: "1st Year BCA student blending AI web design with robust full-stack software development."
  },
  {
    id: "ads-platform",
    tag: "MONETIZATION",
    num: "03",
    title: "Ad-Integrated Engine",
    shortDesc: "High-performance web architecture seamlessly configured with programmatic ad scripts.",
    fullDesc: "Engineered specifically to solve layout shifts and performance degradation when integrating dynamic ad networks and banner scripts into modern web pages.",
    icon: "fa-rectangle-ad",
    stack: "JavaScript, AdSense / Dynamic Scripts",
    status: "Architecture Test",
    liveUrl: "https://webpage-for-ads.vercel.app/",
    repoUrl: "https://github.com/yummiilove",
    isProfile: false
  },
  {
    id: "todo-scheduler",
    tag: "PRODUCTIVITY",
    num: "04",
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

// 4. GSAP Fan-out Math & Zero-Stuck Z-Index Controller
function initialize3DDeck() {
  const cards = document.querySelectorAll(".deck-item");
  const total = cards.length;
  const middleIndex = Math.floor(total / 2);

  // Balanced fan angle and offset spread to avoid card clipping
  const angles = [-26, -13, 0, 13, 26];
  const xOffsets = [-170, -85, 0, 85, 170];
  const yOffsets = [24, 8, 0, 8, 24];

  cards.forEach((card, index) => {
    const defaultAngle = angles[index] || 0;
    const defaultX = xOffsets[index] || 0;
    const defaultY = yOffsets[index] || 0;
    // Default hierarchy: center is highest, edges cascade down
    const baseZ = 10 - Math.abs(middleIndex - index);

    // Initial load animation
    gsap.set(card, { x: 0, y: 150, rotation: 0, opacity: 0, zIndex: baseZ });
    gsap.to(card, {
      duration: 1.0,
      x: defaultX,
      y: defaultY,
      rotation: defaultAngle,
      opacity: 1,
      ease: "power3.out",
      delay: 0.1 * index
    });

    // Mouse Enter: Elevate zIndex cleanly and spread neighbors slightly
    card.addEventListener("mouseenter", () => {
      // Reset any other cards that might be lingering
      cards.forEach((otherCard, otherIdx) => {
        if (otherCard !== card) {
          const otherBaseZ = 10 - Math.abs(middleIndex - otherIdx);
          gsap.set(otherCard, { zIndex: otherBaseZ });
        }
      });

      // Set active card on top
      gsap.set(card, { zIndex: 100 });
    });

    // 3D Parallax Tilt
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      const tiltX = (mouseY / (rect.height / 2)) * -10;
      const tiltY = (mouseX / (rect.width / 2)) * 10;

      gsap.to(card, {
        x: defaultX,
        y: defaultY - 28,
        rotation: defaultAngle * 0.3,
        rotationX: tiltX,
        rotationY: tiltY,
        scale: 1.06,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto"
      });
    });

    // Mouse Leave: Instantly restores exact resting position and base hierarchy
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

    // Click Modal trigger
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
  document.getElementById("modalDesc").innerText = project.fullDesc;
  document.getElementById("modalStack").innerText = project.stack;
  document.getElementById("modalStatus").innerText = project.status;
  document.getElementById("modalLiveLink").href = project.liveUrl;
  document.getElementById("modalRepoLink").href = project.repoUrl;

  modal.classList.add("active");
}

modalClose?.addEventListener("click", () => modal.classList.remove("active"));
modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// 6. Render Dynamic Skills
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
  help: "Available commands: <span class='term-highlight'>about</span>, <span class='term-highlight'>skills</span>, <span class='term-highlight'>projects</span>, <span class='term-highlight'>education</span>, <span class='term-highlight'>hire</span>, <span class='term-highlight'>clear</span>",
  about: "Rudra Pratap Singh — AI Web Developer & Designer. Focused on building high-performance creative web interfaces and learning scalable backend systems.",
  skills: "HTML5, CSS3, JavaScript, Python, C, GSAP, Figma, Git. Currently learning: Java, React.js, Node.js.",
  projects: "1. LumeeFlame (E-commerce)<br>2. Spendy (Expense Tracker)<br>3. Ad-Integrated Platform<br>4. Interactive Task Scheduler",
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

// 8. Custom Magnetic Cursor
const cursorDot = document.getElementById("cursorDot");
const cursorCircle = document.getElementById("cursorCircle");

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

// 9. Resume button prompt
document.getElementById("resumeBtn")?.addEventListener("click", () => {
  alert("Resume is currently being updated for 2026 and will be available to download shortly!");
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderDeck();
  initialize3DDeck();
  renderSkills();
});