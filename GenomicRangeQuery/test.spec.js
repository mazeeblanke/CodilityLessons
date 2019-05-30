const {
  genomicRangeQuery,
  getMinimalImpactFactor,
  getPrefixSum,
  getDNAPositionDiff
} = require('./index');

let prefixSum = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [1, 2, 1, 0],
  [1, 3, 1, 0],
  [1, 3, 1, 1],
  [2, 3, 1, 1]
];

describe('Genomic Range Query', () => {
  it ('returns the denomic range query', () => {
    expect(genomicRangeQuery('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1])
  })
})

describe('getPrefixSum helper function', () => {
  it ('returns the right output', () => {
    expect(getPrefixSum('CAGCCTA')).toEqual(prefixSum);
  })
})

describe('getMinimalImpactFactor helper function', () => {

  it ('returns the right output (4)', () => {
    expect(getMinimalImpactFactor([0, 0, 0, 1])).toEqual(4);
  })

  it ('returns the right output (2)', () => {
    expect(getMinimalImpactFactor([0, 2, 0, 1])).toEqual(2);
  })

  it ('returns the right output (1)', () => {
    expect(getMinimalImpactFactor([1, 1, 0, 1])).toEqual(1);
  })

})

describe('getDNAPositionDiff helper function', () => {

  it ('returns the right output ([0, 2, 1, 0])', () => {
    expect(getDNAPositionDiff(2, 4, prefixSum)).toEqual([0, 2, 1, 0]);
  })

  it ('returns the right output ([0, 0, 0, 1])', () => {
    expect(getDNAPositionDiff(5, 5, prefixSum)).toEqual([0, 0, 0, 1]);
  })

})