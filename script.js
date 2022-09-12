const container = document.getElementById("container");

function createGrid(size) {
  const boardSize = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    container.append(cell);
    cell.style.backgroundColor = "red";
  }
}

const rangeValue = document.getElementById("sizeRange");
const rangeShowValue = document.getElementById("valueDiv");
function updateValue() {
  rangeShowValue.innerText = rangeValue.value;
}

rangeValue.addEventListener("input", () => {
  createSizeGrid();
});

function createSizeGrid() {
  container.innerHTML = null;

  const value = parseInt(rangeValue.value);
  updateValue();

  createGrid(value);
}

const blackBtn = document.getElementById('black');
const EraseBtn = document.getElementById('eraser');
const colorBtn = document.getElementById('color');
const allWhiteBtn = document.getElementById('eraseAll');

allWhiteBtn.addEventListener('click', () => {
  container.innerHTML = null;
  rangeValue.value = 4;
  updateValue();
})