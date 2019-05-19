const minAvgTwoSlice = require('./index');

describe('MinAvgTwoSlice', () => {

  it ('returns the left index of the smallest/minimum avg slice', () => {

    expect(minAvgTwoSlice([ 4, 2, 2, 5, 1, 5, 8])).toBe(1);
    expect(minAvgTwoSlice([10, 10, -1, 2, 4, -1, 2, -1])).toBe(5);
    expect(minAvgTwoSlice( [-3, -5, -8, -4, -10])).toBe(2);

  })

})