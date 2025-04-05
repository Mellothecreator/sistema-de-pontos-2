
let points = 0;

function addPoints(amount) {
  points += amount;
  updateDisplay();
}

function resetPoints() {
  points = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('pointsDisplay').textContent = 'Pontos: ' + points;
}
