import Author from './author'
import ItemDetails from './items_details'

type ItemDetailsResponse = {
  author: Author
  item: ItemDetails
  categories: string[]
}

export default ItemDetailsResponse