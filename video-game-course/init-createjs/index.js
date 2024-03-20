/*
 * TODO 4: Create a modularized index.js,
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  console.log("index.js intialized");
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;

  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  shapeOne = new createjs.Shape();
  shapeTwo = new createjs.Shape();
  shapeThree = new createjs.Shape();
  shapeFour = new createjs.Shape();
  shapeFive = new createjs.Shape();
  shapeSix = new createjs.Shape();
  shapeSeven = new createjs.Shape();
  shapeEight = new createjs.Shape();
  shapeNine = new createjs.Shape();
  // INIT CREATEJS //
  const radius = 25;
  const margin = 125;

  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("black")
    .drawRect(0, 0, canvas.width, canvas.height);

  // CREATE A CIRCLE //
  shapeOne.graphics.beginFill("purple").drawCircle(250, 100, radius);
  shapeTwo.graphics.beginFill("purple").drawCircle(120, 100, radius);
  shapeThree.graphics.beginFill("purple").drawRect(170, 160, radius, margin);
  shapeFour.graphics.beginFill("black").drawRect(90, 70, margin, radius);
  shapeFive.graphics.beginFill("black").drawRect(160, 70, margin, radius);
  shapeSix.graphics.beginFill("purple").drawCircle(240, 270, radius);
  shapeSeven.graphics.beginFill("purple").drawCircle(240, 190, radius);
  shapeEight.graphics.beginFill("purple").drawCircle(130, 270, radius);
  shapeNine.graphics.beginFill("purple").drawCircle(130, 190, radius);

  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(
    background,
    shapeOne,
    shapeTwo,
    shapeThree,
    shapeFour,
    shapeFive,
    shapeSix,
    shapeSeven,
    shapeEight,
    shapeNine
  );

  // TODO 8: Listen to the 'tick' event  //
  let tickerHandler = createjs.Ticker.on("tick", onTick);

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event);
  }

  /*
   * TODO 10: Implement an update Function, after making
   * changes to assets, it must call stage.update();
   */
  var bounds = canvas.width -50; 
  var speedX4 = 2;
  var speedX5 = 2;
  function update(event) {
    // update the sage after chnageing/ modifying DisplayObjects
    shapeFour.x = shapeFour.x  + speedX4;
    shapeFive.x = shapeFive.x + speedX5;
    
    stage.update();
    if (Math.abs( shapeFour.x) > bounds){
      speedX4 *= -1;
    }
    if (Math.abs(shapeFive.x) > bounds){
      speedX5 *= -1;
    }
  }
  console.log(shapeFour)
})(window, window.createjs);
