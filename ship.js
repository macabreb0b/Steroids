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
    if(this.radius >= 5) {
      this.tail = this.makeTail();
    }
  }

  Ship.inherits(MovingObject);

  Ship.RADIUS = 15;
  Ship.COLOR = "red";

  Ship.prototype.move = function(xDim, yDim) {
    // debugger
    var lastPos = [+this.pos[0], +this.pos[1]];
    var lastVel = [+this.vel[0]*0.7, +this.vel[1]*0.7];
    console.log(this)

    MovingObject.prototype.move.call(this, xDim, yDim);

    if( typeof this.tail != 'undefined') {
      this.tail.pos = lastPos;
      this.tail.vel = lastVel;
      this.tail.move(xDim, yDim);
    };
  }

  Ship.prototype.makeTail = function() {
    return new Ship(this.pos, [0,0], (Ship.RADIUS -= 4), Ship.COLOR);
  };

  Ship.prototype.draw = function(ctx) {
    MovingObject.prototype.draw.call(this, ctx);

    if(typeof this.tail != 'undefined') {
      this.tail.draw(ctx);
    };
  }


  // make ship.draw function

  // call both of these from Ship

  // modify 'collision' function to include tail

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    // var currentVel = this.vel

    var xVel = parseFloat(this.vel[0] * 2);
    var yVel = parseFloat(this.vel[1] * 2);

    var magnitude = Math.sqrt(Math.pow(xVel, 2) + Math.pow(yVel, 2))
    xVel = xVel / magnitude * Bullet.SPEED;
    yVel = yVel / magnitude * Bullet.SPEED;
    var bVel = [xVel, yVel];

    var xPos = parseFloat(this.pos[0]);
    var yPos = parseFloat(this.pos[1]);
    var bPos = [xPos, yPos];

    // debugger
    return new Bullet(bPos, bVel, Bullet.RADIUS, Bullet.COLOR);
  };

  return root;
})(this);