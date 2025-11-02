/** return String combining Query parameters
 * @param {object} query - query object
 * @returns {string}
 */
export function getQueryParameter(query) {
  let res = "";
  for (const i in query) {
    res = res.concat(`&${i}=${query[i]}`);
  }
  return res.slice(1);
}
