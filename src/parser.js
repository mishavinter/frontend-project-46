import path from 'path';
import yaml from 'js-yaml';


export default (file) => {
    const configPath = 'path/to/eslint';
    const format = path.extname(configPath);

    if (format === 'json') {
      return JSON.parse(file);
    }
    return yaml.load(file);
};
