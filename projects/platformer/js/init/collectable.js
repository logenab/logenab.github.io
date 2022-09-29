(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    max: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kennedi", points: 50 },
  };

  window.opspark.collectable.type = type;

  
  function init(game) {
    let createCollectable = collectable.create;

   
    createCollectable(type.steve, 200, 170, 6, 0.7);

    createCollectable(type.steve, 500, 250, 8, 0.2);

    createCollectable(type.steve, 400, 100, 1, 0.7);
    
    createCollectable(type.steve, 300, 120, 9, 10);
  }
  collectable.init = init;
})(window);
