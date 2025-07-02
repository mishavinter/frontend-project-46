import _ from 'lodash'
import parser from './parser.js'
import sortKeys from './sortKeys.js'
import formatter from '../formatters/index.js'
import makeInternalRepresentation from './makeInternalRepresentation.js'

export default (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parser(filepath1)
  const obj2 = parser(filepath2)

  const internalRepresentation = makeInternalRepresentation(obj1, obj2)
  const sortedIntRepresent = sortKeys(internalRepresentation)

  return formatter(sortedIntRepresent, format)
}
