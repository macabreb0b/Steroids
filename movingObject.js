(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, colour) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.colour = colour;
  };

  MovingObject.prototype.move = function(xDim, yDim) {
    var newX = (this.pos[0] + this.vel[0]) % xDim;
    var newY = (this.pos[1] + this.vel[1]) % yDim;
    if (newX < 0) {
      newX += xDim;
    };
    if (newY < 0) {
      newY += yDim;
    };
    this.pos[0] = newX;
    this.pos[1] = newY;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.colour;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var xDiff = this.pos[0] - otherObject.pos[0];
    var yDiff = this.pos[1] - otherObject.pos[1];

    var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    if( distance <= otherObject.radius + this.radius ) {
      return true
    } else {
      return false
    };
  };

  return root;
})(this);



