'use strict';

module.exports = class Part {

/**
 * Constructor
 * @param {string} word - word to repeat
 */
  constructor({word}) {
    this.word = word;
  }

/**
 * Say and repeat
 * Print to console this.word <repeat> times
 * @param {integer} repeat - repeat count, default 1
 * @return {boolean} printed - return true in case of count > 0, false otherwise
 */
  say({repeat = 1}={}) {
    if(!repeat || !Number.isInteger(repeat) || repeat <= 0) return false;
    console.log(this.word.repeat(repeat))
    return true;
  }
}
