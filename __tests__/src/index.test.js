/* eslint-disable @typescript-eslint/naming-convention */

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const json1 = `${__dirname}/../__fixtures__/file1.json`;
const json2 = `${__dirname}/../__fixtures__/file2.json`;
const resultJson = fs.readFileSync(`${__dirname}/../__fixtures__/result.json`, 'utf-8');

test('check json-files equality', () => {
  expect(gendiff(json1, json2)).toEqual(resultJson);
});

const yaml1 = `${__dirname}/../__fixtures__/yaml1.json`;
const yaml2 = `${__dirname}/../__fixtures__/yaml2.json`;
const resultYaml = fs.readFileSync(`${__dirname}/../__fixtures__/result.yaml`, 'utf-8');

test('check yaml-files equality', () => {
  expect(gendiff(yaml1, yaml2)).toEqual(resultYaml);
});

const resultPlain = fs.readFileSync(`${__dirname}/../__fixtures__/resultPlain.txt`, 'utf-8');
expect(gendiff(json1, json2, 'plain')).toEqual(resultPlain);
