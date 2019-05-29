
function solution (A, K) {
  if (!A.length) return [];
  for (i = 0; i < K; i++) {
    A.unshift(A.pop())
  }
  return A
}


module.exports = solution;