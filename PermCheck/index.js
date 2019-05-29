
function solution (A) {
  let isPermutation = 1;
  let counters = [1];

  A.forEach ((elem) => {
    counters[elem] = (counters[elem] || 0) + 1;
  })

  for (let i = 0; i < counters.length; ++i) {
    if (!counters[i]) {
      isPermutation = 0;
      break;
    }
  }

  return isPermutation;
}

module.exports = solution