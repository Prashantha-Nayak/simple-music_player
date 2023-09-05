


let songs = [
   "musics/Hukum Thalaivar Alappara Jailer 128 Kbps.mp3",
   "musics/Naa Ready Leo 128 Kbps.mp3",
   "musics/Jujubee Jailer 128 Kbps.mp3",
   "musics/Rathamaarey Jailer 128 Kbps.mp3",
   "musics/Not Ramaiya Vastavaiya Jawan 128 Kbps.mp3",
   "musics/Apna Bana Le Bhediya 128 Kbps.mp3",
   "musics/Qismat Jo Kantara Hindi 128 Kbps.mp3",
   "musics/Varaha Roopam Daiva Va Rishtam Kantara Hindi 128 Kbps.mp3",
   "musics/Zinda Banda Jawan 128 Kbps.mp3",
   "musics/Horaata.mp3",
   "musics/Sapta-sagaradaache.mp3",
   "musics/ Demon-In-Me.mp3",
  


 ];
 let currentSongIndex = 0;
 function playNext() {
   currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to the first song after the last one
   loadAndPlayCurrentSong();
 }
 
 function playPrevious() {
   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the last song after the first one
   loadAndPlayCurrentSong();
 }
 
 function loadAndPlayCurrentSong() {
   song.src = songs[currentSongIndex];
   song.load(); // Load the new song
   song.play(); // Play the new song
   ctrlIcon.classList.remove("fa-play");
   ctrlIcon.classList.add("fa-pause");
 }

 






 
let progress = document.getElementById("progress");
let song = document.querySelector("audio");
let ctrlIcon = document.getElementById("ctrlIcon");

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
  }
}

song.addEventListener("loadedmetadata", function () {
   progress.max = song.duration;
   progress.value = song.currentTime;
 });
 
 song.addEventListener("timeupdate", function () {
   progress.value = song.currentTime;
 });
 song.addEventListener("timeupdate", function () {
   progress.value = song.currentTime;
 });
 song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to the first song after the last one
  loadAndPlayCurrentSong();
});

 

 progress.addEventListener("input", function () {
   song.currentTime = progress.value;
 });


 document.getElementById("nextButton").addEventListener("click", playNext);
 document.getElementById("previousButton").addEventListener("click", playPrevious);
 song.addEventListener("ended", function () {
   playNext(); // Automatically play the next song when the current one ends
 }); 

 function shuffleSongs() {
  let currentIndex = currentSongIndex; // Store the current song index
  let shuffledIndices = [...Array(songs.length).keys()];

  // Remove the current song index from the shuffled indices
  shuffledIndices.splice(currentIndex, 1);

  // Generate a shuffled array of the remaining song indices
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  // Select a random song from the shuffled indices
  const randomIndex = Math.floor(Math.random() * shuffledIndices.length);
  currentSongIndex = shuffledIndices[randomIndex];

  // Load and play the selected shuffled song
  loadAndPlayCurrentSong();
}
