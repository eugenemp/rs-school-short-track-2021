/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // If next char is tha same - increase counter
    if (str[i] === str[i + 1]) count++;
    // If next char is not the same - check counter
    if (str[i] !== str[i + 1]) {
      count++;
      // If repeat count is more then one - add num in front of char
      if (count > 1) {
        result = result.concat(`${count}${str[i]}`);
      } else {
        result = result.concat(`${str[i]}`);
      }
      count = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
