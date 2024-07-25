const audio = document.querySelector("audio");
const musicBtn = document.querySelector(".music-btn");

const controlMusic = () => {
  if (document.querySelector(".music-btn.pause")) {
    musicBtn.classList.remove("pause");
    musicBtn.classList.add("play");
    audio.play();
  } else {
    musicBtn.classList.remove("play");
    musicBtn.classList.add("pause");
    audio.pause();
  }
};
