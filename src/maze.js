const random = require('random');
const seedrandom = require('seedrandom');
const {Cell} = require('./cell')

class Maze{
	constructor(width, height, seed){
		this.width = width;
		this.height = height;
		this.cells = [];
		for(var i = 0; i < width; i++){
			for(var j = 0; j < height; j++){
				this.cells[this.getIndex(i, j)] = new Cell(i, j);
			}
		}

		for(var i = 0; i < this.cells.length; i++){
			const cell = this.cells[i];
			cell.north = this.getCell(cell.x    , cell.y - 1);
			cell.east  = this.getCell(cell.x + 1, cell.y    );
			cell.south = this.getCell(cell.x    , cell.y + 1);
			cell.west  = this.getCell(cell.x - 1, cell.y    );
		}

		this.rng = random.clone(seedrandom(seed));

		this.buildMaze();
	}

	// Builds the maze using recursive backtracking
	buildMaze(){
		const start = this.randomCell();
		const stack = [start];

		while(stack.length > 0){
			const current = stack[stack.length - 1];
			const neighbors = current.neighbors().filter(cell => cell.unvisited());
			if(neighbors.length == 0){
				stack.pop();
			}else{
				const neighbor = neighbors[this.rng.int(0, neighbors.length - 1)];
				current.link(neighbor);
				stack.push(neighbor);
			}
		}
	}

	randomCell(){
		return this.cells[this.rng.int(0, this.cells.length - 1)];
	}

	getIndex(x, y){
		return x + y * this.width;
	}

	getCell(x, y){
    	return this.cells.find(c => c.x == x && c.y == y);
	}

	print(){
		let output = " ";
		for(var i = 0; i < this.width; i++){
			output += "_ "
		}
		output += "\n"
		for(var i = 0; i < this.height; i++){
			output += "|"
			for(var j = 0; j < this.width; j++){
				output += this.getCell(j, i).print();
			}
			output += "\n"
		}
		return output;
	}

	toArray(){
		return this.cells.map(cell => cell.numerical());
	}
}

module.exports = {
	Maze
};