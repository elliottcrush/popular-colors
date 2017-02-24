const findColors = require('./lib/findColors');

const colors = {};

colors.returnColorsAsJson = (config) => {
  if( !config.pathToFile ) throw 'Failed to provide a file path';
  return new Promise((resolve, reject) => {
    findColors.grabcolorsFromFile(config.pathToFile)
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  });
};

module.exports = colors;
