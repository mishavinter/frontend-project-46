#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .action((a, b, options) => {
    console.log(gendiff(a, b, options));
  });

program.parse();
