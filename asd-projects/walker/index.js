/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  var KEY ={
    Left: 65,
    Right: 68,
    Up: 87,
    Down: 83,
  }

  
   var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  } 
  

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem()
    repositionGameItem()
    wallCollision()
      console.log (walker.y)

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.Left){
      walker.speedX = -5;
      console.log("Left pressed")
    }
    if (event.which === KEY.Right){
      walker.speedX = 5;
      console.log("Right pressed")
}
if (event.which === KEY.Up){
  walker.speedY = -5;
  console.log("Up pressed")
}
if (event.which === KEY.Down){
  walker.speedY = 5;
  console.log("Down pressed")

}
  console.log(event.which)
}

function handleKeyUp(event){
  if (event.which === KEY.Left){
    walker.speedX = 0;
    console.log("Left lifted")
  }
  if (event.which === KEY.Right){
    walker.speedX = 0;
    console.log("Right lifted")
}
if (event.which === KEY.Up){
walker.speedY = 0;
console.log("Up lifted")
}
if (event.which === KEY.Down){
walker.speedY = 0;
console.log("Down lifted")

}
}

function wallCollision(){
  if (walker.x < 0){
    walker.x = 0;
  }
  else if (walker.x > 390){
    walker.x = 390;
  }
  if (walker.y < 0){
    walker.y = 0;
  }
  else if (walker.y > 400){
    walker.y = 395;
  }
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
walker.x += walker.speedX;
walker.y += walker.speedY; 
  }
  function redrawGameItem(){
    $("#walker").css("top", walker.y); // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("left", walker.x); // draw the box in the new location, positionX pixels away from the "left"
  }
}
