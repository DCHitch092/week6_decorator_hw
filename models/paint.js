const Paint = function (volume) {
  this.volume = volume;
  const originalVolume = this.volume;
  if ( this.volume !== 0) {
    this.emptyStatus = `${ originalVolume/this.volume*100 }%`
  } else {
    this.emptyStatus = "empty"
  };

};
