#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file');

program.parse();
