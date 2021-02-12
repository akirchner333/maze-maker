const cellSize = 25;
let x = 0;
let y = 0;
let tick = 0;

function setup(){
	const canvas = createCanvas(width * cellSize + 50, height * cellSize + 50);
	canvas.parent('canvas-maze');
}

function draw(){
	background("#E8E5DA");
	fill("#E8E5DA");

	tick += deltaTime;
	if(canvasVisible && tick > 150){
		const index = y * width + x;
		if(keyIsDown(87) && (cells[index] & 1) == 1){
			y -= 1;
			tick = 0;
		}
		if(keyIsDown(68) && (cells[index] & 2) == 2){
			x += 1;
			tick = 0;
		}
		if(keyIsDown(83) && (cells[index] & 4) == 4){
			y += 1;
			tick = 0;
		}
		if(keyIsDown(65) && (cells[index] & 8) == 8){
			x -= 1;
			tick = 0;
		}
	}


	rect(25, 25, cellSize * width, cellSize * height);
	for(var i = 0; i < height; i++){
		for(var j = 0; j < width; j++){
			const index = i * width + j;
			const cell = cells[index];

			if(j === x && i === y){
				noStroke();
				fill("red");
				square((j + 0.25) * cellSize + 25, (i + 0.25) * cellSize + 25, cellSize / 2);
			}


			strokeWeight(4);
			stroke("#083D77");

			if((cell & 1) == 0){
				line(
					j * cellSize + 25,
					i * cellSize + 25,
					j * cellSize + cellSize + 25,
					i * cellSize + 25
				);
			}
			if((cell & 2) == 0){
				line(
					j * cellSize + cellSize + 25,
					i * cellSize + 25,
					j * cellSize + cellSize + 25,
					i * cellSize + cellSize + 25
				);
			}
		}
	}
}