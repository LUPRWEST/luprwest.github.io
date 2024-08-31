const imageContainer = document.getElementById('image-container');
const imageElement = document.getElementById('player');
const audioElement = document.getElementById('audio');
    
let isPlaying = false;
    
  imageContainer.addEventListener('click', function() {
  if (isPlaying) {
    // 원래 이미지로 돌아오고 오디오를 멈춤
    imageElement.src = 'https://github.com/LUPRWEST/luprwest.github.io/blob/main/music_off.PNG?raw=true';
    audioElement.pause();
    audioElement.currentTime = 0;
    } else {
      // 다른 이미지로 바뀌고 오디오 재생
      imageElement.src = 'https://github.com/LUPRWEST/luprwest.github.io/blob/main/music_on.PNG?raw=true';
       audioElement.play();
  }
  isPlaying = !isPlaying;
});

