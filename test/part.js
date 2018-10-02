'use strict';
var chai = require('chai');
var expect = chai.expect;

const Part = require('../src/lib/part');
let part;

describe('Part', () => {

  const word = 'Hey';

  beforeEach(() => {
    part = new Part({word});
  })

  afterEach(() => {
    part = undefined;
  })

  it('Part returned true', async () => {
    const result = part.say({repeat: 2});
    expect(result).is.true;
  })

})