const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 let tmp = "";
  options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
  options.separator === undefined ? options.separator = "+" : options.separator;
  options.addition === undefined ? options.addition = "" : options.addition;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  options.additionSeparator === undefined ? options.additionSeparator = "|" : options.additionSeparator;

  function getRepeatTimes(num, s) {
    let resChain = "";
    for (let i = 0; i < num; i++) {  
      if(i === num - 1) resChain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator);

      else resChain += str + getAdditionRepeatTimes(options.addition, options.additionRepeatTimes, options.additionSeparator) + s;
    }
    return resChain;
  }

  function getAdditionRepeatTimes(add, num, st) {
    
    let res = "";
    
    for (let i = 0; i < num; i++) {
      if(i === num - 1){
        res += add;
      }
      else res += add + st;
    }
    return res;
  }
  
  return tmp += getRepeatTimes(options.repeatTimes, options.separator);
  
};
  
