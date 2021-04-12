/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    result[row] = [];
    for (let el = 0; el < matrix[row].length; el++) {
      let count = 0;
      // If current element of input matrix is 'true' - it's a bomb,
      // always interpret it as '1'
      if (matrix[row][el]) {
        result[row].push(1);
      }
      // If current element is 'false' - count bombs in nearby cells
      // and push value based on this number in result array
      if (!matrix[row][el]) {
        if (matrix[row - 1] && matrix[row - 1][el - 1]) count++;
        if (matrix[row - 1] && matrix[row - 1][el]) count++;
        if (matrix[row - 1] && matrix[row - 1][el + 1]) count++;
        if (matrix[row][el - 1]) count++;
        if (matrix[row][el + 1]) count++;
        if (matrix[row + 1] && matrix[row + 1][el]) count++;
        if (matrix[row + 1] && matrix[row + 1][el + 1]) count++;
        if (matrix[row + 1] && matrix[row + 1][el - 1]) count++;

        result[row].push(count);
      }
    }
  }
  return result;
}

module.exports = minesweeper;
