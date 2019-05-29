const frogJmp = require('./index');

describe('frog jmp', () => {
  it ('returns the minimal number of jumps', () => {
    expect(frogJmp(10, 85, 30)).toBe(3);
    expect(frogJmp(1, 5, 3)).toBe(2);
    expect(frogJmp(1, 5, 1)).toBe(4);
    expect(frogJmp(0, 55, 15)).toBe(4);
  })
});
