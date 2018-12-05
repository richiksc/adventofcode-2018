const input = require('../util').input();

// PART ONE
let entries = input.trim().split('\n');

entries = entries.map(entry => {
  let data = entry.match(/^\[([^\s]+ .+)\] (.+)$/);
  return {
    datetime: Date.parse(data[1]),
    message: data[2]
  }
});

entries.sort((a, b) => a.datetime - b.datetime);

const guardRegex = /Guard #(\d+) begins shift/;

const guardHours = new Map();
let currentGuard = '';
let fallAsleepTime = 0;

for (let {message, datetime} of entries) {
  let matches = message.match(guardRegex);
  if (matches != null) {
    currentGuard = matches[1];
  } else if (message === 'falls asleep') {
    fallAsleepTime = datetime;
  } else if (message === 'wakes up') {
    guardHours.set(parseInt(currentGuard), datetime - fallAsleepTime);
    fallAsleepTime = 0;
  }
}
const solution = new Map([...guardHours.entries()].sort((a, b) => b[1] - a[1]));
console.log(solution);

// PART TWO
