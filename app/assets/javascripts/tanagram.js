function Pieces (stage, scale, defaultX, defaultY, enableListen){
	var self = this;

	this.large_triangle_1 = new createjs.Shape();
	this.large_triangle_1.graphics.f("red").mt(0, 4 * scale).lt(4 * scale, 0).lt(8 * scale,4 * scale).lt(0,4 * scale);
	this.large_triangle_1.x = (4 * scale) + defaultX; this.large_triangle_1.regX = 4 * scale;
	this.large_triangle_1.y = (2 * scale) + defaultY; this.large_triangle_1.regY = 2 * scale;
	this.large_triangle_1.rotation = 180;  

	this.large_triangle_2 = new createjs.Shape();
	this.large_triangle_2.graphics.f("yellow").mt(0,4 * scale).lt(4 * scale,0).lt(8 * scale, 4 * scale).lt(0, 4 * scale);
	this.large_triangle_2.x = (6 * scale) + defaultX; this.large_triangle_2.regX = 4 * scale;
	this.large_triangle_2.y = (4 * scale) + defaultY; this.large_triangle_2.regY = 2 * scale;
	this.large_triangle_2.rotation = 270;

	this.parallelogram = new createjs.Shape();
	this.parallelogram.graphics.f("#36175E").mt(0,0).lt(2 * scale, 2 * scale).lt(2 * scale,6 * scale).lt(0,4* scale).lt(0,0);
	this.parallelogram.x = (1 * scale) + defaultX; this.parallelogram.regX = 1 * scale;
	this.parallelogram.y = (3 * scale) + defaultY; this.parallelogram.regY = 3 * scale;

	this.medium_triangle = new createjs.Shape();//"North == 135"
	this.medium_triangle.graphics.f("#1510F0").mt(0,4 * scale).lt(4 * scale,8 * scale).lt(0,8 * scale).lt(0,4 * scale);
	this.medium_triangle.x = (1 * scale) + defaultX; this.medium_triangle.regX = 1 * scale;
	this.medium_triangle.y = (7 * scale) + defaultY; this.medium_triangle.regY = 7 * scale;

	this.small_triangle_1 = new createjs.Shape();
	this.small_triangle_1.graphics.f("#FF8A00").mt(6 * scale,6 * scale).lt(8 * scale,8 * scale).lt(4 * scale,8 * scale).lt(6 * scale, 6 * scale);
	this.small_triangle_1.x = (3 * scale) + defaultX; this.small_triangle_1.regX = 6 * scale;
	this.small_triangle_1.y = (4 * scale) + defaultY; this.small_triangle_1.regY = 7 * scale;
	this.small_triangle_1.rotation = 90;

	this.small_triangle_2 = new createjs.Shape();
	this.small_triangle_2.graphics.f("#056134").mt(6 * scale, 6 * scale).lt(8 * scale, 8 * scale).lt(4 * scale, 8 * scale).lt(6 * scale, 6 * scale);
	this.small_triangle_2.x = (6 * scale) + defaultX; this.small_triangle_2.regX = 6 * scale;
	this.small_triangle_2.y = (7 * scale) + defaultY; this.small_triangle_2.regY = 7 * scale;

	this.square = new createjs.Shape();
	this.square.graphics.f("lime").mt(4 * scale, 4 * scale).lt(6 * scale, 6 * scale).lt(4 * scale, 8 * scale).lt(2 * scale, 6 * scale).lt(4 * scale, 4 * scale);
	this.square.x = (4 * scale) + defaultX; this.square.regX = 4 * scale;
	this.square.y = (6 * scale) + defaultY; this.square.regY = 6 * scale;

	if(enableListen){
		this.large_triangle_1.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.large_triangle_1);
		});

		this.large_triangle_2.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.large_triangle_2);
		});

		this.parallelogram.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.parallelogram);
		});

		this.medium_triangle.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.medium_triangle);
		});

		this.small_triangle_1.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.small_triangle_1);
		});

		this.small_triangle_2.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.small_triangle_2);
		});

		this.square.on("pressmove", function(evt){
			evt.target.x = evt.stageX;
			evt.target.y = evt.stageY;
			stage.addChild(self.square);
		});

		this.large_triangle_1.on("dblclick", function(evt){
			self.large_triangle_1.rotation += 45;
			if (self.large_triangle_1.rotation == 360)self.large_triangle_1.rotation = 0;
			stage.addChild(self.large_triangle_1);
		});

		this.large_triangle_2.on("dblclick", function(evt){
			self.large_triangle_2.rotation += 45;
			if (self.large_triangle_2.rotation == 360)self.large_triangle_2.rotation = 0;
			stage.addChild(self.large_triangle_2);
		});

		this.parallelogram.on("dblclick", function(evt){
			self.parallelogram.rotation += 45;
			if (self.parallelogram.rotation == 180)self.parallelogram.rotation = 0;
			stage.addChild(self.parallelogram);
		});			

		this.medium_triangle.on("dblclick", function(evt){
			self.medium_triangle.rotation += 45;
			if (self.medium_triangle.rotation == 360)self.medium_triangle.rotation = 0;
			stage.addChild(self.medium_triangle);
		});

		this.small_triangle_1.on("dblclick", function(evt){
			self.small_triangle_1.rotation += 45;
			if (self.small_triangle_1.rotation == 360)self.small_triangle_1.rotation = 0;
			stage.addChild(self.small_triangle_1);
		});
		
		this.small_triangle_2.on("dblclick", function(evt){
			self.small_triangle_2.rotation += 45;
			if (self.small_triangle_2.rotation == 360)self.small_triangle_2.rotation = 0;
			stage.addChild(self.small_triangle_2);
		});		

		this.square.on("dblclick", function(evt){
			self.square.rotation += 45;
			if (self.square.rotation == 90)self.square.rotation = 0;
			stage.addChild(self.square);
		});
	}

	stage.addChild(this.large_triangle_1);
	stage.addChild(this.large_triangle_2);
	stage.addChild(this.parallelogram);
	stage.addChild(this.medium_triangle);
	stage.addChild(this.small_triangle_1);
	stage.addChild(this.small_triangle_2);
	stage.addChild(this.square);
}

Pieces.prototype.set_large_triangle_1 = function (startX, startY, rotation, color){
	this.large_triangle_1.graphics.clear().f(color).mt(0, 4 * scale).lt(4 * scale, 0).lt(8 * scale,4 * scale).lt(0,4 * scale);
	this.large_triangle_1.x = startX;
	this.large_triangle_1.y = startY;
	if (rotation < 0 || rotation > 360)rotation = 0;
	this.large_triangle_1.rotation = rotation;
}

Pieces.prototype.get_large_triangle_1 = function(){
	return {x : this.large_triangle_1.x, y : this.large_triangle_1.y, rotation : this.large_triangle_1.rotation };
}

Pieces.prototype.set_large_triangle_2 = function (startX, startY, rotation, color){
	this.large_triangle_2.graphics.clear().f(color).mt(0,4 * scale).lt(4 * scale,0).lt(8 * scale, 4 * scale).lt(0, 4 * scale);
	this.large_triangle_2.x = startX;
	this.large_triangle_2.y = startY;
	if (rotation < 0 || rotation > 360)rotation = 0;
	this.large_triangle_2.rotation = rotation;
}

Pieces.prototype.get_large_triangle_2 = function(){
	return {x : this.large_triangle_2.x, y : this.large_triangle_2.y, rotation : this.large_triangle_2.rotation };
}

Pieces.prototype.set_parallelogram = function (startX, startY, rotation, color){
	this.parallelogram.graphics.clear().f(color).mt(0,0).lt(2 * scale, 2 * scale).lt(2 * scale,6 * scale).lt(0,4* scale).lt(0,0);
	this.parallelogram.x = startX;
	this.parallelogram.y = startY;
	if (rotation < 0 || rotation > 180)rotation = 0;
	this.parallelogram.rotation = rotation;
}

Pieces.prototype.get_parallelogram = function(){
	return {x : this.parallelogram.x, y : this.parallelogram.y, rotation : this.parallelogram.rotation };
}

Pieces.prototype.set_medium_triangle = function (startX, startY, rotation, color){
	this.medium_triangle.graphics.clear().f(color).mt(0,4 * scale).lt(4 * scale,8 * scale).lt(0,8 * scale).lt(0,4 * scale);
	this.medium_triangle.x = startX;
	this.medium_triangle.y = startY;
	if (rotation < 0 || rotation > 360)rotation = 0;
	this.medium_triangle.rotation = rotation;
}

Pieces.prototype.get_medium_triangle = function(){
	return {x : this.medium_triangle.x, y : this.medium_triangle.y, rotation : this.medium_triangle.rotation };
}

Pieces.prototype.set_small_triangle_1 = function (startX, startY, rotation, color){
	this.small_triangle_1.graphics.clear().f(color).mt(6 * scale,6 * scale).lt(8 * scale,8 * scale).lt(4 * scale,8 * scale).lt(6 * scale, 6 * scale);
	this.small_triangle_1.x = startX;
	this.small_triangle_1.y = startY;
	if (rotation < 0 || rotation > 360)rotation = 0;
	this.small_triangle_1.rotation = rotation;
}

Pieces.prototype.get_small_triangle_1 = function(){
	return {x : this.small_triangle_1.x, y : this.small_triangle_1.y, rotation : this.small_triangle_1.rotation };
}

Pieces.prototype.set_small_triangle_2 = function (startX, startY, rotation, color){
	this.small_triangle_2.graphics.clear().f(color).mt(6 * scale, 6 * scale).lt(8 * scale, 8 * scale).lt(4 * scale, 8 * scale).lt(6 * scale, 6 * scale);
	this.small_triangle_2.x = startX;
	this.small_triangle_2.y = startY;
	if (rotation < 0 || rotation > 360)rotation = 0;
	this.small_triangle_2.rotation = rotation;
}

Pieces.prototype.get_small_triangle_2 = function(){
	return {x : this.small_triangle_2.x, y : this.small_triangle_2.y, rotation : this.small_triangle_2.rotation };
}

Pieces.prototype.set_square = function (startX, startY, rotation, color){
	this.square.graphics.clear().f(color).mt(4 * scale, 4 * scale).lt(6 * scale, 6 * scale).lt(4 * scale, 8 * scale).lt(2 * scale, 6 * scale).lt(4 * scale, 4 * scale);
	this.square.x = startX;
	this.square.y = startY;
	if (rotation < 0 || rotation > 90)rotation = 0;
	this.square.rotation = rotation;
}

Pieces.prototype.get_square = function(){
	return {x : this.square.x, y : this.square.y, rotation : this.square.rotation };
}

function setPuzzle(puzzle, data){
	puzzle.set_large_triangle_1(
		data.puzzle.large_triangle_1.x,
		data.puzzle.large_triangle_1.y,
		data.puzzle.large_triangle_1.r,
		data.puzzle.large_triangle_1.color);

	puzzle.set_large_triangle_2(
		data.puzzle.large_triangle_2.x,
		data.puzzle.large_triangle_2.y,
		data.puzzle.large_triangle_2.r,
		data.puzzle.large_triangle_2.color);

	puzzle.set_parallelogram(
		data.puzzle.parallelogram.x,
		data.puzzle.parallelogram.y,
		data.puzzle.parallelogram.r,
		data.puzzle.parallelogram.color);

	puzzle.set_medium_triangle(
		data.puzzle.medium_triangle.x,
		data.puzzle.medium_triangle.y,
		data.puzzle.medium_triangle.r,
		data.puzzle.medium_triangle.color);

	puzzle.set_small_triangle_1(
		data.puzzle.small_triangle_1.x,
		data.puzzle.small_triangle_1.y,
		data.puzzle.small_triangle_1.r,
		data.puzzle.small_triangle_1.color);

	puzzle.set_small_triangle_2(
		data.puzzle.small_triangle_2.x,
		data.puzzle.small_triangle_2.y,
		data.puzzle.small_triangle_2.r,
		data.puzzle.small_triangle_2.color);

	puzzle.set_square(
		data.puzzle.square.x,
		data.puzzle.square.y,
		data.puzzle.square.r,
		data.puzzle.square.color);
}

function tick(event){
	stage.update();
}

function Game(pieces, puzzle){
	var game_over = false;
	stage.on("stagemouseup", function(evt) {
		if (
			//Large Triangle 1 Check
			(check_piece(pieces.get_large_triangle_1().x, 
			pieces.get_large_triangle_1().y, 
			pieces.get_large_triangle_1().r,
			puzzle.get_large_triangle_1().x,
			puzzle.get_large_triangle_1().y,
			puzzle.get_large_triangle_1().r)
		||
			check_piece(pieces.get_large_triangle_2().x, 
			pieces.get_large_triangle_2().y, 
			pieces.get_large_triangle_2().r,
			puzzle.get_large_triangle_1().x,
			puzzle.get_large_triangle_1().y,
			puzzle.get_large_triangle_1().r))
		&&	//Large Triangle 2 Check
			(check_piece(pieces.get_large_triangle_2().x, 
			pieces.get_large_triangle_2().y, 
			pieces.get_large_triangle_2().r,
			puzzle.get_large_triangle_2().x,
			puzzle.get_large_triangle_2().y,
			puzzle.get_large_triangle_2().r)
		||
			check_piece(pieces.get_large_triangle_1().x, 
			pieces.get_large_triangle_1().y, 
			pieces.get_large_triangle_1().r,
			puzzle.get_large_triangle_2().x,
			puzzle.get_large_triangle_2().y,
			puzzle.get_large_triangle_2().r))
		&&	//Small Triangle 1 Check
			(check_piece(pieces.get_small_triangle_1().x, 
			pieces.get_small_triangle_1().y, 
			pieces.get_small_triangle_1().r,
			puzzle.get_small_triangle_1().x,
			puzzle.get_small_triangle_1().y,
			puzzle.get_small_triangle_1().r)
		||
			check_piece(pieces.get_small_triangle_2().x, 
			pieces.get_small_triangle_2().y, 
			pieces.get_small_triangle_2().r,
			puzzle.get_small_triangle_1().x,
			puzzle.get_small_triangle_1().y,
			puzzle.get_small_triangle_1().r))
		&&	//Small Triangle 2 Check
			(check_piece(pieces.get_small_triangle_2().x, 
			pieces.get_small_triangle_2().y, 
			pieces.get_small_triangle_2().r,
			puzzle.get_small_triangle_2().x,
			puzzle.get_small_triangle_2().y,
			puzzle.get_small_triangle_2().r)
		||
			check_piece(pieces.get_small_triangle_1().x, 
			pieces.get_small_triangle_1().y, 
			pieces.get_small_triangle_1().r,
			puzzle.get_small_triangle_2().x,
			puzzle.get_small_triangle_2().y,
			puzzle.get_small_triangle_2().r))
		&&	//Parallelogram Check
			(check_piece(pieces.get_parallelogram().x, 
			pieces.get_parallelogram().y, 
			pieces.get_parallelogram().r,
			puzzle.get_parallelogram().x,
			puzzle.get_parallelogram().y,
			puzzle.get_parallelogram().r))
		&&	//Square Check
			(check_piece(pieces.get_square().x, 
			pieces.get_square().y, 
			pieces.get_square().r,
			puzzle.get_square().x,
			puzzle.get_square().y,
			puzzle.get_square().r))
		&&	//Medium Triangle Check
			(check_piece(pieces.get_medium_triangle().x, 
			pieces.get_medium_triangle().y, 
			pieces.get_medium_triangle().r,
			puzzle.get_medium_triangle().x,
			puzzle.get_medium_triangle().y,
			puzzle.get_medium_triangle().r))
		)
		{
			game_over = true;
			console.log("Game Over")
		}
	});
}

function check_piece(x1, y1, r1, x2, y2, r2){
	if(Math.abs(x1 - x2) < 10 && Math.abs(y1 - y2) < 10 && r1 == r2){
		return true;
	}
	return false;
}