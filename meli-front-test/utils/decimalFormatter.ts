const decimalFormatter = (price: number) => {
  return price.toLocaleString(undefined, { minimumIntegerDigits: 2 })
}

export default decimalFormatter