function solution (A) {
  let count0 = 0;
  let total = 0;

  A.forEach((elem) => {
    if (elem === 0) count0++;
    if (elem === 1) {
      total = count0 * 1 + total;
    }
  })

  return total > 1000000000
    ? -1
    : total;
}

module.exports = solution;
