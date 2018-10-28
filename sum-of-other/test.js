const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sum-of-other');


describe('Sum', () => {
  it('1', () => {
    const sum = sumOfOther([0, 0]);
    assert.deepEqual(sum, [0, 0]);
  });
});

describe('Sum', () => {
  it('2', () => {
    assert([]);
  });
});

describe('Sum', () => {
  it('3', () => {
    const sum = sumOfOther([1, 2]);
    assert.deepEqual(sum, [2, 1]);
  });
});

describe('Sum', () => {
  it('4', () => {
    const sum = sumOfOther([55, 13, 35, 30]);
    assert.deepEqual(sum, [78, 120, 98, 103]);
  });
});


describe('Sum', () => {
  it('5', () => {
    const sum = sumOfOther([1, 2, 3, 4, 5]);
    assert.deepEqual(sum, [14, 13, 12, 11, 10]);
  });
});

describe('Sum', () => {
  it('6', () => {
    const sum = sumOfOther([0, 0, -20, -110, 2, 0, 4]);
    assert.deepEqual(sum, [-124, -124, -104, -14, -126, -124, -128]);
  });
});

describe('Sum', () => {
  it('7', () => {
    const sum = sumOfOther([-2, 4, -5, -33, 40]);
    assert.deepEqual(sum, [6, 0, 9, 37, -36]);
  });
});

describe('Sum', () => {
  it('8', () => {
    const sum = sumOfOther([78, 120, 98, 103]);
    assert.deepEqual(sum, [321, 279, 301, 296]);
  });
});
