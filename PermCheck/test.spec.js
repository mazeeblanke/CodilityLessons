const permCheck = require('./index');

describe('perm check', () => {
  it('returns 1 if A is a permutation', () => {
    expect(permCheck([4, 1, 3, 2])).toBe(1);
  })

  it ('returns 0 if A ia not a permutation', () => {
    expect(permCheck([4, 1, 3])).toBe(0);
  })

  it ('returns 0 if A contains a single element', () => {
    expect(permCheck([2])).toBe(0);
  })

  it ('returns 0 if A contains a repeated elements', () => {
    expect(permCheck([2, 2])).toBe(0);
    expect(permCheck([1, 1])).toBe(0);
  })
})