function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let max = 0;
  let last = 0;
  let counters = Array(N).fill(max);

  A.forEach((a, index) => {

    if (a >= 1 && a <= N ) {
      counters[a - 1] += 1;
      max = Math.max(max, counters[a - 1]);
    } else if (N + 1 == a && last != (N+1)) {
      counters.fill(max)
    }

    last = a

  });

  return counters;

}

module.exports = solution
