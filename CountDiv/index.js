function solution (A, B, K) {
  if (B - A === 0 && B == 0) return 1;
  if (B - A === 0 && B > K && B % K === 0 ) return 1;
  if (B - A === 0 && B > K && B % K > 0 ) return 0;
  if (B < K) return 0;

  return Math.floor(B/K) - Math.floor((A - 1)/K);
}

module.exports = solution;