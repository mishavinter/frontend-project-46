const stringify = (value, replacer = ' ', spacesCount = 4, currentIndent = '') => {
  if (typeof value !== 'object' || value === null) {
    return `${value}`
  }

  const newIndentation = currentIndent + replacer.repeat(spacesCount)

  const entries = Object.entries(value)
  const formattedEntries = entries.map(([key, val]) => {
    return `${newIndentation}${key}: ${stringify(val, replacer, spacesCount, newIndentation)}`
  })

  return `{\n${formattedEntries.join('\n')}\n${currentIndent}}`
}

export default stringify
