const container = document.getElementById("container");
const black = document.getElementById("black");
const eraser = document.getElementById("eraser");
const red = document.getElementById("red");
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

    black.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.classList.remove("white", "red");
        cell.classList.add("black");
      });
    });

    eraser.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.classList.remove("black", "red");

        cell.classList.add("white");
      });
    });

    red.addEventListener("click", () => {
      cell.addEventListener("mouseover", () => {
        cell.classList.remove("white", "black");

        cell.classList.add("red");
      });
    });
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
