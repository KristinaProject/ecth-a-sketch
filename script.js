const container = document.getElementById("container");

function createGrid(size) {
  const boardSize = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    container.append(cell);
    cell.style.background = "red";
  }
}

const rangeValue = document.getElementById('sizeRange');
const rangeShowValue = document.getElementById('valueDiv');
function updateValue() {
  return rangeShowValue.innerText = rangeValue.value;
}

rangeValue.addEventListener('input', () =>{updateValue()} );