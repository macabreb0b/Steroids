var sum = function() {
  var total = 0
  for(var i=0;i<arguments.length; i++) {
    total += arguments[i]
  }
  return total;
}

var sayName = function() {
  return this.age;
}

function Dog(age) {
  this.age = age;
}

var favoriteToys = function() {
  for(var i = 0; i<arguments.length; i++) {
    console.log("I love my " + arguments[i])
  }
}


Function.prototype.myBind = function() {
  var that = this;
  var args = Array.prototype.slice.call(arguments)
  myObj = args.shift();
  return (function() {
    var newArgs = Array.prototype.slice.call(arguments)
    return that.apply(myObj, args.concat(newArgs))
  })
}

var dog = {
  age: 5
}

function someFn(a, b, c) {
  return a + b + c + this.age;
}

var boundFn = someFn.myBind(dog, 2);
console.log(boundFn(3,4));






// g = new Dog(3);
// var boundSayName = sayName.myBind(g);
// console.log(boundSayName());

// var boundFavoriteToys = favoriteToys.myBind(g)
// boundFavoriteToys("squeaky", "ball", "kong");

// var curriedSum = function(numArgs) {
//   var i = 0
//   var numbers = []
//   var _curriedSum = function(number) {
//     console.log("I'm currying!")
//     numbers.push(number);
//
//     if(numbers.length === numArgs) {
//       var sum = 0
//       for(var f = 0; f < numbers.length; f++) {
//         sum += numbers[f];
//       }
//       return sum
//     } else {
//       return _curriedSum
//     }
//   }
//   return (_curriedSum)
// }
//
// console.log(curriedSum(3)(2)(5)(3))
var sum = function() {
  var total = 0
  for(var i=0;i<arguments.length; i++) {
    total += arguments[i]
  }
  return total;
}


var curriedSum = function(numArgs) {
  var numbers = []
  var _curriedSum = function(number) {
    console.log("I'm currying!")
    numbers.push(number);

    if(numbers.length === numArgs) {
      var sum = 0
      for(var f = 0; f < numbers.length; f++) {
        sum += numbers[f];
      }
      return sum
    } else {
      return _curriedSum
    }
  }
  return (_curriedSum)
}

Function.prototype.curry = function(numArgs) {
  var agmts = []
  var ourFunction = this;
  var curryFunction = function(arg) {
    agmts.push(arg);
    if (agmts.length === numArgs) {
      return ourFunction.apply(null, agmts);
    } else {
      return curryFunction;
    }
  }
  return curryFunction;
}


// var thing = sum.curry(3);
// var thing2 = thing(5);
// var thing3 = thing2(6);
// console.log(thing3);
// var result = thing3(2);
// console.log(result);
//
//








