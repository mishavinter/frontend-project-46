import stringify from '../src/stringify.js'

const stylishFormatter = (diff, replacer = ' ', spacesCount = 4, currentIndent = '') => {
  const newIndentation = currentIndent + replacer.repeat(spacesCount)

  return [
    '{',
    ...Object.entries(diff).flatMap(([key, { type, value, oldValue, newValue, children }]) => {
      const shortIndent = currentIndent + replacer.repeat(spacesCount - 2)
      switch (type) {
        case 'added':
          return `${shortIndent}+ ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`
        case 'deleted':
          return `${shortIndent}- ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`
        case 'unchanged':
          return `${shortIndent}  ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`
        case 'changed':
          return [
            `${shortIndent}- ${key}: ${stringify(oldValue, replacer, spacesCount, newIndentation)}`,
            `${shortIndent}+ ${key}: ${stringify(newValue, replacer, spacesCount, newIndentation)}`,
          ]
        case 'nested':
          return `${shortIndent}  ${key}: ${stylishFormatter(children, replacer, spacesCount, newIndentation)}`
        default:
          return []
      }
    }),
    currentIndent + '}',
  ].join('\n')
}

export default stylishFormatter
