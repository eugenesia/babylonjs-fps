/**
 * A bullet shot by the player.
 * @param string name: Name/ID of bullet.
 * @param Vector3 position: Position of bullet.
 * @param Vector3 direction: Direction shot.
 * @param number speed: Speed of bullet.
 * @param Scene scene: Scene where it is inserted.
 */
function Bullet (name, position, direction, speed, scene) {

  this.name = name;
  this.position = position;
  this.direction = direction;
  this.speed = speed;
  this.scene = scene;

  // Create a mesh representing the bullet.
  var sphere = new BABYLON.CreateSphere(name, 16, 0.5, scene);
  sphere.position = position;
  sphere.checkCollisions = true;

  this.mesh = sphere;
}

// Update bullet position on every frame.
Bullet.prototype.frameUpdate = function () {
}

