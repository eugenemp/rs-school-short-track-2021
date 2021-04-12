/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  // Define regex to find each level's domain
  const tld = /\.\w*$/;
  const sld = /\w*(?=\.\w*$)/;
  const rld = /\w*(?=\.\w*\.\w*$)/;

  domains.forEach((domain, i) => {
    const first = domains[i].match(tld);
    const secnd = domains[i].match(sld);
    const third = domains[i].match(rld);
    // Add top domain to result obj or increase count if it already exist
    if (first) {
      if (!result[first]) result[first] = 1;
      else result[first]++;
    }
    // Add second level domain to result obj or increase count if it already exist
    if (secnd) {
      if (!result[`${first}.${secnd}`]) result[`${first}.${secnd}`] = 1;
      else result[`${first}.${secnd}`]++;
    }
    // Add second level domain to result obj or increase count if it already exist
    if (third) {
      if (!result[`${first}.${secnd}.${third}`]) result[`${first}.${secnd}.${third}`] = 1;
      else result[`${first}.${secnd}.${third}`]++;
    }
  });
  return result;
}

module.exports = getDNSStats;
