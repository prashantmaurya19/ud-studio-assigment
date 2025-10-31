const fs = require("fs");
const path = require("path");

/**
 * Gets a list of directories within a specified path.
 * @param {string} directoryPath The path to the directory to scan.
 * @returns {fs.Dirent[]} A promise that resolves with an array of directory names.
 */
function getDirectories(directoryPath) {
  return fs.readdirSync(directoryPath, { withFileTypes: true });
}

module.exports = {
  getDirectories,
};
