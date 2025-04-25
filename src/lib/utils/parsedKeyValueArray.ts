function parseKeyValueArray(arr) {
  const result: Record<string, string> = {}

  arr.forEach((item) => {
    const [key] = item.split("-")
    result[key] = item.slice(key.length + 1)
  })

  return result
}

export default parseKeyValueArray
