import path from 'path'
import fs from 'fs'
import parse from './parser.js'

import makeInternalRepresentation from './makeInternalRepresentation.js'
import formatDiff from '../formatters/index.js'

export default (filepath1, filepath2, format = 'stylish') => {
  const obj1 = fs.readFileSync(path.resolve(filepath1), 'utf-8')
  const obj2 = fs.readFileSync(path.resolve(filepath2), 'utf-8')

  const parsedObj1 = parse(obj1)
  const parsedObj2 = parse(obj2)

  const internalRepresentation = makeInternalRepresentation(parsedObj1, parsedObj2)
  return formatDiff(internalRepresentation, format)
}
