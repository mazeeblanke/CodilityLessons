function minAvgTwoSlice(A) {

  let movingSum = getMovingSum(A);

  let minimumAverage = Infinity;
  let minLeftIndex = Infinity;
  let average;

  for (let j = 0; j < A.length; ++j) {

    // The idea here is for positive numbers, you will always obtain the samllest average from 2 integers rather than more
    // while for negative you will always get the smallest/ largest negative number from either the average of 2 or 3 integers rather than more
    [
      {
        divisor: 2,
        rightIndex: j + 1
      },
      {
        divisor: 3,
        rightIndex: j + 2
      }
    ].forEach(({ divisor, rightIndex }) => {

      if (rightIndex <= A.length - 1) {
        average = (movingSum[rightIndex + 1] - movingSum[j]) / divisor
      }

      if (average < minimumAverage) {
        minimumAverage = average;
        minLeftIndex = j
      }

    });

  }

  return minLeftIndex;
}


// Calculate the moving sum
function getMovingSum (A) {
  let p = Array(A.length + 1);

  p[0] = 0;

  for (let i = 1; i < p.length; ++i) {
      p[i] = A[i-1] + p[i-1];
  }

  return p;
}

module.exports = minAvgTwoSlice
