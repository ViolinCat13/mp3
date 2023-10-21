'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "MIG-25",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/01 - Floating Door - MIG-25.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Old Engineer",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/02 - Floating Door - Old Engineer.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "On the Run",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/03 - Floating Door - On the Run.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Molten Steel",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/04 - Floating Door - Molten Steel.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Impact",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/05 - Floating Door - Impact.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Phoenix Carpenter",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/06 - Floating Door - Phoenix Carpenter.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Prison of Ice",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/07 - Floating Door - Prison of Ice.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Psuedo",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/08 - Floating Door - Pseudo.mp3",
  },
  {
    backgroundImage: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    posterUrl: "./assets/images/Chewing Glass - Severed Steel OST 1.png",
    title: "Pugachev's Cobra",
    album: "Chewing Glass",
    year: 2021,
    artist: "Floating Door",
    musicPath: "./assets/music/ss-ost/09 - Floating Door - Pugachev_s Cobra.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();

    // Check if there is a next song and auto-play it
    if (currentMusic < musicData.length - 1) {
      currentMusic++;
      changePlayerInfo();
      changePlaylistItem();
      playMusic();
    }
  }
}


/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
