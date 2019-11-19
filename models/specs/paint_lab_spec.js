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

  it('should be able to check if it is empty', function () {
    paint = new Paint(10,0);
    const actual = paint.paintCheck();
    assert.strictEqual(actual, "empty")

  });
  it('should be able to empty itself of paint', function () {
    paint = new Paint(10,10);
    paint.empty();
    const actual = paint.paintCheck();
    assert.equal(actual, "empty");
  });

});

beforeEach( function() {
  decorator = new Decorator();
  red = new Paint(10, 10);
  blue = new Paint(10, 20);
})

describe('Decorator', function() {
  it('start with an empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });

  it('be able to add a can of paint to paint stock', function () {
    decorator.addPaint(red);
    decorator.addPaint(blue);
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [red, blue]);

  });

  it('be able to calculate total litres paint it has in stock', function () {
    decorator.addPaint(red);
    decorator.addPaint(blue);
    const actual = decorator.totalPaint();
    assert.strictEqual(actual, 20)
  });

  xit('be able to calculate whether it has enough paint to paint a room');
  xit('be able to paint room if it has enough paint in stock');

});
