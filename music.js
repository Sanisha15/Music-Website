var Mysong = document.getElementById("Mysong");
var icon = document.getElementById("icon");
var songTitleElement = document.getElementById("songTitle");

var songs = [
    {title: "Giorne Theme", url: "media/Giorno theme.mp3"},
    {title: "Empty Dreams", url: "media/M500001khJxi223cL1.mp3"},
    {title: "Dream Wave", url: "media/DREAM_WAVE.mpeg"},
    {title: "Wake Up" , url:"media/wakeupsong.mpeg"}
    // Add more song URLs as needed
];

var currentSongIndex = 0;

icon.onclick = function () {
    togglePlayPause();
}

function togglePlayPause() {
    if (Mysong.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function playSong() {
    Mysong.play();
    icon.src = "media/pause-button-icon.png";
}

function pauseSong() {
    Mysong.pause();
    icon.src = "media/play-button-icon.png";
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadAndPlayCurrentSong();
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadAndPlayCurrentSong();
}

function loadAndPlayCurrentSong() {
    Mysong.src = songs[currentSongIndex].url;
    songTitleElement.innerText = songs[currentSongIndex].title;
    playSong();
}
