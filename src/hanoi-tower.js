const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) { 
  let numofTurns = Math.pow( 2, disksNumber ) - 1 ; 
  let another = Math.floor(( numofTurns / turnsSpeed ) * 3600) ; 
  return {turns: numofTurns,
          anothe: another };
};
