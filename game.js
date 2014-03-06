(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var intervalId = Asteroids.intervalId

  Asteroid = Asteroids.Asteroid;
  Ship = Asteroids.Ship;

  var Game = Asteroids.Game = function(xDim, yDim) {
    this.DIM_X = xDim;
    this.DIM_Y = yDim;
    this.asteroids = this.addAsteroids(10);
    this.ship = this.makeShip(xDim, yDim);
    this.bullets = [];
  }

  Game.prototype.addAsteroids = function(numAst) {
    var allStroids = [];
    var that = this;
    for(var i = 0; i < numAst; i++) {
      allStroids.push(Asteroid.randomAsteroid(that.DIM_X, that.DIM_Y))
    };
    return allStroids;
  }

  Game.prototype.makeShip = function(xDim, yDim) {
    // Asteroid(pos, vel, this.RADIUS, this.COLOR)
    var pos = [xDim / 2, yDim / 2];
    return new Ship(pos, [0,0], Ship.RADIUS, Ship.COLOR);
  }

  Game.prototype.draw = function(ctx) {
    // console.log("drew!");
 //    console.log()

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    })

    this.ship.draw(ctx);

    this.bullets.forEach( function(bullet) {
      bullet.draw(ctx);
    })
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship
    var that = this;
    this.asteroids.forEach( function(asteroid) {
      if( ship.isCollidedWith(asteroid) ){
        alert("you lose!");
        that.stop();
      }
    })
  };

  Game.prototype.step = function(ctx) {
    // console.log("stepped!");
    this.move();
    this.draw(ctx);
    this.checkCollisions();
  };

  Game.prototype.move = function() {
    // console.log("moved!")
    var that = this

    this.asteroids.forEach( function(asteroid) {
      asteroid.move(that.DIM_X, that.DIM_Y);
    });

    this.ship.move(that.DIM_X, that.DIM_Y);

    this.bullets.forEach( function(bullet) {
      bullet.move(that.dim_X, that.DIM_Y);
    })
  };

  Game.prototype.start = function(canvasEl) {
    this.bindKeyHandlers();
    var ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "black";
    var game = this;
    intervalId = window.setInterval(function () {
      game.step(ctx);
    }, 30);
  };

  Game.prototype.stop = function() {
    window.clearInterval(intervalId)
  }

  Game.prototype.bindKeyHandlers = function() {
    var that = this
    key('up', function() { that.ship.power([0,-0.5]) });
    key('down', function() { that.ship.power([0,0.5]) });
    key('left', function() { that.ship.power([-0.5,0]) });
    key('right', function() { that.ship.power([0.5,0]) });
    key('space', function() { that.bullets.push(that.ship.fireBullet()) });
  }

  return root;
})(this);