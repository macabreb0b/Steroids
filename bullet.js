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

  Bullet.COLOR = "white";
  Bullet.RADIUS = 5;
  Bullet.SPEED = 20;

  return root;
})(this);