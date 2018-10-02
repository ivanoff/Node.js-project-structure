#!/usr/bin/env node
'use strict';
/**
 * App command line example
 */

const info = require('./package.json');
const conf = require('./src/conf');
const Part = require('./src/lib/part');

if(process.argv.filter(_ => _.match(/^-{0,2}h(elp)?$/)).length) help();

(async () => {
  const part = new Part(conf);
  part.say({repeat: conf.repeat});
})();

function help() {
  console.log(`${info.name} v.${info.version}
${info.description}

Usage:
  npm start -- [options]

Options:
  -h --help     Show this help

Switch debug mode on:
  npm run debug start

Examples:
  npm start
`);
  process.exit();
}
