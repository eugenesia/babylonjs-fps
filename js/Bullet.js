/**
 * Bullet module: a bullet shot by the player.
 */
'use strict';
(function(window, document, BABYLON, Game) {

  /**
   * Constructor function.
   * @param string name: Name/ID of bullet.
   * @param Vector3 position: Position of bullet.
   * @param Vector3 direction: Direction shot.
   * @param number speed: Speed of bullet.
   * @param Scene scene: Scene where it is inserted.
   */
  Game.Bullet = function(name, position, direction, speed, scene) {

    this.name = name;
    this.direction = direction.normalize();
    this.speed = speed;
    this.scene = scene;

    // Create a mesh representing the bullet.
    var sphere = new BABYLON.Mesh.CreateSphere(name, 16, 0.5, scene);
    sphere.position = position;
    sphere.checkCollisions = true;

    this.mesh = sphere;
    this.mesh.position = position;

    // When using a function reference, it needs to be bound to 'this' object
    // otherwise 'this' will be undefined in onFrame().
    this.onFrame = this.onFrame.bind(this);

    // Run a function to update bullet on each frame.
    Game.Engine.subscribe('frame', this.onFrame);
  }

  // Update bullet position on every frame.
  Game.Bullet.prototype.onFrame = function() {
    // Increment position by direction.
    this.mesh.position.addInPlace(this.direction.scale(this.speed));
  };

})(null, null, BABYLON, Game);

