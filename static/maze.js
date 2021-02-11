const mazeDiv = document.getElementById("maze");

for(var i = 0; i < height; i++){
	const row = document.createElement('div');
	row.classList.add("row");

	for(var j = 0; j < width; j++){
		const cellDiv = document.createElement('div');
		cellDiv.classList.add("cell");

		const cell = cells[j + i * width];
		if((cell & 1) === 0){
			cellDiv.classList.add("north");
		}
		if((cell & 2) === 0){
			cellDiv.classList.add("east");
		}
		if((cell & 4) === 0){
			cellDiv.classList.add("south");
		}
		if((cell & 8) === 0){
			cellDiv.classList.add("west");
		}

		row.appendChild(cellDiv);
	}
	mazeDiv.appendChild(row);
}