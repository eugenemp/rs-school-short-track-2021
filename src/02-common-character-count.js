/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  // Split second string to use array's splice method
  const str2 = s2.split('');

  for (let i = 0; i < s1.length; i++) {
    // If letter is common between s1 and s2, delete it from s2
    // so it wiil not be counted again
    const index = str2.indexOf(s1[i]);
    if (index >= 0) {
      str2.splice(index, 1);
      count++;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
