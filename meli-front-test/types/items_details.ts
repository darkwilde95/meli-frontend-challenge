import Item from './item'

type ItemDetails = Item & {
  sold_quantity: number
  description: string
}

export default ItemDetails