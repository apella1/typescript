/**
 * * Important Concepts
 * Execution Context
 * Function Definition
 * Function Value
 * Global()
 * Call Stack
 * Execution Thread
 * */

function makeIncrementFunc() {
  let counter = 0;
  function incrementCounter() {
    return counter++;
  }

  return incrementCounter;
}

const incrementFunc = makeIncrementFunc();
incrementFunc();
incrementFunc();
