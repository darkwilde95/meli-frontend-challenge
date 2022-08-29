const clearString = (str: string) => {
  let strCleared = str.trim()
  const words = strCleared.split(' ')
  return words.reduce((acc, word) => {
    if (word === '') return acc
   return [...acc, word]
  }, [] as string[]).join(' ')
}

export default clearString