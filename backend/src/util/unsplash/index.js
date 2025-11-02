const url = require("../url");
/** return the photos bashed on search query
 * @param {string} paramobj - query object
 * @returns {Promise<Object>}
 */
async function searchPhotosByParamerterObject(paramobj) {
  return searchPhotosByParamerter(url.getQueryParameter(paramobj));
}
/** return the photos bashed on search query
 * @param {string} parameter - query string
 * @returns {Promise<Object>}
 */
async function searchPhotosByParamerter(parameter) {
  return (
    await fetch(
      `https://api.unsplash.com/search/photos?${parameter}&order_by=relevant&client_id=${process.env.UNSPLASH_CID}`,
    )
  ).json();
}
/** return the photos bashed on search query
 * @param {string} query - query string
 * @returns {Promise<Object>}
 */
async function searchPhotos(query) {
  return (
    await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=100&order_by=relevant&client_id=${process.env.UNSPLASH_CID}`,
    )
  ).json();
}

module.exports = {
  searchPhotos,
  searchPhotosByParamerterObject,
  searchPhotosByParamerter,
};
