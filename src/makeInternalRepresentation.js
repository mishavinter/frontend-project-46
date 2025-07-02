import _ from 'lodash'

const makeInternalRepresentation = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  const keys = _.union(keys1, keys2).sort()

  let result = {}
  for (const key of keys) {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      result[key] = {
        type: 'nested',
        children: makeInternalRepresentation(obj1[key], obj2[key]),
      }
    }
    else if (!Object.hasOwn(obj1, key)) {
      result[key] = { type: 'added', value: obj2[key] }
    }
    else if (!Object.hasOwn(obj2, key)) {
      result[key] = { type: 'deleted', value: obj1[key] }
    }
    else if (obj1[key] !== obj2[key]) {
      result[key] = { type: 'changed', oldValue: obj1[key], newValue: obj2[key] }
    }
    else if (obj1[key] === obj2[key]) {
      result[key] = { type: 'unchanged', value: obj1[key] }
    }
  }
  return result
}

export default makeInternalRepresentation
