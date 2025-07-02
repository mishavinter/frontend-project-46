import json from './json.js'
import plain from './plain.js'
import stylish from './stylish.js'

const formatters = {
  json,
  plain,
  stylish,
}

const getFormatter = (format) => {
  if (!formatters[format]) {
    const availableFormats = Object.keys(formatters).join(', ')
    throw new Error(`Unknown format: ${format}. Available formats: ${availableFormats}`)
  }
  return formatters[format]
}

export default (diff, format) => {
  const formatter = getFormatter(format)
  return formatter(diff)
}
