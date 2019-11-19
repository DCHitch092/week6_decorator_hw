const Room = function (area, paintedStatus = "false") {
  this.area = area;
  this.paintedStatus = paintedStatus;
};

Room.prototype.paint = function () {
  this.paintedStatus = "true";

};

module.exports = Room;
