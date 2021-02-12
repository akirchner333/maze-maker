
const express = require('express');
const handlebars = require('express-handlebars');
const random = require('random');
const url = require('url');

const { Maze } = require('./src/maze');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/maze', (req, res) =>{
	if(req.query.seed === undefined || req.query.seed === ''){
		res.redirect(url.format({
			pathName: '/maze',
			query: {...req.query, seed: random.int(0, 9999999).toString(16)}, 
		}));
	}else{
		const { width, height, seed } = req.query;
		const m = new Maze(
			width || 15,
			height || 15, 
			seed);
		res
		res.render('maze', {
			cells: m.toArray().join(","),
			width: m.width,
			height: m.height,
			text: m.print()
		});
	}
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App Start!")
});