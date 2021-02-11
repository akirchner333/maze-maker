
const express = require('express');
const handlebars = require('express-handlebars');
const { Maze } = require('./src/maze');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/maze', (req, res) =>{
	const { width, height, seed } = req.query;
	// Maybe do a typecheck on width and height here
	const m = new Maze(width || 15, height || 15, seed);
	res.render('maze', {
		cells: m.toArray().join(","),
		width: m.width,
		height: m.height
	});
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
});