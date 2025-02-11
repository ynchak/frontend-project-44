#!/usr/bin/env node

import greeting from '../src/cli.js';
import engine from '../src/engine.js';
import brainPrime from '../src/games/brain-prime.js';

const name = greeting();
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

engine(name, rules, brainPrime);
