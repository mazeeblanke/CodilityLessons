const tapeEquilibrium = require('./index');

describe('Tape Equilibrium', () => {
  it ('returns the minimal difference in the tape equilibrium', () => {
    expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1);
    expect(tapeEquilibrium([0,0])).toBe(0);
  })
});

