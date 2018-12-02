const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8');

const boxIds = input.trim().split('\n');

// PART ONE

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let has2 = 0;
let has3 = 0;

boxIdLoop:
for (let boxId of boxIds) {
  let boxIdHas2 = 0;
  let boxIdHas3 = 0;
  for (let letter of letters) {
    let numInstances = (boxId.match(new RegExp(letter, 'g')) || []).length;
    if (numInstances == 2) {
      boxIdHas2++;
    } else if (numInstances == 3) {
      boxIdHas3++;
    }
  }
  has2 += (boxIdHas2 > 0 ? 1 : 0);
  has3 += (boxIdHas3 > 0 ? 1 : 0);
}

console.log("Checksum: ", has2 * has3);
