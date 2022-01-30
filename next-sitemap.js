const globalSettings = require("./src/settings/globalSettings");
const siteUrl = globalSettings.meta.url;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
};
