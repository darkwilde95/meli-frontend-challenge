type Item = {
  id: string
  seller: string
  price: number
  currency_id: string
  title: string
  condition: string
  thumbnail: string
  shipping: {
    free_shipping: boolean
  }
  category_id: string
  address?: {
    state_name: string
  }
}

export default Item