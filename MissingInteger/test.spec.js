const missingInteger = require('./index');

describe('Missing Integer', () => {
  it ('returns the smallest positive integer', () => {
    expect(missingInteger([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(missingInteger([1, 2, 3])).toBe(4);
    expect(missingInteger([-1, -3])).toBe(1);
    expect(missingInteger([1])).toBe(2);
  })
})
