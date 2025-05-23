const plainFormatter = (diff) => {
  const iter = (currentDiff, path) => {
    return currentDiff.flatMap(({ key, type, value }) => {
      const propertyPath = path ? `${path}.${key}` : key

      switch (type) {
        case 'added':
          return `Property '${propertyPath}' was added with value: ${formatValue(value)}`
        case 'deleted':
          return `Property '${propertyPath}' was removed`
        case 'changed': {
          const { oldValue, newValue } = value
          return `Property '${propertyPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`
        }
        case 'nested':
          return iter(value.children, propertyPath) // Рекурсивно обрабатываем вложенные изменения
        default:
          return []
      }
    }).filter(Boolean).join('\n')
  }

  return iter(diff, '')
}

// Преобразователь значений для вывода
const formatValue = (val) => {
  if (typeof val === 'object' && val !== null) {
    return '[complex value]'
  }
  return typeof val === 'string' ? `'${val}'` : val
}

export default plainFormatter
