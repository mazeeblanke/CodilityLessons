const oddOccurencesInArray = require('./index');

describe('Odd Occurences in Array', () => {
  it ('returns the unpaired item in the array', () => {
    expect(oddOccurencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7);
  })
})