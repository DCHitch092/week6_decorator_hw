const Paint = function (colour, originalVolume, currentVolume) {
  this.colour = colour;
  this.originalVolume = originalVolume;
  this.currentVolume = currentVolume;


};

Paint.prototype.paintCheck = function () {
  if ( this.currentVolume !== 0) {
    this.paintStatus = `${ this.originalVolume/this.currentVolume*100 }%`
  } else if (this.currentVolume == 0) {
    this.paintStatus = "empty";
  };
  return this.paintStatus;
};

Paint.prototype.empty = function () {
  this.currentVolume = 0;
};

Paint.prototype.updateCurrentVolume = function (volume) {
  this.currentVolume = volume;
}

module.exports = Paint;
