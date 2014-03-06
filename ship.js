(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var MovingObject = Asteroids.MovingObject
  var Bullet = Asteroids.Bullet

  Function.prototype.inherits = function(parentObject) {
    function Surrogate() {};
    Surrogate.prototype = parentObject.prototype;
    this.prototype = new Surrogate();
  }

  var Ship = Asteroids.Ship = function() {
    MovingObject.apply(this, arguments);
  }

  Ship.inherits(MovingObject);

  Ship.RADIUS = 5;
  Ship.COLOR = "red";

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    // var currentVel = this.vel
    var xVel = this.vel[0] * 2;
    var yVel = this.vel[1] * 2;
    var bVel = [xVel, yVel]

    var xPos = this.pos[0] * 1;
    var yPos = this.pos[1] * 1;
    var bPos = [xPos, yPos]
    // var speed = Math.sqrt(Math.pow(xVel, 2) + Math.pow(yVel, 2))
    // debugger
    return new Bullet(bPos, bVel, Bullet.RADIUS, Bullet.COLOR);
  };

  return root;
})(this);