/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // Use object to count the number that each name repeats
  const counts = {};
  const output = [];

  for (let i = 0; i < names.length; i++) {
    // If current name not in count object - pass it to output without postfix
    if (!counts[names[i]]) {
      // Also check if the name has postfix as part of it,
      // if so - check if it not conflicts with the names in output
      if (output.includes(names[i])) {
        counts[names[i]] = 1;
        output.push(`${names[i]}(${counts[names[i]]})`);
      } else {
        counts[names[i]] = 1;
        output.push(names[i]);
      }
      // If name is already in object - add postfix with it's count
    } else if (counts[names[i]]) {
      output.push(`${names[i]}(${counts[names[i]]})`);
      counts[names[i]]++;
    }
  }

  return output;
}

module.exports = renameFiles;
