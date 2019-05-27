
function solution(A) {
  let sumRight = A.reduce((agg, curr, index) => agg + curr, 0)
  let sumLeft = 0;
  let min = Infinity;
  A.forEach((item, index) => {
    if (index < A.length - 1)
    {
      sumRight -= item
      sumLeft += item
      min = Math.min(Math.abs(sumRight - sumLeft), min);
    }
  });
  return min;
}

module.exports = solution;

