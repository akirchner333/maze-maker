// Generating the maze
const mazeDiv = document.getElementById("maze");

for(var i = 0; i < height; i++){
  const row = document.createElement("div");
  row.classList.add("row");

  for(var j = 0; j < width; j++){
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");

    const cell = cells[j + i * width];
    if((cell & 1) === 0){
      cellDiv.classList.add("north");
    }
    if((cell & 2) === 0){
      cellDiv.classList.add("east");
    }

    row.appendChild(cellDiv);
  }
  mazeDiv.appendChild(row);
}

// Switching maze formats
const textMaze = document.getElementById("text-maze");
const cssMaze = document.getElementById("css-maze");
const canvasMaze = document.getElementById("canvas-maze");
let canvasVisible = false;

document.getElementById("css-button").checked = true;

document.getElementById("css-button").onclick = (e) => {
  textMaze.setAttribute("class", "hide");
  cssMaze.setAttribute("class", "");
  canvasMaze.setAttribute("class", "hide");
  canvasVisible = false;
};

document.getElementById("text-button").onclick = (e) => {
  textMaze.setAttribute("class", "");
  cssMaze.setAttribute("class", "hide");
  canvasMaze.setAttribute("class", "hide");
  canvasVisible = false;
};

document.getElementById("canvas-button").onclick = (e) => {
  textMaze.setAttribute("class", "hide");
  cssMaze.setAttribute("class", "hide");
  canvasMaze.setAttribute("class", "");
  canvasVisible = true;
};