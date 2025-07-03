const plainFormatter = (diff) => {
  const iter = (currentDiff, path) => {
    return Object.entries(currentDiff).flatMap(([key, { type, value, oldValue, newValue, children }]) => {
      const propertyPath = path ? `${path}.${key}` : key

      switch (type) {
        case 'nested':
          return iter(children, propertyPath)
        case 'added':
          return `Property '${propertyPath}' was added with value: ${formatValue(value)}`
        case 'deleted':
          return `Property '${propertyPath}' was removed`
        case 'changed':
          return `Property '${propertyPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`
        default:
          return []
      }
    }).filter(Boolean).join('\n')
  }

  return iter(diff, '')
}

// Преобразователь значений для вывода
const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  return typeof value === 'string' ? `'${value}'` : value
}

export default plainFormatter
