import stringify from '../src/stringify.js'

const diffFormatter = (diff, replacer = ' ', spacesCount = 2, currentIndent = '') => {
  console.log('diff', Object.entries(diff))
  const result = Object.entries(diff).map(([key, { type, ...value }]) => {
    const newIndentation = currentIndent + replacer.repeat(spacesCount)

    switch (type) {
      case 'added':
        return `${newIndentation}"+ ${key}": ${stringify(value['value'], replacer, spacesCount, newIndentation)}`
      case 'deleted':
        return `${newIndentation}"- ${key}": ${stringify(value['value'], replacer, spacesCount, newIndentation)}`
      case 'unchanged':
        return `${newIndentation}"  ${key}": ${stringify(value['value'], replacer, spacesCount, newIndentation)}`
      case 'changed': {
        return `${newIndentation}"- ${key}": ${stringify(value['oldValue'], replacer, spacesCount, newIndentation)},\n` +
        `${newIndentation}"+ ${key}": ${stringify(value['newValue'], replacer, spacesCount, newIndentation)}`
      }
      default:
        return `${newIndentation}${key}: ${stringify(value['value'], replacer, spacesCount, newIndentation)}`
    }
  }).join(',\n')
  return `{\n${result}\n}`
}

export default diffFormatter
