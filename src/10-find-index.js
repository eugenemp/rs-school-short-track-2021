/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let maxIndex = array.length - 1;
  let minIndex = 0;
  let currentIndex = 0;
  // Implement binary search algorithm
  while (array[currentIndex] !== value) {
    // Find middle element in whole array or range of elements
    currentIndex = Math.round((minIndex + maxIndex) / 2);
    // If value at the middle of array/range is lower than
    // target value - search in higher half
    if (array[currentIndex] < value) minIndex = currentIndex + 1;
    // If value at the middle of array/range is higher than
    // target value - search in lower half
    if (array[currentIndex] > value) maxIndex = currentIndex - 1;
  }
  // Once middle element equals target value - return it's index
  return currentIndex;
}

module.exports = findIndex;
