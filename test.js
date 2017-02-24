const popularColors = require('./index.js');

popularColors.returnColorsAsJson( { outputData: 'json' } )
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
