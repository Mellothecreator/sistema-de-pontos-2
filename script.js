
// script.js
let score = 0;
const scoreDisplay = document.getElementById("score");
const progressBar = document.getElementById("progressBar");
const achievementsList = document.getElementById("achievements");

function updateUI() {
  scoreDisplay.textContent = score;
  progressBar.value = score;
  updateAchievements();
}

function addPoint() {
  score++;
  updateUI();
}

function resetScore() {
  if (confirm("Tem certeza que deseja resetar os pontos?")) {
    score = 0;
    updateUI();
  }
}

function updateAchievements() {
  const items = achievementsList.querySelectorAll("li");
  items.forEach((item, index) => {
    const thresholds = [10, 50, 100];
    if (score >= thresholds[index]) {
      item.classList.remove("locked");
      item.innerHTML = item.innerHTML.replace("🔒", "✅");
    } else {
      item.classList.add("locked");
      item.innerHTML = item.innerHTML.replace("✅", "🔒");
    }
  });
}

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(`${tabId}-tab`).classList.add("active");
}

// Inicializa
updateUI();
showTab("main");
