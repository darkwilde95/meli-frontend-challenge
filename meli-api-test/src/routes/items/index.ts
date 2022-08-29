// lib
import { Router, Response, Request } from 'express'

// types
import SearchList from 'types/search_list'
import ItemExtended from 'types/item_extended'
import Description from 'types/item_description'
import CategoryExtended from 'types/category_extended'

// ts
import { request } from '@api'
import itemMapper from '@mappers/item'
import authorMapper from '@mappers/author'
import itemCompleteMapper from '@mappers/item_complete'

const router = Router()

type ItemsRouteParams = {
  id: string
}

type ItemsQueryParams = {
  q: string
}

const { get } = request

router.get('/', async (req: Request, res: Response, next) => {

  // prepare query object to use in 'get' request
  const query: ItemsQueryParams = {
    q: req.query.search as string // getting query param from route
  }

  try {
    const { data } = await get<SearchList, ItemsQueryParams>('/sites/MLA/search', query)
    const items = data.results.slice(0, 4)

    // count intances per category
    const categoryCount = items.reduce((acc, current) => {
      if (current.category_id in acc) {
        acc[current.category_id] += 1
      } else {
        acc[current.category_id] = 1
      }
      return acc
    }, {} as Record<string, number>)

    // Getting the category with more instances
    const categoryMoreInstances = Object.entries(categoryCount).sort((a, b) => a[1] - b[1]).pop()

    // Getting data from category
    const categoryData = await get<CategoryExtended>(`/categories/${categoryMoreInstances[0]}`)

    // Set JSON and send response with mappers
    const response = authorMapper({
      items: items.map(itemMapper),
      categories: categoryData.data.path_from_root.map(sc => sc.name)
    })
    res.status(200).json(response)
  } catch (e) {
    console.log(e)
    next(e) // In case of error, use de default express error handler
  }
})

router.get('/:id', async (req: Request, res: Response, next)=> {
  
  // Getting de id param from route
  const { id } = req.params as ItemsRouteParams

  try {
    // Executing 'get' requests in parallel
    const responses = await Promise.all([
      get<ItemExtended>(`/items/${id}`),
      get<Description>(`/items/${req.params.id}/description`)
    ])
    
    // destructuring responses in the previous order (Promise.all array)
    const [{ data: itemExtended }, { data: description }] = responses

    // Getting category from item
    const categoryData = await get<CategoryExtended>(`/categories/${itemExtended.category_id}`)

    // Set JSON and send response with mappers
    const response = authorMapper({
      item: itemCompleteMapper(itemExtended, description),
      categories: categoryData.data.path_from_root.map(sc => sc.name)
    })
    res.status(200).json(response)
  } catch (e) {
    next(e)
  }
})

export default router