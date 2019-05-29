
function solution (A) {
  let isPermutation = 1;
  let counters = [1];

  for (let i = 0; i < A.length; ++i) {
    counters[A[i]] = (counters[A[i]] || 0) + 1;
    if (counters[A[i]] > 1) {
      isPermutation = 0
      return isPermutation;
    }
  }

  for (let i = 0; i < counters.length; ++i) {
    if (!counters[i]) {
      isPermutation = 0;
      break;
    }
  }

  return isPermutation;
}

module.exports = solution