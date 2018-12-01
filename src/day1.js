const fs = require('fs');
const path = require('path');

/*
--------
PART ONE
--------
*/

const input = fs.readFileSync(path.resolve(__dirname, 'day1-input.txt'), {
  encoding: 'UTF-8'
});

let numbers = input.trim().split('\n').map(el =>  parseInt(el, 10));

console.log(
  numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
);

/*
--------
PART TWO
--------
*/
let seenFreqs = [0];
let sum = 0;
let position = 0;

while (true) {
  sum += numbers[position];
  if (seenFreqs.includes(sum)) {
    console.log('First repeated frequency: ' + sum);
    break;
  }
  seenFreqs.push(sum);
  if (position == numbers.length - 1) {
    position = 0;
  } else {
    position++;
  }
}
