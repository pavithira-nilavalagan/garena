const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/free_fire_1.mp4','videos/free_fire_2.mp4','videos/free_fire_3.mp4',];

let index = 0;
nextButton.addEventListener('click',function(){

  index += 1
  video.src = movieList[index];

  if(index === 2){
    index = -1;
  }
})