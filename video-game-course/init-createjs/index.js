/*
 * TODO 4: Create a modularized index.js,
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  console.log("index.js intialized");
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage(canvas);
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;

  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */

  // INIT CREATEJS //
  const radius = 25;
  const margin = 125;

  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("powderblue")
    .drawRect(0, 0, canvas.width, canvas.height);

  // CREATE A CIRCLE //

  // ADD DISPLAY OBJECTS TO STAGE //
stage.addChild();
  // TODO 8: Listen to the 'tick' event  //
  let tickerHandler = createjs.Ticker.on('tick', onTick);
  

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
