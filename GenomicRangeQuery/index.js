
// TODO Check if this can be refactored further

function solution (S, P, Q) {
  const prefixSum = getPrefixSum(S);
  return P.map((elem, index) => {
    const DNAPositionDiff = getDNAPositionDiff(elem, Q[index], prefixSum);
    return getMinimalImpactFactor(DNAPositionDiff);
  })
}

const getMinimalImpactFactor = (DNAPositionDiff) => {
  let minImpactFactor;
  for (let i = 1; i <= DNAPositionDiff.length; ++i) {
    if (DNAPositionDiff[i - 1] > 0) {
      minImpactFactor = i
      break;
    }
  }

  return minImpactFactor;
}

const getDNAPositionDiff = (leftPosition, rightPosition, prefixSum) => {

  const leftValue = prefixSum[leftPosition]

  const rightValue = prefixSum[rightPosition + 1]

  return [
    rightValue[0] - leftValue[0],
    rightValue[1] - leftValue[1],
    rightValue[2] - leftValue[2],
    rightValue[3] - leftValue[3],
  ]

}

const getPrefixSum = (DNA) => {
  // [0, 0, 0, 0] maps to [A, C, G, T]

  let sum = [0, 0, 0, 0]
  let prefixSum = [[0, 0, 0, 0]]
  DNA
    .split('')
    .forEach((elem) => {
      let _sum = [ ...sum ];
      if (elem === 'A') _sum[0]++
      if (elem === 'C') _sum[1]++
      if (elem === 'G') _sum[2]++
      if (elem === 'T') _sum[3]++

      sum = _sum
      prefixSum.push(sum)
      // prefixSum = prefixSum.concat([sum]);
    })
  return prefixSum;
}

exports.getPrefixSum = getPrefixSum;

exports.genomicRangeQuery = solution;

exports.getMinimalImpactFactor = getMinimalImpactFactor;

exports.getDNAPositionDiff = getDNAPositionDiff;