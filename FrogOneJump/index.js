
function solution (X, A) {
  let counters = Array(X+1).fill(0);
  let remaining = X;
  let earliestTime = -1;


  for (let i = 0; i < A.length; i++) {
    if (!counters[A[i]]) remaining--

    counters[A[i]]++

    if (!remaining) {
      earliestTime = i;
      break;
    }
  }

  return earliestTime;
}

module.exports = solution;
