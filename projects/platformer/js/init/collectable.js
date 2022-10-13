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
    coin: { assetKey: "coin", points: 50 },
  };

  window.opspark.collectable.type = type;

  
  function init(game) {
    let createCollectable = collectable.create;

   
    createCollectable(type.kennedi, 200, 490, 6, 0.5);

    createCollectable(type.grace, 500, 250, 8, 0.2);

    createCollectable(type.coin, 400, 100, 1, 0.4);
    
    createCollectable(type.steve, 200, 120, 9, 0.6);
  }
  collectable.init = init;
})(window);
