const Decorator = function () {
  this.paintStock = [];

};

Decorator.prototype.addPaint = function(paint) {
  this.paintStock.push(paint);
};

Decorator.prototype.totalPaint = function(colour) {
  var total = 0;
  for (var paint of this.paintStock) {
      if (paint.colour == colour){
      total += paint.currentVolume;
    }
  }
  return total;
}

Decorator.prototype.jobMaterialsCheck = function (room, colour){
  let paintAmount = this.totalPaint(colour);
  let roomAmount = room.area;
  let check = paintAmount - roomAmount
  if (check >= 0) {
    return "true";
  } else {
    return "false";
  }};

module.exports = Decorator;
