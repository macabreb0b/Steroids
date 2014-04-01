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

  Asteroid.randomAsteroid = function(dimX, dimY, shipPos) {

    var vel = this.randomVec();
    var pos = this.randomPos(dimX, dimY, shipPos);

    return new Asteroid(pos, vel, (Math.random() + 0.5) * 50, this.COLOR)
  };

  Asteroid.COLOR = "white";
  Asteroid.RADIUS = (Math.random() * 50);

  Asteroid.inherits(MovingObject);

  Asteroid.randomVec = function() {
    var vX = (Math.random()*10-5);
    var vY = (Math.random()*10-5);
    return [vX, vY];
  }

  Asteroid.randomPos = function(dimX, dimY, shipPos) {
    var locX = Math.random() * dimX;
    var locY = Math.random() * dimY;
    var xVect = Math.pow(Math.abs(shipPos[0] - locX), 2)
    var yVect = Math.pow(Math.abs(shipPos[1] - locY), 2)
    var magnitude = Math.sqrt(xVect + yVect)

    var size = Math.sqrt(Math.pow(dimX, 2) + Math.pow(dimY, 2))

    if (magnitude < (size / 7)) {
      return this.randomPos(dimX, dimY, shipPos); // make sure that no asteroids start on top of the ship
    } else {
      return [locX, locY]
    };
  }

  return root;
})(this);