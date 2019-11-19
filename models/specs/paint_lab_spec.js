const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

describe('Room', function () {

  beforeEach( function() {
    room = new Room("25", "false"); 
  });

  it('should have an area in square meters', function() {

  });
  xit('should start not painted');
  xit('should be able to be painted');
});

describe('Paint', function () {
  xit('should have a number of litres of paint');
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
