import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export default (filepath) => {
  const data = fs.readFileSync(path.resolve(filepath), 'utf-8')

  if (path.extname(filepath) === '.json') {
    return JSON.parse(data)
  }
  else if (path.extname(filepath) === '.yml' || path.extname(filepath) === '.yaml') {
    return yaml.load(data)
  }
  throw Error('Unexpected format')
}
