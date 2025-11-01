/** return the photos bashed on search query
 * @param {string} query - query string
 * @returns {Promise<Object>}
 */
export async function searchPhotos(query) {
  return (
    await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=1000&order_by=relevant&client_id=${process.env.UNSPLASH_CID}`,
    )
  ).json();
}
