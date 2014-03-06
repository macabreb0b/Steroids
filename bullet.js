(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(parentObject) {
    function Surrogate() {};
    Surrogate.prototype = parentObject.prototype;
    this.prototype = new Surrogate();
  }

  var MovingObject = Asteroids.MovingObject

  var Bullet = Asteroids.Bullet = function() {
    MovingObject.apply(this, arguments);
  };

  Bullet.inherits(MovingObject);

  Bullet.prototype.move = function(xDim, yDim) {
    var newX = (this.pos[0] + this.vel[0])
    var newY = (this.pos[1] + this.vel[1])

    this.pos[0] = newX;
    this.pos[1] = newY;
  };

  Bullet.COLOR = "white";
  Bullet.RADIUS = 2;
  Bullet.SPEED = 30;

  return root;
})(this);