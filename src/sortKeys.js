const sortKeys = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const sortedEntries = Object.entries(obj)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => [key, sortKeys(value)])
  return Object.fromEntries(sortedEntries)
}

export default sortKeys
