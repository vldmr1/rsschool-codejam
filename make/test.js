const assert = require('assert');

Object.freeze(assert);
const make = require('./make');

describe('Make', () => {
  it('1', () => {
    const made = make(1)((a, b) => a + b);
    assert.equal(made, 1);
  });
});

describe('Make', () => {
  it('2', () => {
    const made = make(80)(58)(390)((a, b) => a + b);
    assert.equal(made, 528);
  });
});

describe('Make', () => {
  it('3', () => {
    const made = make(14)(80)(44)((a, b) => a - b);
    assert.equal(made, -110);
  });
});

describe('Make', () => {
  it('4', () => {
    const made = make(9)(9)((a, b) => a ** b);
    assert.equal(made, 387420489);
  });
});


describe('Make', () => {
  it('5', () => {
    const made = make(598984)(34)((a, b) => a / b);
    assert.equal(made, 17617.176470588234);
  });
});

describe('Make', () => {
  it('6', () => {
    const made = make(0)(-5)(3)(44)(-60)(1, 3, 5)((a, b) => a + b);
    assert.equal(made, -9);
  });
});

describe('Make', () => {
  it('7', () => {
    const made = make(1)(0, 0, 0, 0, 0, 0, 1)(0, 0, 0, 581424397755)((a, b) => a ** b);
    assert.equal(made, 1);
  });
});

describe('Make', () => {
  it('8', () => {
    const made = make(4)(8)(15)(16)(23)(42)((a, b) => a * b);
    assert.equal(made, 7418880);
  });
});
