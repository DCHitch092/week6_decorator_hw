const Paint = function (originalVolume, currentVolume) {
  this.originalVolume = originalVolume;
  this.currentVolume = currentVolume;
  if ( this.currentVolume !== 0) {
    this.paintStatus = `${ originalVolume/this.volume*100 }%`
  } else {
    this.paintStatus = "empty";
  };

};

Paint.prototype.paintCheck = function () {
  return this.paintStatus;
};

module.exports = Paint;
