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
  paint = new Paint("red", 10, 10)

});

describe('Paint', function () {
  it('should have a number of litres of paint', function () {
    const actual = paint.currentVolume;
    assert.strictEqual(actual, 10)

  });

  it('should be able to check if it is empty', function () {
    paint = new Paint("red", 10,0);
    const actual = paint.paintCheck();
    assert.strictEqual(actual, "empty")

  });
  it('should be able to empty itself of paint', function () {
    paint = new Paint("red", 10,10);
    paint.empty();
    const actual = paint.paintCheck();
    assert.equal(actual, "empty");
  });

});

beforeEach( function() {
  decorator = new Decorator();
  paint1 = new Paint("red", 10, 10);
  paint2 = new Paint("blue", 20, 10);
  paint3 = new Paint("blue", 20, 20);
})

describe('Decorator', function() {
  it('should start with an empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a can of paint to paint stock', function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [paint1, paint2]);

  });

  it('should be able to calculate total litres paint it has in stock', function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    const actualBlue = decorator.totalPaint("blue");
    assert.strictEqual(actualBlue, 30)
    // const actualRed = decorator.totalPaint("red");
    // assert.strictEqual(actualRed, 10)

  });

  it('should be able to calculate whether it has enough paint to paint a room', function () {
    let room = new Room(25);
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    const actualRed = decorator.jobMaterialsCheck(room,"red");
    assert.strictEqual(actualRed,"false");
    const actualBlue = decorator.jobMaterialsCheck(room,"blue");
    assert.strictEqual(actualBlue,"true");

  });

  it('should be able to paint room if it has enough paint in stock', function() {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    let lounge = new Room(25);
    decorator.paintRoom(lounge, "blue");
    const actual = lounge.paintedStatus;
    assert.equal(actual, "true");
  });

  it('should be able to decrease amount of paint in stock when painting');
  it('should be able to remove empty paint cans from stock');

});
