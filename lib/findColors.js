const findColors = {};

const fs = require('fs');
const path = require('path');
const readline = require('linebyline');

findColors.grabcolorsFromFile = (colorFile) => {
  const colors = [];
  colors.push({'file': colorFile, 'items': []});
  return new Promise((resolve, reject) => {
    rl = readline(path.resolve(__dirname, colorFile));
    rl.on('line', (line, lineCount, byteCount) => {
      const foundColor = line.substr(line.indexOf('#'), 7);
      if( foundColor.substr(0, 1) === '#' ) {
        colors[0].items.push({
          'lineNumber': lineCount,
          'colorFound': foundColor
        })
      }
    })
    .on('end', (something) => {
      resolve(colors);
    })
    .on('error', (e) => {
      reject(e);
    });
  });
};

module.exports = findColors;
