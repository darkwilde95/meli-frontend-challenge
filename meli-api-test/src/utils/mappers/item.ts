import Item from 'types/item'

const itemMapper = (item: Item) => ({
  id: item.id,
  title: item.title,
  price: {
    amount: item.price - (item.price % 1),
    currency: item.currency_id,
    decimals: +(item.price % 1).toFixed(2) * 100
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  location: item.address?.state_name ?? null
})

export default itemMapper