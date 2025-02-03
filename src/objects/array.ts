const arr = ["darkseid", "doomsday", "gretchen"];

// array constructor
const numArr = new Array();
const strArr = Array();
// the situation is specific only when there's a single parameter of type number
const arrWithLength = new Array(9);
const arrWithParams = new Array("beast", "cyclops", "jean");

/* Arrays Static Methods */
//* #1 Array.from() - creates shallow-copied Array instance from an iterable

console.log(Array.from("superman"));
console.log(Array.from([1, 2, 4, 5], (x) => x + 30));

const playerTeamMap = new Map([
  ["rashford", "villa"],
  ["messi", "lafc"],
]);

const playersArr = Array.from(playerTeamMap.keys());
const playerTeams = Array.from(playerTeamMap.values());
console.log(playersArr);
console.log(playerTeams);

//* #2 Array.fromAsync() - study difference with Promise.all()

const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
