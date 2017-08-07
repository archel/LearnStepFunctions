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

module.exports.attackMultiplier = (event, context, callback) => {
  let multiplier = getRandomIntInclusive(0, 2),
      turn  = event;
    
  turn.Attack.Strength = multiplier * turn.Attack.Strength;

  callback(null, turn);
};

module.exports.calculateAttackResult = (event, context, callback) => {
  let attackResult = event[0];
  let defenseResult = event[1];

  let attack = attackResult.Attack.Strength - defenseResult.Defense.Strength;

  if ( attack < 0 ) attack = 0;

  defenseResult.Defense.Player.Live = defenseResult.Defense.Player.Live - attack;

  let result = {"Attack": attackResult.Attack, "Defense" : defenseResult.Defense};

  callback(null, result);
};
