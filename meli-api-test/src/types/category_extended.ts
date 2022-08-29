import Category from './category'

type CategoryExtended = Category & {
  path_from_root: Category[]
}

export default CategoryExtended