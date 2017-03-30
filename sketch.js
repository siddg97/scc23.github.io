// // global variables
// var s;
// var scl = 20;
// var food;

// // function to set up game and canvas
// function setup() {
// 	createCanvas(600, 600);
// 	s = new Snake();			// create instance of snake
// 	frameRate(10);				// lower frame rate (slow down speed)
// 	pickLocation();				// pick initial position to spawn food
// }

// // function to pick location for food to spawn
// function pickLocation() {
// 	var cols = floor(width/scl);
// 	var rows = floor(height/scl);
// 	food = createVector(floor(random(cols)), floor(random(rows)));
// 	food.mult(scl);
// }

// function mousePressed() {
// 	s.total++;
// }

// function draw() {
// 	background(51);
// 	s.update();
// 	s.show();

// 	if (s.eat(food)) {
// 		pickLocation();
// 	}
// 	s.death();
// 	s.update();
// 	s.show();

// 	fill(255, 0, 100);
// 	rect(food.x, food.y, scl, scl);
// }

// // function for moving snake
// function keyPressed() {
// 	// up arrow or W
// 	if (keyCode === UP_ARROW || keyCode === 87) {
// 		s.dir(0, -1);
// 	}
// 	// down arrow or S
// 	else if (keyCode === DOWN_ARROW || keyCode == 83) {
// 		s.dir(0, 1);
// 	}
// 	// right arrow or D
// 	else if (keyCode === RIGHT_ARROW || keyCode == 68) {
// 		s.dir(1, 0);
// 	}
// 	// left arrow or A
// 	else if (keyCode === LEFT_ARROW || keyCode == 65) {
// 		s.dir(-1, 0);
// 	}
// }

var s;
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}