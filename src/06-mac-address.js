/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const tempArr = n.split('-');
  // Define regex pattern to check if digits are hexadecimal
  const regex = /^[0-9a-fA-F]{2,}/;
  // Check every group of mac address to match regex
  for (let i = 0; i < tempArr.length; i++) {
    if (!regex.test(tempArr[i])) return false;
  }
  return true;
}

module.exports = isMAC48Address;
