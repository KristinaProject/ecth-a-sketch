const container = document.getElementById("container");
const btns = document.getElementsByClassName('btns');
const allWhiteBtn = document.getElementById("eraseAll");
const rangeValue = document.getElementById("sizeRange");
const rangeShowValue = document.getElementById("valueDiv");

function createGrid(size) {
  const boardSize = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    container.append(cell);

    Array.from(btns).forEach((button) => {
      button.addEventListener('click', () => {
        cell.addEventListener('mouseover', () => {
          cell.classList.remove('black', 'white', 'red');
          if(button.id === 'eraser'){
            cell.classList.add('white');
          }
          cell.classList.add(button.id);
        })
      })
    })
  }
}

createGrid(4);

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

allWhiteBtn.addEventListener("click", () => {
  createSizeGrid();
});
