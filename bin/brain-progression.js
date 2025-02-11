#!/usr/bin/env node

import greeting from '../src/cli.js';
import engine from '../src/engine.js';
import brainProgression from '../src/games/brain-progression.js';

const name = greeting();
const rules = 'What number is missing in the progression?';

engine(name, rules, brainProgression);
