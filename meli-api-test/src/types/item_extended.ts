import ItemSummary from './item'

type ItemWithPictures = ItemSummary & {
  pictures: { url: string }[]
  sold_quantity: number
}

export default ItemWithPictures