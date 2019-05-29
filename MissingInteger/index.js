
function solution(A) {

  let minimum = 1
  let count = []

  A.forEach((element) => {
    count[element] = (count[element] || 0) + 1
  })

  while (count[minimum]) {
    minimum++
  }

  return minimum;

}

module.exports = solution
