function minAvgTwoSlice(A) {

  let movingSum = getMovingSum(A);


  let min = Infinity;
  let minLeftIndex= Infinity;
  let average;

  for (let j =0; j < A.length; ++j) {

      let h = j + 1;

      if (h <= A.length -1) {
          // console.log(h)
          average = (movingSum[h+1] - movingSum[j]) / 2
      }

      if (average < min) {
          // console.log(average)
          min = average;
          minLeftIndex = j
      }


      h = j + 2;

      if (h <= A.length -1) {
          // console.log(h)
          average = (movingSum[h+1] - movingSum[j]) / 3
      }

      if (average < min) {
          // console.log(average)
          min = average;
          minLeftIndex = j
      }

  }

  return minLeftIndex;
}



function getMovingSum (A) {
  let p = Array(A.length + 1);

  p[0] = 0;

  for (let i = 1; i < p.length; ++i) {
      p[i] = A[i-1] + p[i-1];
  }

  return p;


}

module.exports = minAvgTwoSlice