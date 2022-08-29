import type Price from './price'

type Item = {
  id: string
  title: string
  picture: string
  price: Price
  free_shipping: boolean
  condition: string
  location: string
}

export default Item