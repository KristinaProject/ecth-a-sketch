const container = document.getElementById("container");
const btns = document.getElementsByClassName("btn");
const allWhiteBtn = document.getElementById("eraseAll");
const rangeValue = document.getElementById("sizeRange");
const rangeShowValue = document.getElementById("valueDiv");


function getColor() {
  Array.from(btns).forEach((element) => {
    element.addEventListener('click', () => {
      if(element.id === 'eraser') {
        this.style.backgroundColor = 'white';
      } else if(element.id === 'color'){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randomColor}`;
      } else {
        this.style.backgroundColor = 'black';
      }
    })
  })
}


function createGrid(size) {
  const boardSize = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    container.append(cell);
    cell.addEventListener("mouseover", () => {
      getColor();
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
