document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingText = document.getElementById("loading-text");
  const mainIcon = document.querySelector(".main-icon");
  const subIcons = document.querySelectorAll(".sub-icons i");
  const designerText = document.getElementById("designer-text");

  function showElement(element, delay = 0) {
    setTimeout(() => {
      element.classList.remove("hidden");
      element.classList.add("fall");
    }, delay);
  }

  // same timing as your old project
  showElement(loadingText, 0);
  showElement(mainIcon, 800);
  subIcons.forEach((icon, idx) => {
    showElement(icon, 1600 + idx * 400);
  });
  showElement(designerText, 2800);

  // fade out and go to lock screen
  setTimeout(() => {
    loadingScreen.style.transition = "opacity 0.7s ease";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "boot.html"; // lock screen in same folder
    }, 700);
  }, 4000);
});
