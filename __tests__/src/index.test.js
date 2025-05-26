/* eslint-disable @typescript-eslint/naming-convention */

import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import gendiff from '../../src/index.js'

const __dirname = path.resolve()

const json1 = `${__dirname}/__fixtures__/file1.json`
const json2 = `${__dirname}/__fixtures__/file2.json`
const resultJson = fs.readFileSync(`${__dirname}/__fixtures__/result.json`, 'utf-8')

test('check equality of JSON files with stylish format', () => {
  expect(gendiff(json1, json2)).toEqual(resultJson)
})

const yaml1 = `${__dirname}/__fixtures__/file1.yaml`
const yaml2 = `${__dirname}/__fixtures__/file2.yaml`
const resultYaml = fs.readFileSync(`${__dirname}/__fixtures__/result.yaml`, 'utf-8')

test('check equality of YAML files with stylish format', () => {
  expect(gendiff(yaml1, yaml2)).toEqual(resultYaml)
})

const resultPlain = fs.readFileSync(`${__dirname}/__fixtures__/resultPlain.txt`, 'utf-8')

test('check equality of JSON files with plain format', () => {
  expect(gendiff(json1, json2, 'plain')).toEqual(resultPlain)
})
