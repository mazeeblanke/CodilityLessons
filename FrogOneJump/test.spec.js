const frogOneJump = require('./index');

describe('frog one jump', () => {

  it ('returns the earliest time a frog can jump to the other side', () => {
    expect(frogOneJump(3, [1, 3, 2])).toBe(2);
    expect(frogOneJump(5, [3])).toBe(-1);
    expect(frogOneJump(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
  });

});
