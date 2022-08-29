import Author from './author'
import Item from './item'

type ItemsListResponse = {
  author: Author
  categories: string[]
  items: Item[]
}

export default ItemsListResponse