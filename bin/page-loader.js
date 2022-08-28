#!/usr/bin/env node

import { program } from 'commander';
import run from '../src/index.js';

program
  .version('0.0.1')
  .argument('<inputUrl>')
  .option('-o, --output <path>', 'output directory')
  .parse(process.argv);

const { arg } = program;
const { output } = program.opts();
run(arg, output);
