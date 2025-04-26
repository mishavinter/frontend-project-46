import path from 'path';
import fs from 'fs';
import parser from './parser.js';
import _ from 'lodash';

export default (filepath1, filepath2) => {
  const obj1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
  const obj2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');

  const parsedObj1 = parser(obj1);
  const parsedObj2 = parser(obj2);

  const keys1 = Object.keys(parsedObj1);
  const keys2 = Object.keys(parsedObj2);
  const keys = _.uniq([...keys1, ...keys2]);

  let result = '';
  for (const key of keys) {
    if (!Object.hasOwn(parsedObj1, key)) {
      result += `+ ${key}: ${parsedObj2[key]}\n`;
    } else if (!Object.hasOwn(parsedObj2, key)) {
      result += `- ${key}: ${parsedObj1[key]}\n`;
    } else if (parsedObj1[key] !== parsedObj2[key]) {
      result += `- ${key}: ${parsedObj1[key]}\n+ ${key}: ${parsedObj2[key]}\n`;
    } else {
      result += `  ${key}: ${parsedObj1[key]}\n`
    }
  };

  return result;
};
