/* eslint-disable @typescript-eslint/naming-convention */

import fs from 'fs'
import path from 'path'
import gendiff from '../../src/index.js'

const __dirname = path.resolve()

const json1 = `${__dirname}/__fixtures__/file1.json`
const json2 = `${__dirname}/__fixtures__/file2.json`
const resultStylish = fs.readFileSync(`${__dirname}/__fixtures__/resultStylish.txt`, 'utf-8')

test('check equality of JSON files with stylish format', () => {
  expect(gendiff(json1, json2)).toEqual(resultStylish)
})

const yaml1 = `${__dirname}/__fixtures__/file1.yaml`
const yaml2 = `${__dirname}/__fixtures__/file2.yaml`

test('check equality of YAML files with stylish format', () => {
  expect(gendiff(yaml1, yaml2)).toEqual(resultStylish)
})

test('check equality of JSON and YAML files with stylish format', () => {
  expect(gendiff(json1, yaml2)).toEqual(resultStylish)
})

const resultPlain = fs.readFileSync(`${__dirname}/__fixtures__/resultPlain.txt`, 'utf-8')

test('check equality of JSON files with plain format', () => {
  expect(gendiff(json1, json2, 'plain')).toEqual(resultPlain)
})

test('check equality of YAML files with plain format', () => {
  expect(gendiff(yaml1, yaml2, 'plain')).toEqual(resultPlain)
})

test('check equality of JSON and YAML files with plain format', () => {
  expect(gendiff(json1, yaml2, 'plain')).toEqual(resultPlain)
})

const resultJson = fs.readFileSync(`${__dirname}/__fixtures__/resultJson.txt`, 'utf-8')

test('check equality of JSON files with json format', () => {
  expect(gendiff(json1, json2, 'json')).toEqual(resultJson)
})

test('check equality of YAML files with json format', () => {
  expect(gendiff(yaml1, yaml2, 'json')).toEqual(resultJson)
})

test('check equality of JSON and YAML files with json format', () => {
  expect(gendiff(json1, yaml2, 'json')).toEqual(resultJson)
})
