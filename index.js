const autoColours = {};

const fs = require('fs');
const path = require('path');
const readline = require('linebyline');

autoColours.init = () => {
  autoColours.grabColoursFromFile('test.less')
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
};

autoColours.grabColoursFromFile = (colourFile) => {
  const arrayOfColours = [];
  return new Promise((resolve, reject) => {
    rl = readline(path.resolve(__dirname, colourFile));
    rl.on('line', (line, lineCount, byteCount) => {
      const foundColour = line.substr(line.indexOf('#'), 7);
      if( foundColour.substr(0, 1) === '#' ) {
        arrayOfColours.push({
          'lineNumber': lineCount,
          'colourFound': foundColour
        })
      }
    })
    .on('end', (something) => {
      resolve(arrayOfColours);
    })
    .on('error', (e) => {
      reject(e);
    });
  });
};

autoColours.init();

module.exports = autoColours;
