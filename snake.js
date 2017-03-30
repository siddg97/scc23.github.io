// constructor function for snake
function Snake() {
	// initialize objects
	this.x = canvasSize/2;	// place snake in middle of canvas
	this.y = canvasSize/2;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];			// empty array for tail to add on

	// function to determine if snake ate food
	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		// check if snake reached the food
		if (d < 1) {
			this.total++;	// if snake ate food, increment total
			return true;
		}
		else {
			return false;
		}
	}

	// function for moving snake
	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	// function to determine if snake died (player lost)
	this.gameOver = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			// if died (lost), reset everything
			if (d < 1) {
				this.x = canvasSize/2;
				this.y = canvasSize/2;
				this.total = 0;
				this.tail = [];
			}
		}
	}

	// function to update snake
	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	// functino to display snake
	this.display = function() {
		fill(255);	// colour white for snake
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}
