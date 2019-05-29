const passingCars = require('./index');

describe('Passing Cars', () => {
  it ('returns number of pairs of passing cars', () => {
    expect(passingCars([0, 1])).toBe(1);
    expect(passingCars([1, 0, 1])).toBe(1);
    expect(passingCars([0, 0, 1])).toBe(2);
    expect(passingCars([0, 1, 1])).toBe(2);
    expect(passingCars([1, 0, 1, 0])).toBe(1);
    expect(passingCars([1, 0, 0, 0])).toBe(0);
    expect(passingCars([0, 1, 0, 1, 1])).toBe(5);
  })

  it ('returns -1 if the passing cars exceed 1,000,000,000', () => {
    // expect(passingCars())
  })
})