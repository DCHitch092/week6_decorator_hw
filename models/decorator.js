const Decorator = function () {
  this.paintStock = [];

};

Decorator.prototype.addPaint = function(paint) {
  this.paintStock.push(paint);
};

module.exports = Decorator;
