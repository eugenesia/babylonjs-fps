/**
 * Main bootstrap script file.
 */
'use strict';
(function(window, document, BABYLON, Game) {

  // WebGL canvas.
  var canvas = document.getElementById('renderCanvas');

  // Initialise engine.
  Game.Engine.init(canvas);
  var engine = Game.Engine.getEngine();

  // Initialise scene.
  Game.Scene.init(engine, canvas);

  var scene = Game.Scene.getScene();

  // Register a render loop to repeatedly render the scene.
  engine.runRenderLoop(function() {
    scene.render();
    Game.Engine.onFrame();
  });

  // Watch for browser/canvas resize events
  window.addEventListener('resize', function() {
    engine.resize();
  });

  window.addEventListener('keypress', function(evt) {

    // Shoot a bullet.
    if (evt.key === ' ') {

      var bullet = new Game.Bullet(
        'bullet', // Name.
        new BABYLON.Vector3(0, 1, 0), // Position.
        new BABYLON.Vector3(1, 0, -1), // Direction.
        0.01, // Speed.
        scene);
    }
  });
})(window, document, BABYLON, Game);

