let playElement = document.getElementById("play");
let prevElement = document.getElementById("prev");
let nextElement = document.getElementById("next");
let audioElement = document.getElementById("myAudio");
let rageElement = document.getElementById("progressBar");
let imgElement = document.querySelector(".imge");

const songs = [{
    songName: "Mood - song",
    filePath: "01_3.m4a",
    coverPath: "cover1.jpg"
}, {
    songName: "Bili Alyesh - song",
    filePath: "01_4.m4a",
    coverPath: "cover2.jfif"
}];

let currentSongIndex = 0;


function loadSong(index) {
    audioElement.src = songs[index].filePath;
    document.querySelector(".title").innerText = songs[index].songName;
    imgElement.src = songs[index].coverPath;
    currentSongIndex = index;
}

loadSong(currentSongIndex);


playElement.addEventListener("click", function playF() {
    if (audioElement.paused) {
        audioElement.play();
        playElement.classList.remove("fa-play");
        playElement.classList.add("fa-pause");
    }else {
        audioElement.pause();
        playElement.classList.remove("fa-pause");
        playElement.classList.add("fa-play");
    }
});


rageElement.addEventListener("input", function() {
    if(audioElement.duration){
        let currentTime = (audioElement.duration / 100) * rageElement.value;
        audioElement.currentTime = currentTime;
    }
});


audioElement.addEventListener('timeupdate', function() {
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        rageElement.value = progress;
    }
});



nextElement.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    playElement.classList.remove("fa-play");
    playElement.classList.add("fa-pause");
});

prevElement.addEventListener("click", function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioElement.currentTime = 0;
    audioElement.play();
    playElement.classList.remove("fa-play");
    playElement.classList.add("fa-pause");
});
