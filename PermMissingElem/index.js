
function solution (A) {
  let missingElem = 1;
  let dictionary = {}
  for (let i = 0; i <= A.length; ++i) {
    dictionary[A[i]] = true
    if (missingElem == A[i])  {
      while(dictionary[missingElem]) {
        missingElem++
      }
    }
  }
  return missingElem;
}


module.exports = solution