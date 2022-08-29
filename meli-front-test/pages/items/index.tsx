// lib
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouterScroll } from '@moxy/next-router-scroll'

// ts
import { hostUrl } from '../../config/variables'
import clearString from '../../utils/clearString'
import { request } from '../../config/axios_config'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'

// types
import Item from '../../types/item'
import type { GetServerSideProps } from 'next'
import NextPageWithLayout from '../../types/NextPageWithLayout'
import ItemsListResponse from '../../types/items_list_response'

// components
import ItemCard from '../../components/item_card'
import TwitterMetaTags from '../../meta_wrappers/TwitterMetaTags'
import FacebookMetaTags from '../../meta_wrappers/FacebookMetaTags'

// layouts
import BreadcrumbsLayout from '../../layouts/breadcrumbs_layout'

// assets
import styles from '../../styles/pages/items_list.module.scss'

const { get } = request

type ItemsPageProps = {
  items: Item[]
  categories: string[]
  query: string
}

type SearchQuery = {
  search: string
}

const Items: NextPageWithLayout<ItemsPageProps> = ({ items, query }) => {

  const { updateScroll } = useRouterScroll()
  
  useEffect(() => {
    updateScroll()
  }, [])

  const queryCapitalized = capitalizeFirstLetter(query)

  const list = items.map((item, i) => (
    <li key={item.id}>
      <Link href={`/items/${item.id}`}>
        <a 
          title={item.title}
          tabIndex={3+i}
          aria-label={`Articulo: ${item.title}`}
        >
          <ItemCard {...item} />
        </a>
      </Link>
    </li>
  ))

  const metaTags = {
    title: `${queryCapitalized} | MercadoLibre`,
    description: `Envíos Gratis en el día ✓ Comprá ${queryCapitalized} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
    url: hostUrl + `/items?search=${queryCapitalized}`,
    imageUrl: '/meli_logo_2x.png'
  }

  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta
          name='description'
          content={metaTags.description}
        />
      </Head>
      <FacebookMetaTags {...metaTags} />
      <TwitterMetaTags {...metaTags} />
      <ul className={styles.items_list}>
        { list }
      </ul>
    </>
  )
}

Items.getLayout = page => {

  const categories = page.props.categories ?? []

  return (
    <BreadcrumbsLayout categories={categories}>
      { page }
    </BreadcrumbsLayout>
  )
}

export const getServerSideProps: GetServerSideProps<ItemsPageProps> = async ({ query }) => {
  const queryCleared = clearString(query.search as string)
  if (query.search as string !== queryCleared) return {
    redirect: {
      destination: `/items?search=${queryCleared}`,
      permanent: true
    }
  }
  try {
    const { data } = await get<ItemsListResponse, SearchQuery>('/items', { search: queryCleared })

    return {
      props: { 
        categories: data.categories,
        items: data.items,
        query: queryCleared as string
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default Items