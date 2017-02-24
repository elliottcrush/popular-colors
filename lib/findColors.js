const findColors = {};

const fs = require('fs');
const path = require('path');
const readline = require('linebyline');

findColors.grabcolorsFromFile = (colorFile) => {
  const arrayOfcolors = [];
  return new Promise((resolve, reject) => {
    rl = readline(path.resolve(__dirname, colorFile));
    rl.on('line', (line, lineCount, byteCount) => {
      const foundcolor = line.substr(line.indexOf('#'), 7);
      if( foundcolor.substr(0, 1) === '#' ) {
        arrayOfcolors.push({
          'lineNumber': lineCount,
          'colorFound': foundcolor
        })
      }
    })
    .on('end', (something) => {
      resolve(arrayOfcolors);
    })
    .on('error', (e) => {
      reject(e);
    });
  });
};

module.exports = findColors;
