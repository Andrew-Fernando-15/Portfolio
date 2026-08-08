/* ================= TAP BACKGROUND TO REVEAL SLIDER ================= */
const unlockArea = document.getElementById("unlockArea");

function revealSlider() {
  document.body.removeEventListener("click", revealSlider);
  document.body.removeEventListener("touchend", revealSlider);
  unlockArea.classList.add("visible");
  setupSlider();
}

document.body.addEventListener("click", revealSlider);
document.body.addEventListener("touchend", revealSlider);

/* ================= SLIDE TO UNLOCK ================= */
const track = document.getElementById("sliderTrack");
const circle = document.getElementById("sliderCircle");
const fill = document.getElementById("sliderFill");
const loadingScreen = document.getElementById("loadingScreen");

let dragging = false;
let startX = 0;
let currentX = 0;
let trackWidth = 0;
let circleWidth = 0;
let maxX = 0;
let unlocked = false;

function setupSlider() {
  trackWidth = track.offsetWidth;
  circleWidth = circle.offsetWidth;
  maxX = trackWidth - circleWidth - 8; // 4px padding each side
}

window.addEventListener("resize", setupSlider);
setupSlider();

function getX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

function pointerDown(e) {
  if (unlocked) return;
  dragging = true;
  circle.style.transition = "none";
  fill.style.transition = "none";
  startX = getX(e) - currentX;
}

function pointerMove(e) {
  if (!dragging) return;
  if (e.cancelable) e.preventDefault();
  let x = getX(e) - startX;
  x = Math.max(0, Math.min(x, maxX));
  currentX = x;
  circle.style.left = (4 + x) + "px";
  fill.style.width = (x + circleWidth) + "px";
}

function pointerUp() {
  if (!dragging) return;
  dragging = false;

  const threshold = maxX * 0.85;
  if (currentX >= threshold) {
    completeUnlock();
  } else {
    snapBack();
  }
}

circle.addEventListener("mousedown", pointerDown);
circle.addEventListener("touchstart", pointerDown, { passive: true });
window.addEventListener("mousemove", pointerMove);
window.addEventListener("touchmove", pointerMove, { passive: false });
window.addEventListener("mouseup", pointerUp);
window.addEventListener("touchend", pointerUp);

function snapBack() {
  circle.style.transition = "left 0.3s ease";
  fill.style.transition = "width 0.3s ease";
  circle.style.left = "4px";
  fill.style.width = "0px";
  currentX = 0;
}

function completeUnlock() {
  unlocked = true;

  // finish the slide smoothly to the end
  circle.style.transition = "left 0.25s ease";
  fill.style.transition = "width 0.25s ease";
  circle.style.left = (maxX + 4) + "px";
  fill.style.width = trackWidth + "px";
  track.classList.add("unlocked");

  setTimeout(() => {
    unlockArea.style.transition = "opacity 0.4s ease";
    unlockArea.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "homescreen.html";
    }, 400);
  }, 300);
}

/* ================= BOOT-STYLE LOADING SEQUENCE ================= */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runBootSequence() {
  const dotWrap = document.getElementById("bootDotWrap");
  const dotInner = document.getElementById("bootDotInner");
  const brand = document.getElementById("bootBrand");
  const textBlock = document.getElementById("bootTextBlock");
  const loaderRow = document.getElementById("bootLoaderRow");

  // PHASE 1 — small white dot
  await delay(200);

  // PHASE 2 — white dot grows
  dotWrap.classList.add("grow");
  await delay(950);

  // PHASE 3 — black fills from center
  dotInner.classList.add("fill");
  await delay(620);

  // PHASE 4 — dot hides, logo appears
  dotWrap.style.transition = "opacity 0.3s ease";
  dotWrap.style.opacity = "0";
  brand.classList.add("visible");

  // PHASE 5 — logo sits briefly
  await delay(700);

  // PHASE 6 — slide left, text reveals
  brand.classList.add("slide-left");
  await delay(250);
  textBlock.classList.add("reveal");

  // PHASE 7 — progress bar
  await delay(800);
  loaderRow.classList.add("show");

  // PHASE 8 — hand off to homescreen
  await delay(2600);
  window.location.href = "homescreen.html";
}

/* ================= PETALS ================= */
const petalContainer = document.getElementById("petal-container");
const MAX_PETALS = 50;
let activePetals = 0;

function spawnPetal() {
  if (activePetals >= MAX_PETALS) return;
  activePetals++;

  const petal = document.createElement("div");
  petal.className = "petal";

  const size = Math.random() * 7 + 6;
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  const fromLeft = Math.random() < 0.65;
  let startX, startY;

  if (fromLeft) {
    startX = Math.random() * 30 - 10;
    startY = Math.random() * (window.innerHeight * 0.6);
  } else {
    startX = Math.random() * (window.innerWidth * 0.25);
    startY = Math.random() * 20 - 10;
  }

  petal.style.left = startX + "px";
  petal.style.top = startY + "px";
  petalContainer.appendChild(petal);

  const duration = (Math.random() * 9 + 8) * 1000;
  const startTime = performance.now();

  const endX = window.innerWidth * (0.3 + Math.random() * 0.85);
  const endY = window.innerHeight * (Math.random() * 1.05);

  const wave1Amp = 25 + Math.random() * 35;
  const wave1Freq = 1.5 + Math.random() * 1.5;
  const wave2Amp = 10 + Math.random() * 18;
  const wave2Freq = 3 + Math.random() * 2;
  const wave1Phase = Math.random() * Math.PI * 2;
  const wave2Phase = Math.random() * Math.PI * 2;

  const bobAmp = 12 + Math.random() * 20;
  const bobFreq = 2 + Math.random() * 2;

  const spinSpeed = (Math.random() * 2 - 1) * 0.04;
  let angle = Math.random() * Math.PI * 2;

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(now) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const progress = easeInOut(t);

    const waveX =
      wave1Amp * Math.sin(t * Math.PI * wave1Freq + wave1Phase) +
      wave2Amp * Math.sin(t * Math.PI * wave2Freq + wave2Phase);

    const waveY = bobAmp * Math.sin(t * Math.PI * bobFreq);

    const x = startX + (endX - startX) * progress + waveX;
    const y = startY + (endY - startY) * progress + waveY;

    let opacity = 0.82;
    if (t < 0.08) opacity = (t / 0.08) * 0.82;
    else if (t > 0.75) opacity = ((1 - t) / 0.25) * 0.82;

    petal.style.transform = `translate(${x - startX}px, ${y - startY}px) rotate(${angle}rad)`;
    petal.style.opacity = opacity;
    angle += spinSpeed;

    if (t < 1) {
      requestAnimationFrame(animate);
    } else {
      petal.remove();
      activePetals--;
    }
  }

  requestAnimationFrame(animate);
}

setInterval(spawnPetal, 500);
for (let i = 0; i < 8; i++) setTimeout(spawnPetal, i * 180);

/* ================= CLOCK ================= */
function updateClock() {
  const now = new Date();
  const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
                  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

  document.getElementById("day").textContent = days[now.getDay()];
  document.getElementById("date").textContent =
    `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;

  let h = now.getHours();
  let m = now.getMinutes();
  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;
  m = m < 10 ? "0" + m : m;

  document.getElementById("time").textContent = `${h}:${m} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();
