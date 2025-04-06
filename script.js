// script.js

let score = 0;

function updateScore() {
  document.getElementById("score").textContent = score;
  updateProgress();
  updateAchievements();
}

function addPoint() {
  score++;
  updateScore();
}

function resetScore() {
  if (confirm("Tem certeza que quer resetar seus pontos?")) {
    score = 0;
    updateScore();
  }
}

function updateProgress() {
  const progress = document.getElementById("progressBar");
  progress.value = Math.min(score, 100);
}

function updateAchievements() {
  const achievements = document.querySelectorAll("#achievements li");

  achievements[0].classList.toggle("locked", score < 10);
  achievements[1].classList.toggle("locked", score < 50);
  achievements[2].classList.toggle("locked", score < 100);
}

function showTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(`${tabName}-tab`).classList.add("active");
}

// Inicializa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  updateScore();
  showTab("main");
});
