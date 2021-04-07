/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];

  matrix.forEach((subArr, index) => {
    for (let i = 0; i < subArr.length; i++) {
      // Check if the number at the same index of upper array is not zero
      // If it is zero, skip current number
      // If there is no upper array push all numbers as is
      if (matrix[index - 1]) {
        if (matrix[index - 1][i] !== 0) result.push(subArr[i]);
      } else result.push(subArr[i]);
    }
  });
  // Sum all numbers in result array
  return result.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
