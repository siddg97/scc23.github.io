// global variables
var s;
var scl = 20;
var food;
canvasSize = 600;

// function to set up game and canvas
function setup() {
	createCanvas(canvasSize, canvasSize);
	s = new Snake();			// create instance of snake
	frameRate(10);				// lower frame rate (slow down speed)
	pickLocation();				// pick initial position to spawn food
}

// function to pick location for food to spawn
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

// for testing, increase length of snake by clicking left mouse button
function mousePressed() {
	s.total++;
}

function draw() {
	background(51);

	if (s.eat(food)) {
		pickLocation();
	}
	s.gameOver();
	s.update();
	s.show();

	fill(255, 0, 100);	// red/pink colour for food
	rect(food.x, food.y, scl, scl);
}

// function for moving snake
function keyPressed() {
	// up arrow or W
	if (keyCode === UP_ARROW || keyCode === 87) {
		s.dir(0, -1);
	}
	// down arrow or S
	else if (keyCode === DOWN_ARROW || keyCode == 83) {
		s.dir(0, 1);
	}
	// right arrow or D
	else if (keyCode === RIGHT_ARROW || keyCode == 68) {
		s.dir(1, 0);
	}
	// left arrow or A
	else if (keyCode === LEFT_ARROW || keyCode == 65) {
		s.dir(-1, 0);
	}
}

