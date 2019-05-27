
function solution(A) {
  const dictionary = {}
  let minimum = 1

  A.forEach((element) => {
      dictionary[element] = true
      if (element === minimum) {
          while (dictionary[minimum]) {
              minimum++
          }
      }
  })

  return minimum;

}

module.exports = solution
