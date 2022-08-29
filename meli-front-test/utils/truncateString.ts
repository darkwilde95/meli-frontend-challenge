const truncateString = (str: string) => {
  const truncated = str.substring(196)
  const res = truncated.charAt(196) === ' ' ? truncated.substring(195) : truncated
  return res + '...'
}

export default truncateString