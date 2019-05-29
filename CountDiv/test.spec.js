const CountDiv = require('./index');

describe ('count div', () => {
  it ('returns the number of integers in the range divisible by k', () => {
    expect(CountDiv(6, 11, 2)).toBe(3);
    expect(CountDiv(1, 20, 5)).toBe(4);
    expect(CountDiv(1, 20, 2)).toBe(10);
    expect(CountDiv(1, 20, 3)).toBe(6);
    expect(CountDiv(1, 20, 4)).toBe(5);
    expect(CountDiv(1, 20, 6)).toBe(3);
    expect(CountDiv(1, 20, 7)).toBe(2);
    expect(CountDiv(0, 20, 7)).toBe(3);
    expect(CountDiv(0, 20, 8)).toBe(3);
    expect(CountDiv(0, 20, 9)).toBe(3);
    expect(CountDiv(0, 20, 10)).toBe(3);
    expect(CountDiv(0, 2, 3)).toBe(0);
    expect(CountDiv(0, 0, 11)).toBe(1);
    expect(CountDiv(0, 20, 2)).toBe(11);
    expect(CountDiv(10, 10, 5)).toBe(1);
    expect(CountDiv(11, 345, 17)).toBe(20);
    expect(CountDiv(1, 1, 11)).toBe(0);
    expect(CountDiv(10, 10, 7)).toBe(0);
    expect(CountDiv(10, 10, 20)).toBe(0);
  })
})
