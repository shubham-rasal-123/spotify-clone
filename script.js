<<<<<<< HEAD
<<<<<<< HEAD
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
=======
console.log("Welcome to Spotify");

=======
>>>>>>> 9ba8b19 (modified files to new code changes)
// Initialize the Variables
let songIndex = 0;
const audioElement = document.getElementById("audioElement");
audioElement.src = "songs/1.mp3";
audioElement.preload = "auto";

const masterPlay = document.getElementById("masterPlay");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const myProgressBar = document.getElementById("myProgressBar");
const gif = document.getElementById("gif");
const masterSongName = document.getElementById("masterSongName");
const songItems = Array.from(document.getElementsByClassName("songItem"));

const songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

const setButtonState = (button, isPlaying) => {
  button.textContent = isPlaying ? "❚❚" : "▶";
  button.setAttribute("aria-label", isPlaying ? "Pause song" : "Play song");
};

const updateMasterPlayIcon = (isPlaying) => {
  setButtonState(masterPlay, isPlaying);
};

const loadSong = (index) => {
  songIndex = index;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.textContent = songs[songIndex].songName;
  audioElement.currentTime = 0;
  myProgressBar.value = 0;
  audioElement.load();
};

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      setButtonState(element, false);
    },
  );
};

const playAudio = async () => {
  try {
    await audioElement.play();
  } catch (error) {
    console.error("Audio playback failed:", error);
  }
};

songItems.forEach((element, i) => {
  const img = element.getElementsByTagName("img")[0];
  const songName = element.getElementsByClassName("songName")[0];

  img.src = songs[i].coverPath;
  img.alt = songs[i].songName;
  songName.textContent = songs[i].songName;
});

masterPlay.addEventListener("click", async () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    await playAudio();
    updateMasterPlayIcon(true);
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    updateMasterPlayIcon(false);
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  if (!audioElement.duration) return;
  const progress = Math.floor(
    (audioElement.currentTime / audioElement.duration) * 100,
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("input", () => {
  if (!audioElement.duration) return;
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", async (e) => {
      makeAllPlays();
      const clickedButton = e.currentTarget;
      const clickedIndex = Number(clickedButton.id);

      setButtonState(clickedButton, true);
      loadSong(clickedIndex);
      await playAudio();
      updateMasterPlayIcon(true);
      gif.style.opacity = 1;
    });
  },
);

next.addEventListener("click", async () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  await playAudio();
  updateMasterPlayIcon(true);
  gif.style.opacity = 1;
  makeAllPlays();

  const activeButton = document.getElementById(String(songIndex));
  if (activeButton) {
    setButtonState(activeButton, true);
  }
});

previous.addEventListener("click", async () => {
  songIndex = songIndex <= 0 ? 0 : songIndex - 1;
  loadSong(songIndex);
  await playAudio();
  updateMasterPlayIcon(true);
  gif.style.opacity = 1;
  makeAllPlays();

  const activeButton = document.getElementById(String(songIndex));
  if (activeButton) {
    setButtonState(activeButton, true);
  }
});

audioElement.addEventListener("ended", async () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  await playAudio();
  updateMasterPlayIcon(true);
  gif.style.opacity = 1;
  makeAllPlays();

  const activeButton = document.getElementById(String(songIndex));
  if (activeButton) {
    setButtonState(activeButton, true);
  }
});

audioElement.addEventListener("play", () => {
  updateMasterPlayIcon(true);
  gif.style.opacity = 1;
});

audioElement.addEventListener("pause", () => {
  updateMasterPlayIcon(false);
  gif.style.opacity = 0;
});

audioElement.addEventListener("error", (event) => {
  console.error("Audio loading error:", event);
});
>>>>>>> afab7d8 (added script js file)
