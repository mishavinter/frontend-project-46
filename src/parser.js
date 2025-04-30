import fs from 'fs';
import yaml from 'js-yaml';


export default (file) => {
    const configPath = 'path/to/eslint';
    const format = path.extname(configPath);
    const data = fs.readSync(configPath);

    let parse;
    if (format === '') {
      parse = JSON.parse;
    } else if (format === '.yml') {
      parse = yaml.safeLoad;
    }
    return parse(file);
};
