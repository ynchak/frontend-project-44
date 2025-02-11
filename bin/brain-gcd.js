#!/usr/bin/env node

import greeting from '../src/cli.js';
import engine from '../src/engine.js';
import brainGcd from '../src/games/brain-gcd.js';

const name = greeting();
const rules = 'Find the greatest common divisor of given numbers.';

engine(name, rules, brainGcd);
