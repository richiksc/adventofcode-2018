const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8');

const boxIds = input.trim().split('\n');

// PART ONE

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let has2 = 0;
let has3 = 0;

for (let boxId of boxIds) {
  let boxIdHas2 = false;
  let boxIdHas3 = false;
  for (let letter of letters) {
    let numInstances = (boxId.match(new RegExp(letter, 'g')) || []).length;
    if (numInstances == 2) {
      boxIdHas2 = true;
    } else if (numInstances == 3) {
      boxIdHas3 = true;
    }
  }
  has2 += (boxIdHas2 ? 1 : 0);
  has3 += (boxIdHas3 ? 1 : 0);
}

console.log("Checksum: ", has2 * has3);


// PART TWO:

let matches = [];
let solution = '';

for (let i = 0; i < boxIds.length; i++) {
  let boxId1 = boxIds[i];

  boxId2Loop:
  for (let j = i + 1; j < boxIds.length; j++) {
    let boxId2 = boxIds[j];

    let differingChars = 0;
    let commonChars = '';

    for (let i = 0; i < boxId1.length; i++) {
      if (boxId1.charAt(i) != boxId2.charAt(i)) {
        differingChars++;
      } else {
        commonChars += boxId1.charAt(i);
      }
      if (differingChars > 1) {
        continue boxId2Loop;
      }

    }

    if (differingChars > 0) {
      matches.push(boxId1, boxId2);
      solution = commonChars;
    }

  }

}

console.log(matches);
console.log(solution);
