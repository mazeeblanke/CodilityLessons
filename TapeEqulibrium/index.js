// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape. Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1]. The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])| In other words, it is the absolute difference between the sum of the rst part and the sum of the second part. For example, consider array A such that:
// Solution
// Programming language used: JavaScript
// Total time used: 5 minutes
// Effective time used: 5 minutes
// Notes: not dened yet
// Task timeline
// 
// 
// 
// Check out Codility training tasks
// Anonymous
// Test Score
// 100 out of 100 points 100%
// Tasks in Test
// Time Spent Task Score
// TapeEquilibrium Submitted in: JavaScript
// 5 min 100%
// Task Score Correctness Performance
// EASY
// 1. TapeEquilibrium Minimize the value | (A[0] + ... + A[P-1]) (A[P] + ... + A[N-1])|.
// 100% 100% 100%
//   A[0] = 3   A[1] = 1   A[2] = 2   A[3] = 4   A[4] = 3 We can split this tape in four places:
// P = 1, difference = |3 − 10| = 7  P = 2, difference = |4 − 9| = 5 P = 3, difference = |6 − 7| = 1 P = 4, difference = |10 − 3| = 7
// Write a function:
// function solution(A);
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved. For example, given:  A[0] = 3   A[1] = 1   A[2] = 2   A[3] = 4   A[4] = 3 the function should return 1, as explained above. Write an ecient algorithm for the following assumptions:
// N is an integer within the range [2..100,000]; each element of array A is an integer within the range [−1,000..1,000].

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
