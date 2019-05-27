function solution (A) {
  let unprocessed = {};
  let left;

  if (!A.length) return;

  A.forEach((item) => {
     if (unprocessed[item]) delete unprocessed[item];
     else if (!unprocessed[item]) unprocessed[item] = item
  })

  if (Object.keys(unprocessed).length) {
    left = Object.values(unprocessed)[0];
  }

  return left;
}

module.exports = solution