const priceFormatter = (price: number, currency: string) => {
  return price.toLocaleString(undefined, {
    currency,
    style: 'currency',
    minimumIntegerDigits: 2,
    minimumFractionDigits: 0
  })
}

export default priceFormatter