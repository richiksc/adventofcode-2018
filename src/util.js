const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * Reads input from input.txt in current folder using UTF-8 encoding.
   * Returns file contents as a string.
   *
   * @returns {string} input.txt's contents as a string
   */
  input() {
    return fs.readFileSync(
      path.resolve(
        path.dirname(module.parent.filename), 'input.txt'
      ),
      'UTF-8'
    );
  }
}
