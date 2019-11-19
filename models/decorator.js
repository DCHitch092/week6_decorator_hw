const Decorator = function () {
  this.paintStock = [];

};

Decorator.prototype.addPaint = function(paint) {
  this.paintStock.push(paint);
};

Decorator.prototype.totalPaint = function() {
  var total = 0;
  for (var paint of this.paintStock) {
      total += paint.currentVolume;
  }
  return total;
}

module.exports = Decorator;
