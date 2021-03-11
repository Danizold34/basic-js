const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  throw new CustomError('Not implemented');
   if(isNaN(sampleActivity || typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) return false; 
  let temporary = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / temporary);
  // remove line with error and write your code here
};
