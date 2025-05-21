const diffFormatter = (diff, replacer = ' ', spacesCount = 4, currentIndent = '') => {
  return diff.map(({ key, type, value }) => {
    const newIndentation = currentIndent + replacer.repeat(spacesCount);

    switch (type) {
      case 'added':
        return `${newIndentation}+ ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`;
      case 'deleted':
        return `${newIndentation}- ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`;
      case 'unchanged':
        return `${newIndentation}  ${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`;
      case 'changed': {
        const { oldValue, newValue } = value;
        return `${newIndentation}- ${key}: ${stringify(oldValue, replacer, spacesCount, newIndentation)}\n` +
               `${newIndentation}+ ${key}: ${stringify(newValue, replacer, spacesCount, newIndentation)}`;
      }
      default:
        return `${newIndentation}${key}: ${stringify(value, replacer, spacesCount, newIndentation)}`;
    }
  }).join('\n');
};

export default diffFormatter;
