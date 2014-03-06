(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(parentObject) {
    function Surrogate() {};
    Surrogate.prototype = parentObject.prototype;
    this.prototype = new Surrogate();
  }

  var MovingObject = Asteroids.MovingObject

  var Asteroid = Asteroids.Asteroid = function() {
    MovingObject.apply(this, arguments);
  };

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var locX = Math.random() * dimX;
    var locY = Math.random() * dimY;
    var pos = [locX, locY]
    var vel = this.randomVec();
    return new Asteroid(pos, vel, this.RADIUS, this.COLOR)
  };

  Asteroid.COLOR = "green";
  Asteroid.RADIUS = 10;

  Asteroid.inherits(MovingObject);

  Asteroid.randomVec = function() {
    var vX = (Math.random()*10-5);
    var vY = (Math.random()*10-5);
    return [vX, vY];
  }

  return root;
})(this);