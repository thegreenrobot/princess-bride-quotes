#!/usr/bin/env node
'use strict';

const meow = require('meow');
const quotes = require('./');

const cli = meow([
	'Examples',
	'  $ quotes',
	'  "Westley: We are men of action, lies do not become us.',
	''
]);

console.log(cli.flags.all ? quotes : quotes());
