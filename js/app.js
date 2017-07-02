const vid = document.getElementById("video");
const transcript = document.getElementById('transcript');
var currTime;

function getCurrTime() {
  currTime = vid.currentTime;
  console.log(currTime);
}

function setCurrTime() {
  vid.currentTime = currTime;
}

transcript.addEventListener ('click', () => {
  getCurrTime();
});

document.addEventListener('keypress', () => {
  setCurrTime();
});