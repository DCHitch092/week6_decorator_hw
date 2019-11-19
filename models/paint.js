const Paint = function (originalVolume, currentVolume) {
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

module.exports = Paint;
