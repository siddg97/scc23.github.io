// constructor function for snake
function Snake() {
	// initialize objects
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];		// empty array for tail to add on

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	// function to determine if snake ate food
	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		// whether or not snake reached the food
		if (d < 1) {
			this.total++;	// if snake ate food, increment total
			return true;
		}
		else {
			return false;
		}
	}

	// function to determine if snake died
	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dis(this.x, this.y, pos.x, pos.y);
			// if died, reset everything
			if (d < 1) {
				total = 0;
				this.tail = [];
			}
		}
	}

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

	this.show = function() {
		fill(255);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}