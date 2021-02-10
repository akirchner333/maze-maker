
const express = require('express');
const { Maze } = require('./src/maze');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/maze', (req, res) =>{
	const { width, height, seed } = req.query;
	// Maybe do a typecheck on width and height here
	const m = new Maze(width || 10, height || 10, seed);
	res.send(`<pre>${m.print()}</pre>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});