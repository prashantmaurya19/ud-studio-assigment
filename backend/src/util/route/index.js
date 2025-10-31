const { Router } = require("express");
const { getDirectories } = require("../file");

/**
 * require all the sub routes and link with the
 * router r
 * @param {String} dirpath
 * @param {function(string,object):void} callback
 */
function requireAllSubModule(dirpath, callback) {
  for (const d of getDirectories(`./src/${dirpath}`)) {
    if (d.name.includes(".")) continue;
    callback(
      d.name,
      require(`../../${dirpath.replace("./src", "")}/${d.name}`),
    );
  }
}
/**
 * import all the sub routes and link with the
 * router r
 * @param {Router} r
 * @param {String} dirpath
 */
function routeByDir(r, dirpath) {
  requireAllSubModule(dirpath, (name, m) => {
    r.use(`/${name}`, m);
  });
}

module.exports = {
  routeByDir,
  requireAllSubModule,
};
