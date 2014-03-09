(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var intervalId = Asteroids.intervalId

  Asteroid = Asteroids.Asteroid;
  Target = Asteroids.Target;
  Ship = Asteroids.Ship;

  var Game = Asteroids.Game = function(xDim, yDim, canvasEl) {
    this.canvas = canvasEl.getContext("2d");
    this.level = 0;

    this.DIM_X = xDim;
    this.DIM_Y = yDim;
    this.ship = this.makeShip(xDim, yDim);
    this.numAsteroids = 10; //numAsteroids;


    this.asteroids = this.addAsteroids(this.numAsteroids);
    this.target = Target.makeTarget(xDim, yDim, this.ship.pos, this.level);
    this.bullets = [];
  }

  Game.prototype.addAsteroids = function(numAst) {
    var allStroids = [];
    var that = this;
    for(var i = 0; i < numAst; i++) {
      allStroids.push(Asteroid.randomAsteroid(that.DIM_X, that.DIM_Y, that.ship.pos))
    };
    return allStroids;
  }

  Game.prototype.makeShip = function(xDim, yDim) {
    // Asteroid(pos, vel, this.RADIUS, this.COLOR)
    var pos = [xDim / 2, yDim / 2];
    return new Ship(pos, [0,0], 16, Ship.COLOR);
  }

  Game.prototype.draw = function(ctx) {
    // console.log("drew!");
 //    console.log()

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    })

    this.target.draw(ctx);

    this.ship.draw(ctx);


    // this.bullets.forEach( function(bullet) {
    //   // debugger
    //   bullet.draw(ctx);
    // })
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship
    var target = this.target
    var that = this;
    this.asteroids.forEach( function(asteroid) {
      if( ship.isCollidedWith(asteroid) ){
        that.stop();
        that.level = 0;
        that.numAsteroids = 10;
        // alert("you lose!");
        that.restart();
      }
    });

    if(ship.isCollidedWith(target)) {
      // alert("you win!");
      that.stop();
      that.restart();

    };
  };

  Game.prototype.step = function(ctx) {

    this.move();
    this.draw(ctx);
    this.checkCollisions();
    this.bindKeyHandlers(); // called here instead of start for key ispressed function
  };

  Game.prototype.move = function() {
    var that = this

    this.asteroids.forEach( function(asteroid) {
      asteroid.move(that.DIM_X, that.DIM_Y);
    });
    // console.log(this.target)
    this.target.move(that.DIM_X, that.DIM_Y);

    this.ship.move(that.DIM_X, that.DIM_Y);

    // for(var i = 0; i < this.bullets.length; i++) {
//       var bullet = this.bullets[i]
//       console.log(this.bullets)
//       if( bullet.pos[0] > that.DIM_X || bullet.pos[0] < 0 ||
//         bullet.pos[1] > that.DIM_Y || bullet.pos[1] < 0) {
//           this.bullets.splice(i, 1);
//           i += 1
//       } else {
//         bullet.move(that.DIM_X, that.DIM_Y);
//       };
//     }

    // this.bullets.forEach( function(bullet) { // make bullets go away
    //   bullet.move(that.DIM_X, that.DIM_Y);
    // })
  };

  Game.prototype.start = function() {
    // var ctx = canvasEl.getContext("2d");
    // this.ctx = canvasEl;
    // console.log(this.canvas)
    var ctx = this.canvas;
    var game = this;
    intervalId = window.setInterval(function () {
      game.step(ctx);
    }, 30);
  };

  Game.prototype.restart = function() {
    this.level += 1;

    var xDim = this.DIM_X
    var yDim = this.DIM_Y

    if(this.level % 15 === 0){
      this.numAsteroids += 5;
    }
    var numAsteroids = this.numAsteroids;

    this.ship = this.makeShip(xDim, yDim);
    // console.log("restarting..." + this.ship.vel)
    this.asteroids = this.addAsteroids(numAsteroids);
    this.target = Target.makeTarget(xDim, yDim, this.ship.pos, this.level);
    this.bullets = [];
    this.start();
  };

  //
  // Game.prototype.restart = function() {
  //   var width = this.width;
  //   var height = this.height;
  //   var canvas = this.ctx;
  //   new Asteroids.Game(width, height, 50).start(canvas);
  // }

  Game.prototype.stop = function() {
    window.clearInterval(intervalId)
  }

  Game.prototype.bindKeyHandlers = function() {
    var that = this
    if(key.isPressed('up')) { that.ship.power([0,-1]) };
    if(key.isPressed('down')) { that.ship.power([0,1]) };
    if(key.isPressed('left')) { that.ship.power([-1,0]) };
    if(key.isPressed('right')) { that.ship.power([1,0]) };
    // if(key.isPressed('space')) { that.bullets.push(that.ship.fireBullet()) };
    key('x', function() { that.stop() });
    // key('space', function() { that.bullets.push(that.ship.fireBullet()) });
  }

  return root;
})(this);