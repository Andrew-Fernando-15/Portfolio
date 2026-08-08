// ===================
// Desktop / Windows / Popups / Start Menu / Taskbar
// ===================

// Desktop icons
const iconGit = document.getElementById("icon-git");
const iconCV = document.getElementById("icon-cv");
const iconPortfolio = document.getElementById("icon-portfolio");
const iconFlower = document.getElementById("icon-flower");
const iconAbout = document.getElementById("icon-about");

// CV window + taskbar button
const cvWindow = document.getElementById("cv-window");
const cvClose = document.getElementById("cv-close");
const taskCV = document.getElementById("task-cv");

// CV controls + viewer
const cvMinimize = document.getElementById("cv-minimize");
const cvMaximize = document.getElementById("cv-maximize");
const cvFrame = document.getElementById("cv-frame");
const cvZoomIn = document.getElementById("cv-zoom-in");
const cvZoomOut = document.getElementById("cv-zoom-out");

// Start menu elements
const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const trayDate = document.querySelector(".tray-date");
const trayTime = document.querySelector(".tray-time");

// Git confirm window
const gitConfirmWindow = document.getElementById("git-confirm-window");
const gitConfirmTitlebar = document.getElementById("git-confirm-titlebar");
const gitConfirmClose = document.getElementById("git-confirm-close");
const gitConfirmYes = document.getElementById("git-confirm-yes");
const gitConfirmCancel = document.getElementById("git-confirm-cancel");

// Flower confirm window
const flowerConfirmWindow = document.getElementById("flower-confirm-window");
const flowerConfirmTitlebar = document.getElementById("flower-confirm-titlebar");
const flowerConfirmClose = document.getElementById("flower-confirm-close");
const flowerConfirmYes = document.getElementById("flower-confirm-yes");
const flowerConfirmCancel = document.getElementById("flower-confirm-cancel");
const taskFlower = document.getElementById("task-flower");

// Portfolio confirm window
const portfolioConfirmWindow = document.getElementById("portfolio-confirm-window");
const portfolioConfirmTitlebar = document.getElementById("portfolio-confirm-titlebar");
const portfolioConfirmClose = document.getElementById("portfolio-confirm-close");
const portfolioConfirmYes = document.getElementById("portfolio-confirm-yes");
const portfolioConfirmCancel = document.getElementById("portfolio-confirm-cancel");

// Instagram confirm window
const instagramConfirmWindow = document.getElementById("instagram-confirm-window");
const instagramConfirmTitlebar = document.getElementById("instagram-confirm-titlebar");
const instagramConfirmClose = document.getElementById("instagram-confirm-close");
const instagramConfirmYes = document.getElementById("instagram-confirm-yes");
const instagramConfirmCancel = document.getElementById("instagram-confirm-cancel");

// LinkedIn confirm window
const linkedinConfirmWindow = document.getElementById("linkedin-confirm-window");
const linkedinConfirmTitlebar = document.getElementById("linkedin-confirm-titlebar");
const linkedinConfirmClose = document.getElementById("linkedin-confirm-close");
const linkedinConfirmYes = document.getElementById("linkedin-confirm-yes");
const linkedinConfirmCancel = document.getElementById("linkedin-confirm-cancel");

// Contact confirm window
const contactConfirmWindow = document.getElementById("contact-confirm-window");
const contactConfirmTitlebar = document.getElementById("contact-confirm-titlebar");
const contactConfirmClose = document.getElementById("contact-confirm-close");

// About window
const aboutWindow = document.getElementById("about-window");
const aboutTitlebar = document.getElementById("about-titlebar");
const aboutClose = document.getElementById("about-close");
const aboutMinimize = document.getElementById("about-minimize");
const aboutMaximize = document.getElementById("about-maximize");

// Taskbar buttons
const taskGit = document.getElementById("task-git");
const taskPortfolio = document.getElementById("task-portfolio");
const taskInstagram = document.getElementById("task-instagram");
const taskLinkedin = document.getElementById("task-linkedin");
const taskCmd = document.getElementById("task-cmd");
const taskAbout = document.getElementById("task-about");
const taskContact = document.getElementById("task-contact");

// CMD elements
const cmdWindow = document.getElementById("cmd-window");
const cmdTitlebar = document.getElementById("cmd-titlebar");
const cmdClose = document.getElementById("cmd-close");
const cmdMinimize = document.getElementById("cmd-minimize");
const cmdMaximize = document.getElementById("cmd-maximize");
const cmdOutput = document.getElementById("cmd-output");
const startCmd = document.getElementById("start-cmd");

// Desktop root and icons
const desktop = document.getElementById("desktop");
const desktopIcons = document.querySelectorAll(".desktop-icon");

// Power overlay
const powerOverlay = document.getElementById("power-overlay");

// Power popup buttons
const popupShutdown = document.getElementById("popup-shutdown");
const popupRestart = document.getElementById("popup-restart");
const popupLogoff = document.getElementById("popup-logoff");
const popupCancel = document.getElementById("popup-cancel");

// Contact (Start menu + hidden mailto helper)
const startContact = document.getElementById("start-contact");
const contactMailto = document.getElementById("contact-mailto");

// Z-index management
let topZ = 50;

function bringToFront(win) {
  topZ += 1;
  if (topZ >= 9990) topZ = 50;
  win.style.zIndex = topZ;
}

// Draggable helper for windows
function makeWindowDraggable(win, handle) {
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  handle.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = win.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = "none";
    bringToFront(win);
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    win.style.left = e.clientX - offsetX + "px";
    win.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
    document.body.style.userSelect = "";
  });
}

// show overlay then navigate
function showPowerOverlayAndGo(url, delayMs = 1200) {
  if (powerOverlay) {
    powerOverlay.classList.remove("hidden");
  }
  setTimeout(() => {
    window.location.href = url;
  }, delayMs);
}

// Helper to just open popup without navigating
function openPowerPopup() {
  if (powerOverlay) powerOverlay.classList.remove("hidden");
}

if (popupCancel) {
  popupCancel.addEventListener("click", () => {
    if (powerOverlay) powerOverlay.classList.add("hidden");
  });
}

// Power popup button behavior
if (popupShutdown) {
  popupShutdown.addEventListener("click", () => {
    showPowerOverlayAndGo("https://www.google.com");
  });
}

if (popupRestart) {
  popupRestart.addEventListener("click", () => {
    showPowerOverlayAndGo("homescreen.html");
  });
}

if (popupLogoff) {
  popupLogoff.addEventListener("click", () => {
    showPowerOverlayAndGo("lockscreen.html");
  });
}

if (popupCancel) {
  popupCancel.addEventListener("click", () => {
    if (powerOverlay) powerOverlay.classList.add("hidden");
  });
}


// Make windows draggable
if (gitConfirmWindow && gitConfirmTitlebar) {
  makeWindowDraggable(gitConfirmWindow, gitConfirmTitlebar);
}
if (portfolioConfirmWindow && portfolioConfirmTitlebar) {
  makeWindowDraggable(portfolioConfirmWindow, portfolioConfirmTitlebar);
}
if (cvWindow) {
  makeWindowDraggable(cvWindow, cvWindow.querySelector(".window-titlebar"));
}
if (instagramConfirmWindow && instagramConfirmTitlebar) {
  makeWindowDraggable(instagramConfirmWindow, instagramConfirmTitlebar);
}
if (linkedinConfirmWindow && linkedinConfirmTitlebar) {
  makeWindowDraggable(linkedinConfirmWindow, linkedinConfirmTitlebar);
}
if (contactConfirmWindow && contactConfirmTitlebar) {
  makeWindowDraggable(contactConfirmWindow, contactConfirmTitlebar);
}
if (cmdWindow && cmdTitlebar) {
  makeWindowDraggable(cmdWindow, cmdTitlebar);
}
if (aboutWindow && aboutTitlebar) {
  makeWindowDraggable(aboutWindow, aboutTitlebar);
}

// Focus on titlebar mousedown
if (gitConfirmTitlebar) {
  gitConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(gitConfirmWindow)
  );
}
if (portfolioConfirmTitlebar) {
  portfolioConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(portfolioConfirmWindow)
  );
}
if (instagramConfirmTitlebar) {
  instagramConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(instagramConfirmWindow)
  );
}
if (linkedinConfirmTitlebar) {
  linkedinConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(linkedinConfirmWindow)
  );
}
if (contactConfirmTitlebar) {
  contactConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(contactConfirmWindow)
  );
}
if (cvWindow) {
  cvWindow
    .querySelector(".window-titlebar")
    .addEventListener("mousedown", () => bringToFront(cvWindow));
}
if (cmdTitlebar) {
  cmdTitlebar.addEventListener("mousedown", () => bringToFront(cmdWindow));
}
if (aboutTitlebar) {
  aboutTitlebar.addEventListener("mousedown", () =>
    bringToFront(aboutWindow)
  );
}

// CV window logic
function openCVWindow() {
  cvWindow.classList.remove("hidden");
  taskCV.classList.remove("hidden");
  bringToFront(cvWindow);
}

// CLOSE: window + taskbar button
function closeCVWindow() {
  cvWindow.classList.add("hidden");
  taskCV.classList.add("hidden");
}

// MINIMIZE: hide window, keep task button
function minimizeCV() {
  cvWindow.classList.add("hidden");
  taskCV.classList.remove("hidden");
}

cvClose.addEventListener("click", closeCVWindow);

let cvIsMaximized = false;
let cvStoredRect = null;

function maximizeCV() {
  if (!cvIsMaximized) {
    const rect = cvWindow.getBoundingClientRect();
    cvStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    cvWindow.style.left = "0px";
    cvWindow.style.top = "0px";
    cvWindow.style.width = "100vw";
    cvWindow.style.height = "calc(100vh - 45px)"; // leave space for taskbar
    cvIsMaximized = true;
    cvMaximize.textContent = "🗗";
  } else if (cvStoredRect) {
    cvWindow.style.left = cvStoredRect.left + "px";
    cvWindow.style.top = cvStoredRect.top + "px";
    cvWindow.style.width = cvStoredRect.width + "px";
    cvWindow.style.height = cvStoredRect.height + "px";
    cvIsMaximized = false;
    cvMaximize.textContent = "▢";
  }
}

cvMaximize.addEventListener("click", maximizeCV);
cvMinimize.addEventListener("click", minimizeCV);

// CV zoom
let cvZoom = 1.0;

function applyCVZoom() {
  cvFrame.style.transform = `scale(${cvZoom})`;
  cvFrame.style.transformOrigin = "top left";
}

cvZoomIn.addEventListener("click", () => {
  cvZoom = Math.min(cvZoom + 0.25, 3);
  applyCVZoom();
});

cvZoomOut.addEventListener("click", () => {
  cvZoom = Math.max(cvZoom - 0.25, 0.5);
  applyCVZoom();
});

applyCVZoom();

// Git confirm
function openGitConfirm() {
  gitConfirmWindow.classList.remove("hidden");
  taskGit.classList.remove("hidden");
  bringToFront(gitConfirmWindow);
}

function minimizeGit() {
  gitConfirmWindow.classList.add("hidden");
}

function closeGitConfirm() {
  gitConfirmWindow.classList.add("hidden");
  taskGit.classList.add("hidden");
}

gitConfirmClose.addEventListener("click", closeGitConfirm);
gitConfirmCancel.addEventListener("click", closeGitConfirm);
gitConfirmYes.addEventListener("click", () => {
  window.open("https://github.com/Andrew-Fernando-15", "_blank");
  closeGitConfirm();
});

// Portfolio confirm
function openPortfolioConfirm() {
  portfolioConfirmWindow.classList.remove("hidden");
  taskPortfolio.classList.remove("hidden");
  bringToFront(portfolioConfirmWindow);
}

function minimizePortfolio() {
  portfolioConfirmWindow.classList.add("hidden");
}

function closePortfolioConfirm() {
  portfolioConfirmWindow.classList.add("hidden");
  taskPortfolio.classList.add("hidden");
}

portfolioConfirmClose.addEventListener("click", closePortfolioConfirm);
portfolioConfirmCancel.addEventListener("click", closePortfolioConfirm);
portfolioConfirmYes.addEventListener("click", () => {
  window.open(
    "https://andrew-fernando-15.github.io/portfolio-practice/index.html",
    "_blank"
  );
  closePortfolioConfirm();
});

// Instagram confirm
function openInstagramConfirm() {
  instagramConfirmWindow.classList.remove("hidden");
  taskInstagram.classList.remove("hidden");
  bringToFront(instagramConfirmWindow);
}

function minimizeInstagram() {
  instagramConfirmWindow.classList.add("hidden");
}

function closeInstagramConfirm() {
  instagramConfirmWindow.classList.add("hidden");
  taskInstagram.classList.add("hidden");
}

instagramConfirmClose.addEventListener("click", closeInstagramConfirm);
instagramConfirmCancel.addEventListener("click", closeInstagramConfirm);
instagramConfirmYes.addEventListener("click", () => {
  window.open("https://instagram.com/andrew__263739", "_blank");
  closeInstagramConfirm();
});

// LinkedIn confirm
function openLinkedinConfirm() {
  linkedinConfirmWindow.classList.remove("hidden");
  taskLinkedin.classList.remove("hidden");
  bringToFront(linkedinConfirmWindow);
}

function minimizeLinkedin() {
  linkedinConfirmWindow.classList.add("hidden");
}

function closeLinkedinConfirm() {
  linkedinConfirmWindow.classList.add("hidden");
  taskLinkedin.classList.add("hidden");
}

linkedinConfirmClose.addEventListener("click", closeLinkedinConfirm);
linkedinConfirmCancel.addEventListener("click", closeLinkedinConfirm);
linkedinConfirmYes.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/andrew-fernando-b6362a346/",
    "_blank"
  );
  closeLinkedinConfirm();
});

// Contact confirm
function openContactConfirm() {
  contactConfirmWindow.classList.remove("hidden");
  if (taskContact) taskContact.classList.remove("hidden");
  bringToFront(contactConfirmWindow);
}

function closeContactConfirm() {
  contactConfirmWindow.classList.add("hidden");
  if (taskContact) taskContact.classList.add("hidden");
}

if (contactConfirmClose)
  contactConfirmClose.addEventListener("click", closeContactConfirm);

// ===================
// ABOUT – open/close + maximize/restore
// ===================

let aboutIsMaximized = false;
let aboutStoredRect = null;

function openAboutWindow() {
  if (!aboutWindow) return;

  aboutWindow.style.width = "";
  aboutWindow.style.height = "";
  aboutWindow.style.left = "160px";
  aboutWindow.style.top = "80px";

  aboutWindow.classList.remove("hidden");
  if (taskAbout) taskAbout.classList.remove("hidden");
  bringToFront(aboutWindow);
}

function closeAboutWindow() {
  if (!aboutWindow) return;
  aboutWindow.classList.add("hidden");
  if (taskAbout) taskAbout.classList.add("hidden");
}

function minimizeAbout() {
  if (!aboutWindow) return;
  aboutWindow.classList.add("hidden");
}

function maximizeAbout() {
  if (!aboutWindow) return;

  if (!aboutIsMaximized) {
    const rect = aboutWindow.getBoundingClientRect();
    aboutStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    aboutWindow.style.left = "0px";
    aboutWindow.style.top = "0px";
    aboutWindow.style.width = "100vw";
    aboutWindow.style.height = "100vh";
    aboutIsMaximized = true;
    aboutMaximize.textContent = "🗗";
  } else if (aboutStoredRect) {
    aboutWindow.style.left = aboutStoredRect.left + "px";
    aboutWindow.style.top = aboutStoredRect.top + "px";
    aboutWindow.style.width = aboutStoredRect.width + "px";
    aboutWindow.style.height = aboutStoredRect.height + "px";
    aboutIsMaximized = false;
    aboutMaximize.textContent = "▢";
  }
}

if (aboutClose) aboutClose.addEventListener("click", closeAboutWindow);
if (aboutMinimize) aboutMinimize.addEventListener("click", minimizeAbout);
if (aboutMaximize) aboutMaximize.addEventListener("click", maximizeAbout);

// Taskbar About button
if (taskAbout) {
  taskAbout.addEventListener("click", () => {
    const hidden = aboutWindow.classList.contains("hidden");
    if (hidden) openAboutWindow();
    else minimizeAbout();
  });
}

// Desktop icons click
if (iconGit) iconGit.addEventListener("click", openGitConfirm);
if (iconPortfolio) iconPortfolio.addEventListener("click", openPortfolioConfirm);
if (iconCV) iconCV.addEventListener("click", openCVWindow);
if (iconFlower) iconFlower.addEventListener("click", openFlowerConfirm);
if (iconAbout) iconAbout.addEventListener("click", openAboutWindow);

// Taskbar CV button
taskCV.addEventListener("click", () => {
  const isHidden = cvWindow.classList.contains("hidden");
  if (isHidden) openCVWindow();
  else minimizeCV();
});

// Taskbar popup buttons
if (taskGit) {
  taskGit.addEventListener("click", () => {
    const isHidden = gitConfirmWindow.classList.contains("hidden");
    if (isHidden) openGitConfirm();
    else minimizeGit();
  });
}
if (taskPortfolio) {
  taskPortfolio.addEventListener("click", () => {
    const isHidden = portfolioConfirmWindow.classList.contains("hidden");
    if (isHidden) openPortfolioConfirm();
    else minimizePortfolio();
  });
}
if (taskInstagram) {
  taskInstagram.addEventListener("click", () => {
    const isHidden = instagramConfirmWindow.classList.contains("hidden");
    if (isHidden) openInstagramConfirm();
    else minimizeInstagram();
  });
}
if (taskLinkedin) {
  taskLinkedin.addEventListener("click", () => {
    const isHidden = linkedinConfirmWindow.classList.contains("hidden");
    if (isHidden) openLinkedinConfirm();
    else minimizeLinkedin();
  });
}
if (taskContact) {
  taskContact.addEventListener("click", () => {
    if (contactConfirmWindow.classList.contains("hidden")) openContactConfirm();
    else bringToFront(contactConfirmWindow);
  });
}

// CMD taskbar button
if (taskCmd) {
  taskCmd.addEventListener("click", () => {
    const isHidden = cmdWindow.classList.contains("hidden");
    if (isHidden) {
      openCmdWindow();
    } else {
      cmdWindow.classList.add("hidden");
    }
  });
}

// Start menu
function toggleStartMenu() {
  startMenu.classList.toggle("hidden");
}

startButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleStartMenu();
});

document.addEventListener("click", () => {
  startMenu.classList.add("hidden");
});

startMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Start menu items
const startGithub = document.getElementById("start-github");
const startPortfolio1 = document.getElementById("start-portfolio1");
const startInstagram = document.getElementById("start-instagram");
const startLinkedin = document.getElementById("start-linkedin");
const startAboutBtn = document.getElementById("start-about");
const startLogoff = document.getElementById("start-logoff");
const startRestart = document.getElementById("start-restart");
const startShutdown = document.getElementById("start-shutdown");
const startFlower   = document.getElementById("start-flower");

if (startGithub) {
  startGithub.addEventListener("click", (event) => {
    event.stopPropagation();
    openGitConfirm();
  });
}
if (startPortfolio1) {
  startPortfolio1.addEventListener("click", (event) => {
    event.stopPropagation();
    openPortfolioConfirm();
  });
}
if (startInstagram) {
  startInstagram.addEventListener("click", (event) => {
    event.stopPropagation();
    openInstagramConfirm();
  });
}
if (startLinkedin) {
  startLinkedin.addEventListener("click", (event) => {
    event.stopPropagation();
    openLinkedinConfirm();
  });
}
if (startAboutBtn) {
  startAboutBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openAboutWindow();
    startMenu.classList.add("hidden");
  });

  if (startFlower) {
  startFlower.addEventListener("click", (event) => {
    event.stopPropagation();           // so Start menu doesn’t close first
    startMenu.classList.add("hidden"); // hide Start menu
    openFlowerConfirm();               // reuse existing popup
  });
}

}

// Start menu → Contact Me opens Contact popup
if (startContact) {
  startContact.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openContactConfirm();
  });
}
if (startLogoff) {
  startLogoff.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
  });
}

if (startRestart) {
  startRestart.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
    if (popupRestart) popupRestart.click();
  });
}
if (startShutdown) {
  startShutdown.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
    if (popupShutdown) popupShutdown.click();
  });
}


// ===================
// CMD IMPLEMENTATION
// ===================

let gameState = "none";
let activeGame = null;          // which mini-game is running
let currentPromptInput = null;
let cmdHasBooted = false;

// List of game starter functions
const gameStarters = [
  startKnockGame1,
  startKnockGame2,
  startKnockGame3
];

// Clicking anywhere in CMD body refocuses prompt
const cmdBody = document.querySelector(".cmd-body");
if (cmdBody) {
  cmdBody.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("cmd-prompt-input")) return;
    focusCurrentPrompt();
  });
}

const flirtLines = [
  "Are you gravity? Because every time you walk in, you pull my attention your way.",
  "Are you a sunrise? Because talking to you feels like the start of something bright.",
  "Are you a playlist? Because somehow you match every mood I did not know I had.",
  "Are you a spoiler alert? Because one look at you and my heart already knows the ending.",
  "Are you a good book? Because I keep wanting just one more chapter with you.",
  "Are you WiFi? Because the moment youre near, everything suddenly connects.",
  "Are you a checkpoint? Because when you smile, life feels like it just saved my progress.",
  "Are you a cheat code? Because things feel a little too good when youre around.",
  "Are you a star? Because even from a distance, youre hard not to notice.",
  "Are you a bug fix? Because since you showed up, everything makes a lot more sense.",
];

const jokeLines = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "How many programmers does it take to change a light bulb? None - that's a hardware problem.",
  "Why don't programmers like nature? It has too many bugs.",
  "Debugging: being the detective in a crime movie where you are also the murderer.",
  "Why was the computer cold? It left its Windows open.",
  "What do you get when you cross a computer and a lifeguard? A screensaver.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? He was outstanding in his field.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "Why did the math book look sad? It had too many problems.",
  "Why can't you trust stairs? They're always up to something.",
  "What do you call fake spaghetti? An impasta.",
  "Why was the broom late? It swept in.",
  "Why don't scientists trust atoms? Because they make up everything."
];

function applyCmdColor() {
  if (!cmdWindow) return;
  cmdWindow.style.color = "#ffffff";
  if (cmdOutput) cmdOutput.style.color = "#ffffff";
}
applyCmdColor();

function appendCmdLine(text) {
  const line = document.createElement("div");
  line.textContent = text;
  cmdOutput.appendChild(line);
  cmdOutput.scrollTop = cmdOutput.scrollHeight;
  return line;
}

function appendBlankLine() {
  appendCmdLine("");
}

// Focus helper
function focusCurrentPrompt() {
  if (!currentPromptInput) return;
  currentPromptInput.focus();
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(currentPromptInput);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

// Create interactive "C:\> " prompt
function appendPrompt() {
  const line = document.createElement("div");
  const prefix = document.createElement("span");
  prefix.className = "cmd-prompt-prefix";
  prefix.textContent = "C:\\>";
  const inputSpan = document.createElement("span");
  inputSpan.className = "cmd-prompt-input";
  inputSpan.contentEditable = true;
  line.appendChild(prefix);
  line.appendChild(inputSpan);
  cmdOutput.appendChild(line);
  cmdOutput.scrollTop = cmdOutput.scrollHeight;

  currentPromptInput = inputSpan;
  focusCurrentPrompt();

  inputSpan.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitCurrentCommand();
      return;
    }
  });

  return inputSpan;
}

// Boot text + first prompt
function resetCmdBoot() {
  cmdOutput.innerHTML = "";
  appendCmdLine("AndrewXP v2.9 1 Jan");
  appendCmdLine("Inspired by Mitchivin");
  appendBlankLine();
  appendCmdLine("type Help for list of commands avalable");
  appendCmdLine("press ENTER/RETURN to execute command");
  appendCmdLine("for i-cursor press Tab");
  appendBlankLine();
  appendPrompt();
  gameState = "none";
  activeGame = null;
}

// Freeze current prompt line and handle it
function submitCurrentCommand() {
  if (!currentPromptInput) return;
  const commandRaw = currentPromptInput.textContent.trim();
  const lineDiv = currentPromptInput.parentElement;

  currentPromptInput.remove();
  const frozenSpan = document.createElement("span");
  frozenSpan.textContent = commandRaw;
  lineDiv.appendChild(frozenSpan);

  currentPromptInput = null;

  handleCommand(commandRaw);
}

// Command handler
function handleCommand(raw) {
  const input = raw.trim();
  const lower = input.toLowerCase();

  // If we are inside a game, route input there
  if (activeGame === "knock1") {
    handleKnockGame1Step(lower);
    return;
  }
  if (activeGame === "knock2") {
    handleKnockGame2Step(lower);
    return;
  }
  if (activeGame === "knock3") {
    handleKnockGame3Step(lower);
    return;
  }

  switch (lower) {
    case "":
      appendPrompt();
      break;
    case "help":
      printHelp();
      appendPrompt();
      break;
    case "clear":
      cmdOutput.innerHTML = "";
      appendPrompt();
      break;
    case "exit":
      closeCmdWindow();
      break;
    case "version":
      appendCmdLine("AndrewXP Command Prompt v2.9");
      appendPrompt();
      break;
    case "time":
      printTime();
      appendPrompt();
      break;
    case "date":
      printDate();
      appendPrompt();
      break;
    case "about":
      printAboutCmd();
      appendPrompt();
      break;
    case "joke":
      printJoke();
      appendPrompt();
      break;
    case "game":
    case "knock":
      startRandomGame();
      break;
    case "open github":
      appendCmdLine("Opening GitHub in a new tab...");
      window.open(
        "https://github.com/Andrew-Fernando-15/Portfolio-Win-Xp-",
        "_blank"
      );
      appendPrompt();
      break;
    case "open portfolio":
      appendCmdLine("Opening Portfolio in a new tab...");
      window.open(
        "https://andrew-fernando-15.github.io/portfolio-practice/index.html",
        "_blank"
      );
      appendPrompt();
      break;

    // Hidden fun commands
    case "flirt":
      printFlirtLine();
      appendPrompt();
      break;
    case "rickroll":
      appendCmdLine("Never gonna give you up...");
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      appendPrompt();
      break;
    case "matrix":
      appendCmdLine(
        "Unfortunately, your GPU is still booting in another universe."
      );
      appendPrompt();
      break;

    default:
      appendCmdLine(
        `"${input}" is not recognized as an internal or external command.`
      );
      appendCmdLine("Type help for the list of available commands.");
      appendPrompt();
      break;
  }
}

// help output
function printHelp() {
  appendCmdLine("Available commands:");
  appendCmdLine(" help           - Show this help message");
  appendCmdLine(" clear          - Clear the screen");
  appendCmdLine(" exit           - Close the Command Prompt");
  appendCmdLine(" version        - Show version information");
  appendCmdLine(" time           - Show the current time");
  appendCmdLine(" date           - Show the current date");
  appendCmdLine(" about          - About this mini OS");
  appendCmdLine(" joke           - Tell a short joke");
  appendCmdLine(" game / knock   - Start a random mini game");
  appendCmdLine(" open github    - Open GitHub profile");
  appendCmdLine(" open portfolio - Open portfolio website");
  appendBlankLine();
}

function printTime() {
  const now = new Date();
  appendCmdLine("Current time: " + now.toLocaleTimeString());
}

function printDate() {
  const now = new Date();
  appendCmdLine("Current date: " + now.toLocaleDateString());
}

function printAboutCmd() {
  appendCmdLine(
    "This Command Prompt is part of AndrewXP, a Windows XP-style portfolio desktop."
  );
  appendCmdLine(
    "Built by Andrew Fernando to showcase front-end, JS, and creative coding skills."
  );
}

function printJoke() {
  const idx = Math.floor(Math.random() * jokeLines.length);
  appendCmdLine(jokeLines[idx]);
}

function printFlirtLine() {
  const idx = Math.floor(Math.random() * flirtLines.length);
  appendCmdLine(flirtLines[idx]);
}

// ---------- GAME 1: Knock-knock ("ba") ----------
function startKnockGame1() {
  activeGame = "knock1";
  gameState = "knock1-1";
  appendCmdLine("Knock, knock.");
  appendPrompt();
}

function handleKnockGame1Step(lower) {
  if (gameState === "knock1-1") {
    if (lower === "who's there" || lower === "whos there") {
      appendCmdLine("ba");
      gameState = "knock1-2";
      appendPrompt();
    } else {
      appendCmdLine('You were supposed to say "Who\'s there?"');
      gameState = "none";
      activeGame = null;
      appendPrompt();
    }
  } else if (gameState === "knock1-2") {
    if (lower === "ba who" || lower === "ba who?") {
      appendCmdLine("That's what my mom's gonna call you.");
    } else {
      appendCmdLine('You were supposed to say "ba who?"');
    }
    gameState = "none";
    activeGame = null;
    appendPrompt();
  }
}

// ---------- GAME 2: Knock-knock ("Hawaii") ----------
function startKnockGame2() {
  activeGame = "knock2";
  gameState = "knock2-1";
  appendCmdLine("Knock, knock.");
  appendPrompt();
}

function handleKnockGame2Step(lower) {
  if (gameState === "knock2-1") {
    if (lower === "who's there" || lower === "whos there") {
      appendCmdLine("Hawaii");
      gameState = "knock2-2";
      appendPrompt();
    } else {
      appendCmdLine('You were supposed to say "Who\'s there?"');
      gameState = "none";
      activeGame = null;
      appendPrompt();
    }
  } else if (gameState === "knock2-2") {
    if (lower === "hawaii who" || lower === "hawaii who?") {
      appendCmdLine("I am fine, how are you?");
    } else {
      appendCmdLine('You were supposed to say "Hawaii who?"');
    }
    gameState = "none";
    activeGame = null;
    appendPrompt();
  }
}

// ---------- GAME 3: Knock-knock ("Achu") ----------
function startKnockGame3() {
  activeGame = "knock3";
  gameState = "knock3-1";
  appendCmdLine("Knock, knock.");
  appendPrompt();
}

function handleKnockGame3Step(lower) {
  if (gameState === "knock3-1") {
    if (lower === "who's there" || lower === "whos there") {
      appendCmdLine("Achu");
      gameState = "knock3-2";
      appendPrompt();
    } else {
      appendCmdLine('You were supposed to say "Who\'s there?"');
      gameState = "none";
      activeGame = null;
      appendPrompt();
    }
  } else if (gameState === "knock3-2") {
    if (lower === "achu who" || lower === "achu who?") {
      appendCmdLine("God bless you!!");
    } else {
      appendCmdLine('You were supposed to say "Achu who?"');
    }
    gameState = "none";
    activeGame = null;
    appendPrompt();
  }
}

// Random game launcher
function startRandomGame() {
  if (activeGame) {
    appendCmdLine("Finish the current game first.");
    appendPrompt();
    return;
  }
  const idx = Math.floor(Math.random() * gameStarters.length);
  const startFn = gameStarters[idx];
  startFn();
}

// CMD window open/close
function openCmdWindow() {
  if (!cmdWindow) return;
  cmdWindow.classList.remove("hidden");
  taskCmd.classList.remove("hidden");
  bringToFront(cmdWindow);
  if (!cmdHasBooted) {
    cmdHasBooted = true;
    resetCmdBoot();
  } else if (!currentPromptInput) {
    appendPrompt();
  } else {
    focusCurrentPrompt();
  }
}

function closeCmdWindow() {
  if (!cmdWindow) return;
  cmdWindow.classList.add("hidden");
  taskCmd.classList.add("hidden");
}

if (cmdClose) cmdClose.addEventListener("click", closeCmdWindow);
if (cmdMinimize)
  cmdMinimize.addEventListener("click", () =>
    cmdWindow.classList.add("hidden")
  );

let cmdIsMaximized = false;
let cmdStoredRect = null;

function maximizeCmd() {
  if (!cmdWindow) return;
  if (!cmdIsMaximized) {
    const rect = cmdWindow.getBoundingClientRect();
    cmdStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    cmdWindow.style.left = "0px";
    cmdWindow.style.top = "0px";
    cmdWindow.style.width = "100vw";
    cmdWindow.style.height = "100vh";
    cmdIsMaximized = true;
    if (cmdMaximize) cmdMaximize.textContent = "🗗";
  } else if (cmdStoredRect) {
    cmdWindow.style.left = cmdStoredRect.left + "px";
    cmdWindow.style.top = cmdStoredRect.top + "px";
    cmdWindow.style.width = cmdStoredRect.width + "px";
    cmdWindow.style.height = cmdStoredRect.height + "px";
    cmdIsMaximized = false;
    if (cmdMaximize) cmdMaximize.textContent = "▢";
  }
}

if (cmdMaximize) cmdMaximize.addEventListener("click", maximizeCmd);

// Start menu open CMD
if (startCmd) {
  startCmd.addEventListener("click", (event) => {
    event.stopPropagation();
    openCmdWindow();
    startMenu.classList.add("hidden");
  });
}

// Tray date/time
function updateTray() {
  const now = new Date();
  if (trayDate) {
    trayDate.textContent = now.toLocaleDateString();
  }
  if (trayTime) {
    trayTime.textContent = now.toLocaleTimeString();
  }
}

updateTray();
setInterval(updateTray, 1000);

// Flower window drag + behavior
if (flowerConfirmWindow && flowerConfirmTitlebar) {
  makeWindowDraggable(flowerConfirmWindow, flowerConfirmTitlebar);
}
if (flowerConfirmTitlebar) {
  flowerConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(flowerConfirmWindow)
  );
}

function openFlowerConfirm() {
  flowerConfirmWindow.classList.remove("hidden");
  if (taskFlower) taskFlower.classList.remove("hidden");
  bringToFront(flowerConfirmWindow);
}

function minimizeFlower() {
  flowerConfirmWindow.classList.add("hidden");
}

function closeFlowerConfirm() {
  flowerConfirmWindow.classList.add("hidden");
  if (taskFlower) taskFlower.classList.add("hidden");
}

if (flowerConfirmClose)
  flowerConfirmClose.addEventListener("click", closeFlowerConfirm);
if (flowerConfirmCancel)
  flowerConfirmCancel.addEventListener("click", closeFlowerConfirm);
if (flowerConfirmYes) {
  flowerConfirmYes.addEventListener("click", () => {
    window.open(
      "https://andrew-fernando-15.github.io/Click-to-grow-flower/index.html",
      "_blank"
    );
    closeFlowerConfirm();
  });
}

if (taskFlower) {
  taskFlower.addEventListener("click", () => {
    const isHidden = flowerConfirmWindow.classList.contains("hidden");
    if (isHidden) openFlowerConfirm();
    else minimizeFlower();
  });
}
