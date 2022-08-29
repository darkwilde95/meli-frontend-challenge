// lib
import { useRouter } from 'next/router'
import { KeyboardEventHandler, useEffect, useState } from 'react'

// assets
import iconSearch1x from '../public/icon_search_1x.png'

// components
import Input from './input'

const SearchInput = () => {

  const [value, setValue] = useState<string>('')
  const router = useRouter()
  const query = router.query.search as string ?? ''

  useEffect(() => {
    if (router.pathname === '/items') setValue(query)
  }, [router.query.search])

  const doSearch: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter' && query !== value && value !== '') {
      router.push({
        pathname: '/items',
        query: {
          search: value
        }
      })
    }
  }

  return (
    <Input 
      type='search'
      placeholder='Nunca dejes de buscar'
      iconRight={iconSearch1x} 
      iconRightAlt='icon-search'
      value={value}
      setValue={setValue}
      onKeyPressed={doSearch}
      inputLabel='Ingresa lo que quieras encontrar'
    />
  )
}

export default SearchInput