import path from 'path';
import fs from 'fs';
import parser from './parser.js';

export default (filepath1, filepath2) => {
  const obj1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
  const obj2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');

  const parsedObj1 = parser(obj1);
  const parsedObj2 = parser(obj2);

  return parsedObj1 === parsedObj2;
};
