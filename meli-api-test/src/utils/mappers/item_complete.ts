import itemMapper from './item'
import ItemExtended from 'types/item_extended'
import ItemDescription from 'types/item_description'

const itemCompleteMapper = (item: ItemExtended, description: ItemDescription) => ({
  ...itemMapper(item),
  picture: item.pictures[0].url,
  description: description.plain_text,
  sold_quantity: item.sold_quantity
})

export default itemCompleteMapper