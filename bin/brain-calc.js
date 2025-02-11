#!/usr/bin/env node

import greeting from '../src/cli.js';
import engine from '../src/engine.js';
import brainCalc from '../src/games/brain-calc.js';

const name = greeting();
const rules = 'What is the result of the expression?';

engine(name, rules, brainCalc);
