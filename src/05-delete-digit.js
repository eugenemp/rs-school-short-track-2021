/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const result = [];

  for (let i = 0; i < str.length; i++) {
    // At every iteration cut one digit at current index and push
    // result string to result array
    result.push(str.slice(0, i) + str.slice(i + 1));
  }
  // Get maximal number from result array
  return Math.max(...result);
}

module.exports = deleteDigit;
