/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const tempArr = [];
  // Make a clone of initial array
  arr.forEach((item) => tempArr.push(item));
  // Save positions of all '-1' in initial array and also delete
  // ones from cloned array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
      tempArr.splice(tempArr.findIndex((item) => item === -1), 1);
    }
  }
  // Clone array now ready to be sorted
  tempArr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  // Insert '-1' in it's initial positions/indexes
  for (let i = 0; i < indexes.length; i++) {
    tempArr.splice(indexes[i], 0, -1);
  }
  return tempArr;
}

module.exports = sortByHeight;
