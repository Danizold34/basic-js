const CustomError = require("../extensions/custom-error");

module.exports = function countCats(countCats) {
  throw new CustomError('Not implemented');
  countCats.flat(Infinity);
  for(let i= 0; i< countCats.length ; i++){
    if ( countCats[i] == "^^") let count++
  }
    return count;
  // remove line with error and write your code here
};
