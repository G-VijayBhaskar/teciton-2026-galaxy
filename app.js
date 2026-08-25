/* ==========================================================================
   TECITON 2026 — STANDALONE JAVASCRIPT APPLICATION CONTROLLER
   ========================================================================== */

/**
 * CENTRAL GOOGLE FORM REGISTRATION URL
 * Configure your official Google Form URL here.
 */
const REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-TECITON2026-REGISTRATION/viewform";

// Symposium Constants
const EVENT_DATE = new Date("2026-02-14T08:30:00").getTime();

// Events Repository
const EVENTS_DATA = [
  {
    id: "evt-01",
    title: "Coding Odyssey",
    category: "technical",
    tagline: "Battle of algorithms, speed, and clean code architecture.",
    description: "Test your computational problem-solving abilities in a timed competitive programming environment. Conquer algorithmic puzzles ranging from data structures to dynamic programming.",
    teamSize: "1 - 2 Members",
    timing: "10:30 AM - 01:00 PM",
    venue: "Computer Science Lab 1 & 2",
    prize: "₹ 8,000 + Trophy",
    icon: "code-2",
    rules: [
      "Languages permitted: C, C++, Java, Python 3.",
      "Round 1: 30-minute MCQs on data structures & algorithm complexity.",
      "Round 2: 90-minute live coding challenge with 4 algorithmic problems.",
      "Plagiarism or external internet assistance will result in instant disqualification."
    ],
    coordinators: "S. Vignesh (+91 98401 99887) | K. Priya (+91 97891 22334)"
  },
  {
    id: "evt-02",
    title: "Bug Hunt (Debugging)",
    category: "technical",
    tagline: "Spot syntax errors, memory leaks, and logical glitches.",
    description: "An intensive code debugging challenge. Participants are presented with buggy, obfuscated code snippets across multiple languages and must fix compile-time and runtime bugs before time runs out.",
    teamSize: "1 Member (Individual)",
    timing: "11:00 AM - 01:00 PM",
    venue: "Programming Lab 3",
    prize: "₹ 6,000 + Certificate",
    icon: "bug",
    rules: [
      "Individual participation only.",
      "Codes will contain syntax errors, logical errors, and edge-case bugs.",
      "Round 1: 20 minutes (Basic C/C++ debugging).",
      "Round 2: 40 minutes (Advanced Python/Java debugging)."
    ],
    coordinators: "R. Karthik (+91 98402 33445)"
  },
  {
    id: "evt-03",
    title: "Web Crafters (Web Development)",
    category: "technical",
    tagline: "Design and build modern responsive web UIs under 2 hours.",
    description: "Showcase your web design and front-end engineering skills! Given a secret theme on the spot, craft a visually stunning, responsive web landing page using HTML5, CSS3, and JavaScript.",
    teamSize: "1 - 2 Members",
    timing: "10:30 AM - 01:00 PM",
    venue: "Web Technology Lab",
    prize: "₹ 8,000 + Trophy",
    icon: "layout",
    rules: [
      "All assets and base guidelines provided at start of event.",
      "Frameworks or templates are restricted; vanilla HTML/CSS/JS only.",
      "Judged on UI/UX aesthetic quality, responsive layout, smooth animations, and code cleanliness."
    ],
    coordinators: "M. Aravind (+91 98403 44556)"
  },
  {
    id: "evt-04",
    title: "Mind Matrix (Technical Quiz)",
    category: "technical",
    tagline: "Rapid-fire trivia on Computer Science, AI, and Tech Trends.",
    description: "The ultimate technical quiz testing your breadth of knowledge across computer systems, tech history, famous founders, artificial intelligence, networking, and emerging tech.",
    teamSize: "2 Members",
    timing: "02:00 PM - 03:45 PM",
    venue: "Main Campus Auditorium",
    prize: "₹ 6,000 + Certificate",
    icon: "brain",
    rules: [
      "Team of 2 members.",
      "Round 1: Written preliminary screening test (25 Questions).",
      "Top 6 teams advance to the Stage Buzzer Round."
    ],
    coordinators: "P. Harish (+91 98404 55667)"
  },
  {
    id: "evt-05",
    title: "InnovateX (Paper Presentation)",
    category: "technical",
    tagline: "Present your research paper, IoT prototype, or AI innovation.",
    description: "A platform to present groundbreaking research papers, innovative project prototypes, or novel software solutions to a distinguished jury of academicians and industry tech leads.",
    teamSize: "1 - 3 Members",
    timing: "10:30 AM - 01:00 PM",
    venue: "Seminar Hall A",
    prize: "₹ 10,000 + Trophy",
    icon: "file-text",
    rules: [
      "Abstract must be submitted prior to or on event day.",
      "Presentation time: 7 minutes PPT + 3 minutes Q&A with panel.",
      "IEEE standard paper format encouraged."
    ],
    coordinators: "Dr. R. Sundar (+91 98405 66778)"
  },
  {
    id: "evt-06",
    title: "Connection",
    category: "non-technical",
    tagline: "Connect the clues, images, and hints to uncover hidden words.",
    description: "A fun and brain-teasing image association challenge! Decode cryptic visual puzzles, movie references, tech logos, and everyday proverbs by connecting multiple picture clues.",
    teamSize: "2 Members",
    timing: "10:30 AM - 01:00 PM",
    venue: "Seminar Hall B",
    prize: "₹ 5,000 + Certificate",
    icon: "link-2",
    rules: [
      "Team of 2 participants.",
      "Round 1: Preliminary visual slides test.",
      "Round 2: Rapid connections on stage."
    ],
    coordinators: "T. Divya (+91 98406 77889)"
  },
  {
    id: "evt-07",
    title: "Treasure Hunt",
    category: "non-technical",
    tagline: "Decipher QR codes and hidden clues across campus.",
    description: "An adventurous campus-wide quest! Solve intricate riddles, decipher encrypted QR codes, and race against time to locate hidden checkpoints scattered throughout the NPSBCET campus.",
    teamSize: "3 - 4 Members",
    timing: "10:30 AM - 01:00 PM",
    venue: "Central Lawn & Campus-wide",
    prize: "₹ 8,000 + Trophy",
    icon: "compass",
    rules: [
      "Team size: 3 to 4 members.",
      "Each clue unlocks the location of the subsequent station.",
      "First team to crack the final cipher chest wins!"
    ],
    coordinators: "G. Sanjay (+91 98407 88990)"
  },
  {
    id: "evt-08",
    title: "Meme Alchemy (Meme Creation)",
    category: "non-technical",
    tagline: "Turn tech life and engineering struggles into viral humor.",
    description: "Express your humor and satirical genius! Craft hilarious, relatable memes centered around engineering student life, online classes, programming bugs, and tech industry culture.",
    teamSize: "1 Member (Individual)",
    timing: "02:00 PM - 03:30 PM",
    venue: "CAD Lab",
    prize: "₹ 4,000 + Certificate",
    icon: "smile",
    rules: [
      "Individual entry.",
      "Topic will be announced on spot.",
      "45 minutes crafting time."
    ],
    coordinators: "N. Preethi (+91 98408 99001)"
  },
  {
    id: "evt-09",
    title: "Cyber Arena (Gaming E-Sports)",
    category: "non-technical",
    tagline: "Battle royale and tactical FPS tournament for gaming champions.",
    description: "Get your squad ready for ultimate adrenaline! Compete in high-stakes tactical shooter and battle royale matches (BGMI / Valorant) to claim the TECITON Esports Championship.",
    teamSize: "4 Members",
    timing: "01:30 PM - 04:00 PM",
    venue: "Gaming Arena (Lab 4)",
    prize: "₹ 10,000 + Trophy",
    icon: "gamepad-2",
    rules: [
      "Full squad of 4 players.",
      "Custom room credentials shared prior to match.",
      "Fair play policy enforced."
    ],
    coordinators: "V. Nithin (+91 98409 00112)"
  },
  {
    id: "evt-10",
    title: "Surprise Arena",
    category: "non-technical",
    tagline: "On-spot surprise mini-challenges to test agility and luck.",
    description: "Expect the unexpected! A series of energetic, fast-paced minute-to-win-it games, physical mini-challenges, and spontaneous fun tasks designed to test reflex and team coordination.",
    teamSize: "1 - 2 Members",
    timing: "02:00 PM - 03:30 PM",
    venue: "Campus Amphitheatre",
    prize: "₹ 4,000 + Certificate",
    icon: "sparkles",
    rules: [
      "Open to all symposium participants.",
      "Rules revealed 1 minute before each round begins."
    ],
    coordinators: "K. Rahul (+91 98410 11223)"
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let selectedEventForModal = null;

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initThreeDeepSpaceJourney();
  initCountdownTimer();
  initNavigation();
  initEventsSystem();
  bindGoogleFormLinks();
});

/* ==========================================================================
   1. 5-SECOND CINEMATIC LOADING SCREEN
   ========================================================================== */
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('loading-bar-fill');
  const progressText = document.getElementById('loading-percentage');

  if (!loadingScreen || !progressBar || !progressText) return;

  const totalDuration = 5000; // 5 seconds
  const intervalTime = 50;
  const step = 100 / (totalDuration / intervalTime);
  let currentProgress = 0;

  const timer = setInterval(() => {
    currentProgress += step;
    if (currentProgress >= 100) {
      clearInterval(timer);
      progressBar.style.width = '100%';
      progressText.textContent = '100%';
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 600);
      }, 300);
    } else {
      const val = Math.min(Math.round(currentProgress), 99);
      progressBar.style.width = val + '%';
      progressText.textContent = val + '%';
    }
  }, intervalTime);
}

/* ==========================================================================
   2. THREE.JS 3D DEEP SPACE SCROLL JOURNEY
   ========================================================================== */
function initThreeDeepSpaceJourney() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x02030a, 0.0005);

  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.set(0, 40, 650);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Textures
  const starTexture = createStarTexture();
  const nebulaTexture = createCosmicNebulaTexture();
  const spikeTexture = createDiffractionSpikeTexture();

  // Quality scaling based on device power/width
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;
  const particleFactor = isMobile ? 0.38 : isTablet ? 0.68 : 1.0;

  // 1. Spiral Galaxy Group
  const galaxyGroup = new THREE.Group();
  
  // Core
  const coreCount = Math.floor(2200 * particleFactor);
  const coreGeo = new THREE.BufferGeometry();
  const corePos = new Float32Array(coreCount * 3);
  const coreCols = new Float32Array(coreCount * 3);
  const cWhite = new THREE.Color('#ffffff');
  const cCream = new THREE.Color('#fffbeb');
  const cGold = new THREE.Color('#fde047');

  for (let i = 0; i < coreCount; i++) {
    const i3 = i * 3;
    const u = Math.random();
    const r = Math.pow(u, 2.2) * 140;
    const theta = Math.random() * Math.PI * 2;
    corePos[i3] = Math.cos(theta) * r * 1.35 + (Math.random() - 0.5) * 12;
    corePos[i3 + 1] = (Math.random() - 0.5) * (35 * (1 - r / 140));
    corePos[i3 + 2] = Math.sin(theta) * r * 0.95 + (Math.random() - 0.5) * 12;

    const ratio = r / 140;
    const col = ratio < 0.3 ? cWhite.clone().lerp(cCream, ratio / 0.3) : cCream.clone().lerp(cGold, (ratio - 0.3) / 0.7);
    coreCols[i3] = col.r; coreCols[i3 + 1] = col.g; coreCols[i3 + 2] = col.b;
  }
  coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
  coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCols, 3));

  const coreMat = new THREE.PointsMaterial({
    size: 7.5, map: starTexture, vertexColors: true, transparent: true, opacity: 0.96, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const corePoints = new THREE.Points(coreGeo, coreMat);
  galaxyGroup.add(corePoints);

  // Arms
  const armCount = Math.floor(7500 * particleFactor);
  const armGeo = new THREE.BufferGeometry();
  const armPos = new Float32Array(armCount * 3);
  const armCols = new Float32Array(armCount * 3);
  const cIceWhite = new THREE.Color('#f8fafc');
  const cSky = new THREE.Color('#bae6fd');
  const cCyan = new THREE.Color('#22d3ee');
  const cDeepBlue = new THREE.Color('#38bdf8');
  const cViolet = new THREE.Color('#7c3aed');

  for (let i = 0; i < armCount; i++) {
    const i3 = i * 3;
    const u = Math.random();
    const radius = 90 + Math.pow(u, 1.3) * (700 - 90);
    const spinAngle = Math.log(radius / 90) * 1.32 * 2.8;
    const branchOffset = ((i % 2) / 2) * Math.PI * 2;
    const scatter = Math.pow(Math.random(), 2.4) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);
    const zScatter = Math.pow(Math.random(), 2.4) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);

    const angle = branchOffset + spinAngle;
    armPos[i3] = Math.cos(angle) * radius + scatter;
    armPos[i3 + 1] = (Math.random() - 0.5) * 28 * Math.exp(-radius / 400);
    armPos[i3 + 2] = Math.sin(angle) * radius + zScatter;

    const ratio = (radius - 90) / 610;
    let col = ratio < 0.2 ? cIceWhite.clone().lerp(cSky, ratio / 0.2) : ratio < 0.55 ? cSky.clone().lerp(cCyan, (ratio - 0.2) / 0.35) : cCyan.clone().lerp(cViolet, (ratio - 0.55) / 0.45);
    armCols[i3] = col.r; armCols[i3 + 1] = col.g; armCols[i3 + 2] = col.b;
  }
  armGeo.setAttribute('position', new THREE.BufferAttribute(armPos, 3));
  armGeo.setAttribute('color', new THREE.BufferAttribute(armCols, 3));

  const armMat = new THREE.PointsMaterial({
    size: 6.2, map: starTexture, vertexColors: true, transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending
  });
  galaxyGroup.add(new THREE.Points(armGeo, armMat));

  // Nebula Regions
  const nebCount = Math.floor(1200 * particleFactor);
  const nebGeo = new THREE.BufferGeometry();
  const nebPos = new Float32Array(nebCount * 3);
  const nebCols = new Float32Array(nebCount * 3);
  const cMagenta = new THREE.Color('#ec4899');

  for (let i = 0; i < nebCount; i++) {
    const i3 = i * 3;
    const radius = 100 + Math.random() * 550;
    const angle = ((i % 2) / 2) * Math.PI * 2 + Math.log(radius / 90) * 1.32 * 2.8;
    nebPos[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);
    nebPos[i3 + 1] = (Math.random() - 0.5) * 20;
    nebPos[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);

    const rand = Math.random();
    const col = rand < 0.4 ? cCyan : rand < 0.75 ? cViolet : cMagenta;
    nebCols[i3] = col.r; nebCols[i3 + 1] = col.g; nebCols[i3 + 2] = col.b;
  }
  nebGeo.setAttribute('position', new THREE.BufferAttribute(nebPos, 3));
  nebGeo.setAttribute('color', new THREE.BufferAttribute(nebCols, 3));

  const nebMat = new THREE.PointsMaterial({
    size: 10, map: nebulaTexture, vertexColors: true, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const nebPoints = new THREE.Points(nebGeo, nebMat);
  galaxyGroup.add(nebPoints);

  galaxyGroup.rotation.x = 0.65;
  galaxyGroup.rotation.z = -0.32;
  galaxyGroup.position.set(0, 0, -100);
  scene.add(galaxyGroup);

  // 2. Tunnel Passing Starfield
  const tunnelCount = Math.floor(3500 * particleFactor);
  const tunnelGeo = new THREE.BufferGeometry();
  const tunnelPos = new Float32Array(tunnelCount * 3);
  const tunnelCols = new Float32Array(tunnelCount * 3);

  for (let i = 0; i < tunnelCount; i++) {
    const i3 = i * 3;
    tunnelPos[i3] = (Math.random() - 0.5) * 1600;
    tunnelPos[i3 + 1] = (Math.random() - 0.5) * 1200;
    tunnelPos[i3 + 2] = (Math.random() - 0.5) * 2000;

    const rand = Math.random();
    const col = rand < 0.45 ? cWhite : rand < 0.75 ? cSky : cCyan;
    tunnelCols[i3] = col.r; tunnelCols[i3 + 1] = col.g; tunnelCols[i3 + 2] = col.b;
  }
  tunnelGeo.setAttribute('position', new THREE.BufferAttribute(tunnelPos, 3));
  tunnelGeo.setAttribute('color', new THREE.BufferAttribute(tunnelCols, 3));

  const tunnelMat = new THREE.PointsMaterial({
    size: 4.2, map: starTexture, vertexColors: true, transparent: true, opacity: 0.88, blending: THREE.AdditiveBlending
  });
  const tunnelPoints = new THREE.Points(tunnelGeo, tunnelMat);
  scene.add(tunnelPoints);

  // Scroll Tracking & Mouse Parallax
  let targetScrollProgress = 0;
  let currentScrollProgress = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let currentMouseX = 0, currentMouseY = 0;

  window.addEventListener('scroll', () => {
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
    if (docHeight > 0) {
      targetScrollProgress = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
    }
  }, { passive: true });

  document.addEventListener('mousemove', (e) => {
    targetMouseX = ((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 25;
    targetMouseY = ((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * 25;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Lerp progress & mouse
    currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;
    const p = currentScrollProgress;

    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Galaxy mesh animation
    galaxyGroup.rotation.z -= delta * (0.03 + p * 0.04);
    galaxyGroup.scale.setScalar(1 + p * 0.6);
    galaxyGroup.rotation.x = 0.65 + p * 0.35;
    galaxyGroup.rotation.y = p * 0.4;

    coreMat.size = 7.5 + Math.sin(elapsedTime * 1.8) * 0.6;
    coreMat.opacity = Math.max(0.2, 0.96 - p * 0.7);

    nebMat.opacity = 0.4 + Math.sin(elapsedTime * 1.5) * 0.1 + p * 0.45;
    nebMat.size = 10 + p * 4;

    // Tunnel particles drift towards camera during scroll
    const tunnelArr = tunnelGeo.attributes.position.array;
    const speedMult = 1 + p * 3;
    for (let i = 0; i < tunnelCount; i++) {
      const i3 = i * 3;
      let z = tunnelArr[i3 + 2] + (0.5 + p * 2.5) * speedMult;
      if (z > 700) z = -1300;
      tunnelArr[i3 + 2] = z;
    }
    tunnelGeo.attributes.position.needsUpdate = true;

    // Deep Space Camera Trajectory
    const targetZ = 650 - p * 870;
    const targetY = 40 - p * 75 - currentMouseY;
    const targetX = currentMouseX;

    camera.position.x += (targetX - camera.position.x) * 0.08;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    camera.position.z += (targetZ - camera.position.z) * 0.08;
    camera.lookAt(0, -p * 60, -150 - p * 300);

    renderer.render(scene, camera);
  }

  animate();
}

function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.12, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.35, 'rgba(224, 242, 254, 0.75)');
    grad.addColorStop(0.65, 'rgba(147, 197, 253, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

function createCosmicNebulaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(34, 211, 238, 0.85)');
    grad.addColorStop(0.5, 'rgba(124, 58, 237, 0.5)');
    grad.addColorStop(0.75, 'rgba(236, 72, 153, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

function createDiffractionSpikeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.4, 'rgba(186, 230, 253, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(128, 4); ctx.lineTo(128, 252); ctx.moveTo(4, 128); ctx.lineTo(252, 128); ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

/* ==========================================================================
   3. LIVE COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = EVENT_DATE - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   4. NAVIGATION & SCROLL EVENTS
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('hidden');
    });
  }
}

/* ==========================================================================
   5. EVENTS SYSTEM (3D TILT ANIMATION, FILTER & SEARCH)
   ========================================================================== */
function initEventsSystem() {
  const eventsGrid = document.getElementById('events-grid');
  const searchInput = document.getElementById('event-search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderEvents() {
    if (!eventsGrid) return;

    const filtered = EVENTS_DATA.filter(evt => {
      const matchesCat = currentCategory === 'all' || evt.category === currentCategory;
      const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            evt.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      eventsGrid.innerHTML = `
        <div class="glass-card text-center" style="grid-column: 1/-1; padding: 3rem;">
          <i data-lucide="search-x" style="width: 48px; height: 48px; color: #64748b; margin-bottom: 1rem;"></i>
          <h3>No events found matching your search</h3>
          <p style="color: #94a3b8; font-size: 0.875rem;">Try clearing your filter or searching for another keyword.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    eventsGrid.innerHTML = filtered.map(evt => {
      const isTech = evt.category === 'technical';
      return `
        <div class="event-card" data-id="${evt.id}">
          <div>
            <div class="event-card-top flex items-center justify-between">
              <div class="event-card-icon">
                <i data-lucide="${evt.icon || (isTech ? 'terminal' : 'gamepad-2')}"></i>
              </div>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isTech ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'bg-purple-950 text-purple-300 border border-purple-500/30'}">
                ${isTech ? 'TECHNICAL' : 'NON-TECHNICAL'}
              </span>
            </div>

            <h3 class="event-card-title">${evt.title}</h3>
            <p class="event-card-desc">${evt.tagline}</p>

            <div class="event-card-meta font-medium">
              <span><i data-lucide="users" style="width: 14px; height: 14px; color: #38bdf8; display: inline; margin-right: 4px;"></i> ${evt.teamSize}</span>
              <span style="color: #fde047;"><i data-lucide="trophy" style="width: 14px; height: 14px; color: #fde047; display: inline; margin-right: 4px;"></i> ${evt.prize.split('+')[0]}</span>
            </div>
          </div>

          <div class="event-card-actions">
            <button class="btn-view-details" data-id="${evt.id}">
              <i data-lucide="eye" style="width: 14px; height: 14px; color: #38bdf8;"></i> Details
            </button>
            <a href="${REGISTRATION_FORM_URL}" target="_blank" rel="noopener noreferrer" class="btn-register-direct">
              Register <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();

    // Attach View Details Click Listeners
    document.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openEventModal(id);
      });
    });

    // Attach 3D Mouse Tilt Animation to Event Cards
    add3DCardTiltEffect();
  }

  function add3DCardTiltEffect() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return; // Desktop tilt only
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderEvents();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderEvents();
    });
  }

  renderEvents();
}

/* ==========================================================================
   6. GOOGLE FORM LINK BINDING
   ========================================================================== */
function bindGoogleFormLinks() {
  document.querySelectorAll('.google-form-link').forEach(link => {
    link.href = REGISTRATION_FORM_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

function openEventModal(id) {
  const evt = EVENTS_DATA.find(e => e.id === id);
  if (!evt) return;

  selectedEventForModal = evt;
  document.getElementById('modal-event-title').textContent = evt.title;
  document.getElementById('modal-event-tagline').textContent = evt.tagline;
  document.getElementById('modal-event-category').textContent = evt.category.toUpperCase();
  document.getElementById('modal-event-teamsize').textContent = evt.teamSize;
  document.getElementById('modal-event-timing').textContent = evt.timing;
  document.getElementById('modal-event-venue').textContent = evt.venue;
  document.getElementById('modal-event-prize').textContent = evt.prize;
  document.getElementById('modal-event-desc').textContent = evt.description;
  document.getElementById('modal-event-coordinators').textContent = evt.coordinators;

  const rulesListEl = document.getElementById('modal-event-rules');
  if (rulesListEl) {
    rulesListEl.innerHTML = evt.rules.map(r => `<li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;"><i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: #38bdf8; shrink: 0; margin-top: 2px;"></i> <span>${r}</span></li>`).join('');
  }

  const modalRegBtn = document.getElementById('modal-register-btn');
  if (modalRegBtn) {
    modalRegBtn.href = REGISTRATION_FORM_URL;
    modalRegBtn.target = '_blank';
    modalRegBtn.rel = 'noopener noreferrer';
  }

  const modal = document.getElementById('event-modal');
  if (modal) {
    modal.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
  }
}

// Close Modal logic
document.addEventListener('click', (e) => {
  if (e.target.id === 'modal-close-btn' || e.target.id === 'modal-cancel-btn' || e.target.id === 'event-modal') {
    const modal = document.getElementById('event-modal');
    if (modal) modal.classList.add('hidden');
  }
});
