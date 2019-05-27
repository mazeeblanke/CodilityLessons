const binaryGap = require('./index');

describe('Binary Gap', () => {
  it ('returns the largest binary gap given a certain number', () => {
    expect(binaryGap(1041)).toBe(5);
    expect(binaryGap(32)).toBe(0);
    expect(binaryGap(15)).toBe(0);
    expect(binaryGap(529)).toBe(4);
    expect(binaryGap(9)).toBe(2);
  })
})