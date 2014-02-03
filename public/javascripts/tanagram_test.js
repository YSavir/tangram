    var startX, startY, scale;
    startX = startY = 130;
    scale = 30;
    var stage = new createjs.Stage("canvas");

    var large_triangle_1 = new createjs.Shape();
    large_triangle_1.graphics.s("black").f("red").mt(0, 4 * scale).lt(4 * scale, 0).lt(8 * scale,4 * scale).lt(0,4 * scale);
    large_triangle_1.x = (4 * scale) + startX; large_triangle_1.regX = 4 * scale;
    large_triangle_1.y = (2 * scale) + startY; large_triangle_1.regY = 2 * scale;
    large_triangle_1.rotation = 180;  

    var large_triangle_2 = new createjs.Shape();
    large_triangle_2.graphics.s("black").f("yellow").mt(0,4 * scale).lt(4 * scale,0).lt(8 * scale, 4 * scale).lt(0, 4 * scale);
    large_triangle_2.x = (6 * scale) + startX; large_triangle_2.regX = 4 * scale;
    large_triangle_2.y = (4 * scale) + startY; large_triangle_2.regY = 2 * scale;
    large_triangle_2.rotation = 270;

    var parallelogram = new createjs.Shape();
    parallelogram.graphics.s("black").f("purple").mt(0,0).lt(2 * scale, 2 * scale).lt(2 * scale,6 * scale).lt(0,4* scale).lt(0,0);
    parallelogram.x = (1 * scale) + startX; parallelogram.regX = 1 * scale;
    parallelogram.y = (3 * scale) + startY; parallelogram.regY = 3 * scale;

    var medium_triangle = new createjs.Shape();//"North == 135"
    medium_triangle.graphics.s("black").f("blue").mt(0,4 * scale).lt(4 * scale,8 * scale).lt(0,8 * scale).lt(0,4 * scale);
    medium_triangle.x = (1 * scale) + startX; medium_triangle.regX = 1 * scale;
    medium_triangle.y = (7 * scale) + startY; medium_triangle.regY = 7 * scale;

    var small_triangle_1 = new createjs.Shape();
    small_triangle_1.graphics.s("black").f("orange").mt(6 * scale,6 * scale).lt(8 * scale,8 * scale).lt(4 * scale,8 * scale).lt(6 * scale, 6 * scale);
    small_triangle_1.x = (3 * scale) + startX; small_triangle_1.regX = 6 * scale;
    small_triangle_1.y = (4 * scale) + startY; small_triangle_1.regY = 7 * scale;
    small_triangle_1.rotation = 90;

    var small_triangle_2 = new createjs.Shape();
    small_triangle_2.graphics.s("black").f("green").mt(6 * scale, 6 * scale).lt(8 * scale, 8 * scale).lt(4 * scale, 8 * scale).lt(6 * scale, 6 * scale);
    small_triangle_2.x = (6 * scale) + startX; small_triangle_2.regX = 6 * scale;
    small_triangle_2.y = (7 * scale) + startY; small_triangle_2.regY = 7 * scale;

    var square = new createjs.Shape();
    square.graphics.s("black").f("lime").mt(4 * scale, 4 * scale).lt(6 * scale, 6 * scale).lt(4 * scale, 8 * scale).lt(2 * scale, 6 * scale).lt(4 * scale, 4 * scale);
    square.x = (4 * scale) + startX; square.regX = 4 * scale;
    square.y = (6 * scale) + startY; square.regY = 6 * scale;

    large_triangle_1.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(large_triangle_1);
    });

    large_triangle_2.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(large_triangle_2);
    });

    parallelogram.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(parallelogram);
    });

    medium_triangle.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(medium_triangle);
    });

    small_triangle_1.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(small_triangle_1);
    });

    small_triangle_2.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(small_triangle_2);
    });

    square.on("pressmove", function(evt){
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
      stage.addChild(square);
      // console.log("Square rotation: " + square.rotation);
      // console.log("Square X: " + square.x);
      // console.log("Square Y: " + square.y);
    });

    large_triangle_1.on("dblclick", function(evt){
      large_triangle_1.rotation += 45;
      if (large_triangle_1.rotation == 360)large_triangle_1.rotation = 0;
      stage.addChild(large_triangle_1);
    });

    large_triangle_2.on("dblclick", function(evt){
      large_triangle_2.rotation += 45;
      if (large_triangle_2.rotation == 360)large_triangle_2.rotation = 0;
      stage.addChild(large_triangle_2);
    });

    parallelogram.on("dblclick", function(evt){
      parallelogram.rotation += 45;
      if (parallelogram.rotation == 180)parallelogram.rotation = 0;
      stage.addChild(parallelogram);
    });     

    medium_triangle.on("dblclick", function(evt){
      medium_triangle.rotation += 45;
      if (medium_triangle.rotation == 360)medium_triangle.rotation = 0;
      stage.addChild(medium_triangle);
    });

    small_triangle_1.on("dblclick", function(evt){
      small_triangle_1.rotation += 45;
      if (small_triangle_1.rotation == 360)small_triangle_1.rotation = 0;
      stage.addChild(small_triangle_1);
    });
    
    small_triangle_2.on("dblclick", function(evt){
      small_triangle_2.rotation += 45;
      if (small_triangle_2.rotation == 360)small_triangle_2.rotation = 0;
      stage.addChild(small_triangle_2);
    });   

    square.on("dblclick", function(evt){
      square.rotation += 45;
      if (square.rotation == 90)square.rotation = 0;
      stage.addChild(square);
    });

    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(large_triangle_1);
    stage.addChild(large_triangle_2);
    stage.addChild(parallelogram);
    stage.addChild(medium_triangle);
    stage.addChild(small_triangle_1);
    stage.addChild(small_triangle_2);
    stage.addChild(square);

    function tick(event){
      stage.update();
    }     