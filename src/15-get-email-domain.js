/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Using regex positive lookbehind contruct '(&<=text)'
  const regex = /(?<=@)[\w-]{1,}\.\w{1,}/;

  return email.match(regex)[0];
}

module.exports = getEmailDomain;
