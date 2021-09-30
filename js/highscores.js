const highScoresList = document.getElementById("highScoresList");
var clearStorage = document.querySelector("#clearStorage");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const clearStor = clearStorage

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
  
clearStorage.addEventListener("click", function() {
    localStorage.clear("highScores");
    highScoresList.innerHTML = "";
    console.log(highScores);
    return;
});
