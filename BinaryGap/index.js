

function solution (N) {
  let count = 0;
  let max = 0;
  let hasStarted = false;
  let binaryRepresentation = getBinaryRepresentation(N);
  for (let i = 0; i < binaryRepresentation.length; ++i) {
    if (binaryRepresentation[i] === '1') {
     max = Math.max(count, max);
     hasStarted = true
     count = 0
    } else if (hasStarted) {
      count++
    }
  }
  return max;

}

function getBinaryRepresentation (N) {
  return N.toString(2);
}

module.exports = solution;
