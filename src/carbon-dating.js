const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  throw new CustomError('Not implemented');
   if( typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity >  MODERN_ACTIVITY || isNaN(sampleActivity)) {
    return false;
  }
  let temp = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / temp );
  // remove line with error and write your code here
};
