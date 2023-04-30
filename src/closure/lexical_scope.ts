/**
 * * Main Concepts
 * Scope
 * Lexical scoping/Static scoping
 * Closure
 * Persistent Lexical Scope Referenced Data
 * Closed Over 'Variable Environment'
 * Dynamic Scoping
 * */

// ! "If Hemmingway Wrote JavaScript"

// Multiple Instances Of Closure
function makeIncrementFrom88() {
  let num = 8;

  function incrementFrom8() {
    num++;
  }

  return incrementFrom8;
}

const firstIncrementFrom8 = makeIncrementFrom88();
firstIncrementFrom8();
firstIncrementFrom8();
const secondIncrementFrom8 = makeIncrementFrom88();
secondIncrementFrom8();
secondIncrementFrom8();
