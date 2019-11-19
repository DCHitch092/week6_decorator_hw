const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function () {

  let room;

  beforeEach( function() {
    room = new Room(25);
  });

  it('should have an area in square meters', function() {
    const actual = room.area;
    assert.strictEqual(actual, 25)

  });

  it('should start not painted', function () {
    const actual = room.paintedStatus;
    assert.strictEqual(actual, "false")
  });

  it('should be able to be painted', function () {
    room.paint();
    const actual = room.paintedStatus;
    assert.strictEqual(actual, "true")
  });

});

let paint;

beforeEach( function() {
  paint = new Paint(10, 10)

});

describe('Paint', function () {
  it('should have a number of litres of paint', function () {
    const actual = paint.currentVolume;
    assert.strictEqual(actual, 10)

  });

  xit('should be able to check if it is empty');
  xit('should be able to empty itself of paint');
});

describe('Decorator', function() {
  xit('start with an empty paint stock');
  xit('be able to add a can of paint to paint stock');
  xit('be able to calculate total litres paint it has in stock');
  xit('be able to calculate whether it has enough paint to paint a room');
  xit('be able to paint room if it has enough paint in stock');

});
