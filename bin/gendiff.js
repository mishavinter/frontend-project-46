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
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .action((filepath1, filepath2, options) => {
    const format = options.format;
    console.log(gendiff(filepath1, filepath2, format));
  });

program.parse();
