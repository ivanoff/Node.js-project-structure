'use strict';
const Part = require('./lib/part');

const args = process.argv.slice(2);

// show help if first parameter is --help
if(args[0] && args[0].match(/^-{0,2}h(elp)?$/)) {
  help();
}

(async () => {
  const part = new Part({word: 'Hey'});
  part.say({repeat: 2});
})();

function help() {
  console.log(`App

Usage:
  node ${__filename}

Example:
  node ${__filename}
  `);
  process.exit(0);
}
