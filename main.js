var sheBangs = document.getElementById("bangsAudio");
var sheMoves = document.getElementById("movesAudio");
var noRegrets = document.getElementById("noRegretsAudio")
var portrait = document.getElementById("hungPortrait")

function playSheBangs() {
    sheBangs.play();
}

function playSheMoves() {
  sheMoves.play();
}
function playNoRegrets() {
  noRegrets.play();
}

portrait.addEventListener("mouseover", () => playNoRegrets());
