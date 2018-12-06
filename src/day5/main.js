const input = require('../util').input('dabAcCaCBAcCcaDAdabAcCaCBAcCcaDA');

// PART ONE
function reactPolymer(polymer) {
  let reduced = false;
  let output = polymer;
  while (!reduced) {
    reduced = true;
    for (let i = 1; i < output.length - 1; i++) {
      let currentChar = output.charAt(i);
      if (currentChar.toUpperCase() == currentChar) {
        // Character is uppercase
        if (output.charAt(i - 1) == currentChar.toLowerCase()) {
          // Previous unit is same type, lowercase polarity
          output = output.slice(0, i - 1) + output.slice(i + 1);
          reduced = false;
        } else if (output.charAt(i + 1) == currentChar.toLowerCase()) {
          // Next unit is same type, lowercase polarity
          output = output.slice(0, i) + output.slice(i + 2);
          reduced = false;
        }
      } else if (currentChar.toLowerCase() == currentChar) {
        // Character is lowercase
        if (output.charAt(i - 1) == currentChar.toUpperCase()) {
          // Previous unit is same type, uppercase polarity
          output = output.slice(0, i - 1) + output.slice(i + 1);
          reduced = false;
        } else if (output.charAt(i + 1) == currentChar.toUpperCase()) {
          // Next unit is same type, uppercase polarity
          output = output.slice(0, i) + output.slice(i + 2);
          reduced = false;
        }
      }
    }
  }
  return output;
}

const partOneSolution = reactPolymer(input);

let minLength = partOneSolution.length;
let removedChar = '';

for (let c = 97; c <= 122; c++) {
  // Remove all instances of c case-insensitively
  let removed = input.replace(new RegExp(String.fromCharCode(c), 'gi'), '');
  let reacted = reactPolymer(removed);
  if (reacted.length < minLength) {
    minLength = reacted.length;
    removedChar = String.fromCharCode(c);
  }
}

console.log(removedChar, minLength);

console.log(input.length + ' -> ' + partOneSolution.length);
