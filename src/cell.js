class Cell{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.north = undefined;
		this.east = undefined;
		this.west = undefined;
		this.south = undefined;
		this.links = [];
	}

	neighbors(){
		const neighbors = [];
		['north', 'east', 'west', 'south'].forEach(direction => {
			if(this[direction]){
				neighbors.push(this[direction]);
			}
		});

		return neighbors;
	}

	unvisited(){
		return this.links.length == 0;
	}

	link(cell){
		this.links.push(cell);
		cell.links.push(this);
		return this;
	}

	print(){
		let output = "";
		if(this.links.includes(this.south)){
			output += " "
		}else{
			output += "_"
		}

		if(this.links.includes(this.east)){
			output += " ";
		}else{
			output += "|"
		}
		return output;
	}

	// Represents the cell as a single number, encoding which sides are open
	numerical(){
		let output = 0;
		output += this.links.includes(this.north) ? 1 : 0;
		output += this.links.includes(this.east) ? 2 : 0;
		output += this.links.includes(this.south) ? 4 : 0;
		output += this.links.includes(this.west) ? 8 : 0;
		return output;
	}
}

module.exports = {
	Cell
};