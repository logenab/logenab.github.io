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
    createCannon("bottom", 450, 500);
    createCannon("right", 300,600);
    createCannon("right", 500);
  }
  cannon.init = init;
})(window);
