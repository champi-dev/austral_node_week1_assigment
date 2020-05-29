var Bike = function (id, model, color, location) {
  this.id = id;
  this.model = model;
  this.color = color;
  this.location = location;
};

Bike.all = [];

Bike.add = function (bike) {
  Bike.all.push(bike);
};

Bike.findById = function (id) {
  var bike = Bike.all.find(b => b.id == id);
  if (bike) return bike;
  throw new Error(`Bike with ${id} does not exist`);
};

Bike.removeById = function (id) {
  var filtered = [];
  Bike.all.forEach(bike => {
    if (bike.id != id) filtered.push(bike);
  });
  Bike.all = filtered;
};

var a = new Bike(1, 'red', 'regular', [6.268082, -75.5646654]);
var b = new Bike(2, 'white', 'urban', [6.2742995, -75.5607923]);

Bike.add(a);
Bike.add(b);

module.exports = Bike;