#!/usr/bin/env node

import greeting from '../src/cli.js';
import engine from '../src/engine.js';
import brainEven from '../src/games/brain-even.js';

const name = greeting();
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

engine(name, rules, brainEven);
