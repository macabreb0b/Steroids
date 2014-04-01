(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(parentObject) {
    function Surrogate() {};
    Surrogate.prototype = parentObject.prototype;
    this.prototype = new Surrogate();
  }

  var MovingObject = Asteroids.MovingObject

  var Asteroid = Asteroids.Asteroid

  var Target = Asteroids.Target = function() {
    MovingObject.apply(this, arguments);
  }

  Target.inherits(Asteroid)

  Target.COLORS = [
    '#F2CECE', // start pink
    '#EDBBBB',
    '#EBA9A9',
    '#EB9898',
    '#E88484',
    '#E87474',
    '#E66565',
    '#E65C5C',
    '#E34F4F',
    '#E34444',
    '#E03434',
    '#DE2626',
    '#DE1B1B',
    '#DB0B0B',
    '#D60000', // start greeny
    '#CDDBA4',
    '#C6DB8C',
    '#C2DB7D',
    '#BDD971',
    '#B6D65C',
    '#ACD145',
    '#A8D136',
    '#A0CF21',
    '#99CC0E',
    '#90C206',
    '#84B00B',
    '#73990B',
    '#5C7A09',
    '#455C07',
    '#D7BCE3', // start purply
    '#D3B1E3',
    '#C99EDE',
    '#C590DE',
    '#C285DE',
    '#B975D9',
    '#B367D6',
    '#A64ECF',
    '#A03CCF',
    '#992BCC',
    '#931CC9',
    '#8A11C2',
    '#8409BD',
    '#7C00B5',
    '#7207A3',
    '#D3DEB6',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#EDC7DA', // start purply pink
    '#EBBED4',
    '#EBAECC',
    '#E89EC3',
    '#E68AB8',
    '#E37BAF',
    '#E36DA8',
    '#E05A9D',
    '#DE4994',
    '#DB3086',
    '#D91C7A',
    '#D41373',
    '#C90869',
    '#BF0462',
    '#BA005D'

  ]

  Target.makeTarget = function(dimX, dimY, shipPos, level) {
    var vel = Asteroid.randomVec();
    var pos = Asteroid.randomPos(dimX, dimY, shipPos)
    return new Target(pos, vel, (Math.random() + 0.5) * 50, this.COLORS[level] )
  }


  return root;
})(this);