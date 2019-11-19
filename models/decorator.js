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

Decorator.prototype.paintRoom = function(room, colour) {
  let ready = this.jobMaterialsCheck(room, colour);
  if (ready === "true") { room.paint(); };
  this.decreasePaint(colour, room.area);
}

Decorator.prototype.decreasePaint = function(colour, amount){
  for (var paint of this.paintStock){
    if ( // more paint than amount
      paint.colour == colour && paint.currentVolume > amount && amount != 0) {
      let newVolume = paint.currentVolume - amount;
      paint.updateCurrentVolume(newVolume);
      amount != 0;
    } else if ( // less paint than amount
      paint.colour == colour && paint.currentVolume <= amount && amount > 0){
      amount -= paint.currentVolume;
      paint.empty();
    } else if (amount == 0){
      return true;
    }
  }
};

Decorator.prototype.testIfEmpty = function() {
  for (var paint of this.paintStock){
    // paint.paintCheck;
    if(paint.currentVolume == 0){
      let index = this.paintStock.indexOf(paint);
      this.paintStock.splice(index, 1);
    }
  }

};

module.exports = Decorator;
