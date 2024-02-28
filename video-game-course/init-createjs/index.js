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
  shapeThree.graphics.beginFill("purple").drawRect(250, 200, radius);
  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(background, shapeOne,shapeTwo,shapeThree);

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
  function update(event) {
    // update the sage after chnageing/ modifying DisplayObjects
    stage.update();
  }
})(window, window.createjs);
