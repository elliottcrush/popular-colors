# Popular Colors

A completely pointless and arbitrary package which allows you to query a directory of files in order to receive a concise output of what hexadecimal colors that have been used.

## How do I get the colors?

```npm install popular-colors```

```javascript
popularColors.returnColorsAsJson( { outputData: 'json' } )
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```
#### popularColors.returnColorsAsJson()
 - Returns a promise to resolve a file full of lovely colors

## Wishlist

 - Support for RGB as well as hexadecimal
 - Create inconsistency for the spelling of color / colours to confuse and annoy
 - Create arbitrary tests that give us confidence we're providing a package that no one is really going to use
