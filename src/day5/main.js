const input = require('../util').input('dabAcCaCBAcCcaDAdabAcCaCBAcCcaDA');

// PART ONE

let reduced = false;
let output = input;
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

console.log(input.length + ' -> ' + output.length);
