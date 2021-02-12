# Maze Maker
Maze Maker is a little site that generates mazes using [recursive backtracking](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_depth-first_search). Users can specify a width, length, and random seed for the maze. Each maze is generated using a seed, so users can share their maze just by sharing the url. Mazes are displays in three formats:
* ASCII art
* CSS
* A playable version in a canvas
Maze Maker uses express on the backend, handlebars to generate the front end, and p5 for the canvas. The site currently live at [mazemaker.herokuapp.com](http://mazemaker.herokuapp.com/)

## Development
Run ``yarn install`` to install all dependencies.

Run ``yarn run server`` to start the server locally. It'll be available at [localhost:3000](http://localhost:3000/maze?width=25&height=6&seed=312ea)
