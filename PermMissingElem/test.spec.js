const permMissingElem = require('./index');

describe('perm missing elem', () => {
  it ('returns the perm missing element', () => {
    expect(permMissingElem([2, 3, 1, 5])).toBe(4);
    expect(permMissingElem([1])).toBe(2);
  })
})