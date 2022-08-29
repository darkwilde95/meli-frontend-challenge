const capitalizeFirstLetter = (str: string) => {
  const words = str.split(' ')
  const capitalizedWords = words.map(s => {
    const copy = s.slice(1)
    const toUpper = s.charAt(0).toUpperCase()
    return toUpper + copy
  })
  return capitalizedWords.join(' ')
}

export default capitalizeFirstLetter