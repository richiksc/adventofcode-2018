const util = require('../util');

const input = util.input();
const claimsRaw = input.trim().split("\n");

class Claim {
  constructor(id, startX, startY, widthX, widthY) {
    this.id = id;
    this.startX = startX;
    this.startY = startY;
    this.widthX = widthX;
    this.widthY = widthY;
  }
}

const claims = claimsRaw.map(claim => {
  let params = claim.match(/^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/);
  params = params.map(x => parseInt(x, 10));
  return new Claim(params[1], params[2], params[3], params[4], params[5]);
});

const fabric = new Map();

function increment(x, y) {
  let key = `${x},${y}`;
  if (fabric.has(key)) {
    fabric.set(key, fabric.get(key) + 1);
  } else {
    fabric.set(key, 0);
  }
}

let result = 0;

for (let claim of claims) {
  for (let y = claim.startY; y < claim.startY + claim.widthY; y++) {
    for (let x = claim.startX; x < claim.startX + claim.widthX; x++) {
      increment(x, y);
      if (fabric.get(`${x},${y}`) == 1) {
        result++;
      }
    }
  }
}

// PART TWO
const goodClaims = [];
claimLoop:
for (let claim of claims) {
  for (let y = claim.startY; y < claim.startY + claim.widthY; y++) {
    for (let x = claim.startX; x < claim.startX + claim.widthX; x++) {
      if (fabric.get(`${x},${y}`) > 0) {
        continue claimLoop;
      }
    }
  }
  goodClaims.push(claim);
}

console.log(result);
console.log(goodClaims);
