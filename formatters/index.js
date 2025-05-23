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
    throw new Error(`Unknown format: ${format}`)
  }
  return formatters[format]
}

export default (diff, format) => {
  const formatter = getFormatter(format)
  return formatter(diff)
}
