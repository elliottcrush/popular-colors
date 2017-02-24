const findColors = require('./lib/findColors');

const colors = {};

colors.returnColorsAsJson = (config) => {
  return new Promise((resolve, reject) => {
    findColors.grabcolorsFromFile('../node_modules/bootstrap/less/variables.less')
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  });
};

module.exports = colors;
