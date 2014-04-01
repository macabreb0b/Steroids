function MovingObject(name, location) {
  console.log("instantiated a moving object")
  console.log(this)
  this.name = name;
  this.location = location;
}

MovingObject.prototype.moveLeft = function() {
  this.location -= 1;
}

MovingObject.prototype.moveRight = function() {
  this.location += 1;
}

MovingObject.prototype.sayLocation = function() {
  console.log("I am at location " + this.location);
}

Function.prototype.inherits = function(parentObject) {
  function Surrogate() {};
  Surrogate.prototype = parentObject.prototype;
  this.prototype = new Surrogate();
}

function Ship() {
  MovingObject.apply(this, arguments)
};
Ship.inherits(MovingObject);


s = new Ship("battleship", 3)
m = new MovingObject("asteroid", 1)


s.sayLocation()
m.sayLocation()
