/**
 * * Main Concepts
 * Promises
 * Two-pronged approach
 * onFulfilled
 * onRejected
 * value
 * then
 * catch
 * Execution context
 */

function display(data: any) {
    console.log(data)
}

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display)
console.log("Me first")
