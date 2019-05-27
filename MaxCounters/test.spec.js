const maxCounters = require('./index');

describe('Max Counters', () => {
  it ('returns the right sequence', () => {

    expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);

  })
})