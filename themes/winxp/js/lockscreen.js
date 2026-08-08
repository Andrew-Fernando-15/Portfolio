const userTile = document.getElementById("user-tile");
const powerButton = document.getElementById("power-button");
const lockScreen = document.getElementById("lock-screen");

// Paths
const DESKTOP_PATH = "homescreen.html";   // final desktop page
const POWER_PATH = "tricked.html";    // power off page

// When user clicks the Administrator tile:
userTile.addEventListener("click", () => {
  // Show welcome.png as full-screen background
  lockScreen.style.backgroundImage = 'url("assets/images/welcome-xp.png")';

  // Optionally remove the tile and power controls while welcome shows
  userTile.style.display = "none";
  if (powerButton) {
    powerButton.closest(".power-area").style.display = "none";
  }

  // After 2 seconds, go to desktop
  setTimeout(() => {
    window.location.href = DESKTOP_PATH;
  }, 2000);
});

// Power button -> Tricked.html
powerButton.addEventListener("click", (e) => {
  e.stopPropagation();
  window.location.href = POWER_PATH;
});
