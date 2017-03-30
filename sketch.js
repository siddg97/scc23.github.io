// global variables
var snake;
var scl = 20;
var food;
var canvasSize = 600;

// function to set up game and canvas
function setup() {
	createCanvas(canvasSize, canvasSize);
	snake = new Snake();			// create instance of snake
	frameRate(10);				// lower frame rate (slow down speed)
	pickLocation();				// pick initial position to spawn food
}

// function to pick location for food to spawn
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	// [lbl] repickLocation;
	food = createVector(floor(random(cols)), floor(random(rows)));
	// // make sure food does not spawn inside snake
	// for (var i = 0; i < snake.tail.length; i++) {
	// 	if ( (food.x === snake.x && food.y === snake.y) || (food.x === snake.tail[i].x && food.y === snake.tail[i].y) ) {
	// 		goto repickLocation;
	// 	}
	// }
	food.mult(scl);
}

// for testing, increase length of snake by clicking left/right mouse button
function mousePressed() {
	snake.total++;
}

function draw() {
	background(51);

	if (snake.eat(food)) {
		pickLocation();
	}
	snake.gameOver();
	snake.update();
	snake.display();

	fill(255, 0, 100);	// red/pink colour for food
	rect(food.x, food.y, scl, scl);
}

// function for moving snake
function keyPressed() {
	// up arrow or W
	if (keyCode === UP_ARROW || keyCode === 87) {
		snake.dir(0, -1);
	}
	// down arrow or S
	else if (keyCode === DOWN_ARROW || keyCode == 83) {
		snake.dir(0, 1);
	}
	// right arrow or D
	else if (keyCode === RIGHT_ARROW || keyCode == 68) {
		snake.dir(1, 0);
	}
	// left arrow or A
	else if (keyCode === LEFT_ARROW || keyCode == 65) {
		snake.dir(-1, 0);
	}
}

