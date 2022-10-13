(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

 
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCannon("top", 450, 1000);
    createCannon("left", 150, 1000);
    createCannon("right", 150, 1000);
    createCannon("left", 350, 1000);
    createCannon("right", 400, 1000);
    createCannon("bottom", 450, 1000);
    createCannon("top", 250, 1000);
    createCannon("bottom", 250, 1000);
  }


  cannon.init = init;
})(window);
