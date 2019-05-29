const cyclicRotation = require('./index');

describe('cyclic rotation', () => {
  it ('returns the rotated version of the array', () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    expect(cyclicRotation([0, 0, 0], 1)).toEqual([0, 0, 0]);
    expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
})