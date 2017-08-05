'use strict';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.defenseMultiplier = (event, context, callback) => {
  let multiplier = getRandomIntInclusive(0, 2),
      turn  = event;
    
  turn.Defense.Strength = multiplier * turn.Defense.Strength;

  callback(null, turn);
};
