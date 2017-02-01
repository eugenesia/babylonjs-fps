/**
 * Everything to do with the scene.
 */
'use strict';
Game.Scene = (function(window, document, BABYLON, Game) {

  // All entities in the scene.
  var entities = [];
  // Babylon scene object.
  var scene;

  // Initialise the scene.
  // @param DOMObject canvas: DOM object representing the WebGL canvas.
  function init(engine, canvas) {

    // Scene setup.
    scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.5, 0);
    scene.collisionsEnabled = true;
    scene.workerCollisions = true;

    // Camera setup.
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 1, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas);
    camera.applyGravity = true;
    camera.checkCollisions = true;
    camera.ellipsoid  = new BABYLON.Vector3(0.5, 0.5, 0.5);
    camera.speed = 1;
    entities.push(camera);

    // HemisphericLight for ambient light.
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    entities.push(light);

    var ground = new BABYLON.Mesh.CreateGround('ground1', 20, 20, 1, scene);
    ground.checkCollisions = true;
    entities.push(ground);

    // Add some objects first.
    var sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 1, scene);
    sphere.position.y = 0.5;
    sphere.checkCollisions = true;
    entities.push(sphere)

    var box = new BABYLON.Mesh.CreateBox('box1', 2, scene);
    box.position = new BABYLON.Vector3(4, 0, 0);
    box.checkCollisions = true;
    entities.push(box);

    var bullet = new Game.Bullet(
      'bullet', // Name.
      new BABYLON.Vector3(0, 1, 0), // Position.
      new BABYLON.Vector3(1, 0, -1), // Direction.
      0.01, // Speed.
      scene);
    entities.push(bullet);
  }


  // Return Babylon scene object.
  function getScene() {
    return scene;
  }

  return {
    init: init,
    entities: entities,
    getScene: getScene,
  };

})(null, document, BABYLON, Game);

