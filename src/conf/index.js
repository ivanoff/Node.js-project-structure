'use strict';
/**
 * Configuration example, based on environment
 */

const e = { [process.env.NODE_ENV]: true }

const word = e.local? 'LocalHey' : 'Hey';
const repeat = e.production? 1 : 2;

const config = {
  word,
  repeat
}

module.exports = exports = config;
