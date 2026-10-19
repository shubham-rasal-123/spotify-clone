let songIndex = 0;
const audioElement = document.getElementById("audioElement");
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
    songName: "DEAF KEV - Invincible [NCS Release]",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji - Heroes Tonight",
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

const setButtonState = (button, isPlaying) => {
  button.textContent = isPlaying ? "❚❚" : "▶";
  button.setAttribute("aria-label", isPlaying ? "Pause song" : "Play song");
};

const updatePlayState = (isPlaying) => {
  setButtonState(masterPlay, isPlaying);
  gif.style.opacity = isPlaying ? "1" : "0";
};

const loadSong = (index) => {
  songIndex = index;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.textContent = songs[songIndex].songName;
  myProgressBar.value = 0;
  audioElement.load();
};

const setActiveTrackButton = () => {
  songItems.forEach((item, index) => {
    const button = item.querySelector(".songItemPlay");
    setButtonState(button, index === songIndex && !audioElement.paused);
  });
};

const playAudio = async () => {
  try {
    await audioElement.play();
  } catch (error) {
    console.error("Audio playback failed:", error);
    updatePlayState(false);
    setActiveTrackButton();
  }
};

songItems.forEach((item, index) => {
  const song = songs[index];
  const image = item.querySelector("img");
  const name = item.querySelector(".songName");

  image.src = song.coverPath;
  image.alt = song.songName;
  name.textContent = song.songName;

  item.querySelector(".songItemPlay").addEventListener("click", async () => {
    if (songIndex === index && !audioElement.paused) {
      audioElement.pause();
      return;
    }

    loadSong(index);
    await playAudio();
  });
});

masterPlay.addEventListener("click", async () => {
  if (audioElement.paused) {
    await playAudio();
  } else {
    audioElement.pause();
  }
});

myProgressBar.addEventListener("input", () => {
  if (Number.isFinite(audioElement.duration) && audioElement.duration > 0) {
    audioElement.currentTime =
      (myProgressBar.value / 100) * audioElement.duration;
  }
});

audioElement.addEventListener("timeupdate", () => {
  if (Number.isFinite(audioElement.duration) && audioElement.duration > 0) {
    myProgressBar.value =
      (audioElement.currentTime / audioElement.duration) * 100;
  }
});

audioElement.addEventListener("play", () => {
  updatePlayState(true);
  setActiveTrackButton();
});

audioElement.addEventListener("pause", () => {
  updatePlayState(false);
  setActiveTrackButton();
});

const playTrack = async (index) => {
  loadSong(index);
  await playAudio();
};

next.addEventListener("click", () => {
  void playTrack((songIndex + 1) % songs.length);
});

previous.addEventListener("click", () => {
  void playTrack((songIndex - 1 + songs.length) % songs.length);
});

audioElement.addEventListener("ended", () => {
  void playTrack((songIndex + 1) % songs.length);
});

loadSong(songIndex);
