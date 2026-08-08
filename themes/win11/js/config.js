// =============================
// APP CONFIG / DATA
// Central place for data that used to be scattered inline in homescreen.js.
// Loaded before homescreen.js, so these are plain globals it can use.
// =============================

const fileSystemData = {
  "Desktop": { type: "location", items: ["Screenshot.png", "Project Folder"] },
  "Downloads": { type: "location", items: ["Document.pdf", "Image.jpg", "Archive.zip"] },
  "Documents": { type: "location", items: ["Resume.pdf", "Cover Letter.docx", "Notes.txt"] },
  "Pictures": { type: "location", items: ["Wallpaper1.png", "Wallpaper2.png", "Logo.png"] },
  "Music": { type: "location", items: ["Song1.mp3", "Song2.mp3", "Playlist"] },
  "Videos": { type: "location", items: ["Movie.mp4", "Tutorial.mp4"] },
  "ThisPC": { type: "location", items: ["Desktop", "Documents", "Downloads", "Music", "Pictures", "Videos"] },
  "Network": { type: "location", items: [] }
};

const wallpapers = [
  "../assets/images/img-1.jpg",
  "../assets/images/img-2.jpg",
  "../assets/images/img-3.jpg",
  "../assets/images/img-4.jpg",
  "../assets/images/img-5.jpg"
];

const gameIcons = {
  "tetris-window": "../assets/icons/tetris.jfif",
  "snake-window": "../assets/icons/snake.jpg",
  "connect4-window": "../assets/icons/connect4.jfif",
  "wordattack-window": "../assets/icons/word.png"
};
