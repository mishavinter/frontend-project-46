/* eslint-disable @typescript-eslint/naming-convention */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// BEGIN (write your solution here)
const json1 = `${__dirname}/../__fixtures__/file1.json`;
const json2 = `${__dirname}/../__fixtures__/file2.json`;

const result = fs.readFileSync(`${__dirname}/../__fixtures__/result.json`, 'utf-8');

test('check files equality', () => {
  expect(gendiff(json1, json2)).toEqual(result);
});
