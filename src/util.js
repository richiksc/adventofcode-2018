const fs = require('fs');
const path = require('path');

module.exports = {
  input() {
    return fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8');
  }
}
