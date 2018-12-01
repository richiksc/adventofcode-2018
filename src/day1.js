const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

/*
--------
PART ONE
--------
*/

const input = fs.readFileSync(path.resolve(__dirname, 'day1-input.txt'), {
  encoding: 'UTF-8'
});

let numbers = input.trim().split('\n').map(el =>  parseInt(el, 10));

let part1_timeStart = performance.now();
console.log(
  numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
);

console.log('part1 Runtime:', performance.now() - part1_timeStart);

/*
--------
PART TWO
--------
*/
let seenFreqs = new Set([0]);
let sum = 0;
let position = 0;

let part2_timeStart = performance.now();

while (true) {
  sum += numbers[position];
  if (seenFreqs.has(sum)) {
    console.log('First repeated frequency: ' + sum);
    break;
  }
  seenFreqs.add(sum);
  if (position == numbers.length - 1) {
    position = 0;
  } else {
    position++;
  }
}

console.log('part2 runtime:', performance.now() - part2_timeStart);
