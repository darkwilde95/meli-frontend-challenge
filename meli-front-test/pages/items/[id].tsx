// lib
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

// ts
import { request } from '../../config/axios_config'
import { hostUrl } from '../../config/variables'
import priceFormatter from '../../utils/priceFormatter'
import truncateString from '../../utils/truncateString'
import decimalFormatter from '../../utils/decimalFormatter'

// types
import type ItemDetails from '../../types/items_details'
import NextPageWithLayout from '../../types/NextPageWithLayout'
import type ItemDetailsResponse from '../../types/item_details_response'

// assets
import styles from '../../styles/pages/item_details.module.scss'

// components
import Button from '../../components/button'
import TwitterMetaTags from '../../meta_wrappers/TwitterMetaTags'
import FacebookMetaTags from '../../meta_wrappers/FacebookMetaTags'

// layouts
import BreadcrumbsLayout from '../../layouts/breadcrumbs_layout'

const { get } = request

type PageParams = {
  id: string
}

type ItemDetailsProps = {
  item: ItemDetails
}

const ItemDetail: NextPageWithLayout<ItemDetailsProps> = ({ item }) => {

  const {
    id,
    title,
    picture,
    condition,
    sold_quantity,
    description,
    price
  } = item

  const priceFormatted = priceFormatter(price.amount, price.currency)
  const hasDecimals = price.decimals > 0
  const decimalsFormatted = decimalFormatter(price.decimals)

  const metaTags = {
    title,
    description: truncateString(description),
    url: hostUrl + `/items/${id}`,
    imageUrl: item.picture
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
      <div className={styles.item_details}>
        <div className={styles.item_details__buy_title}>
          <div className={styles.item_details__picture}>
            <Image 
              src={picture}
              width={680}
              height={680}
              objectFit='contain'
            />
          </div>
          <div className={styles.item_details__buy_container}>
            <h5 className={styles.item_details__sold}>
              {condition === 'new' ? 'Nuevo - ' : ''}
              {`${sold_quantity} vendidos`}
            </h5>
            <h3 className={styles.item_details__title}>
              {title}
            </h3>
            <h1 className={styles.item_details__price}>
              {priceFormatted}
              {hasDecimals && (<span>{decimalsFormatted}</span>)}
            </h1>
            <Button 
              aria-label='Comprar'
              className={styles.item_details__button} 
              type='button'
              tabIndex={3}
            >
              Comprar
            </Button>
          </div>
        </div>
        <div className={styles.item_details__description}>
          <h2 className={styles.item_details__description_title}>
            Descripción del producto
          </h2>
          <p className={styles.item_details__description_text}>
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

ItemDetail.getLayout = page => {

  const categories = page.props.categories ?? []

  return (
    <BreadcrumbsLayout categories={categories}>
      {page}
    </BreadcrumbsLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  const { id } = params as PageParams
  try {
    const { data } = await get<ItemDetailsResponse>(`/items/${id}`)
    return {
      props: {
        item: data.item,
        categories: data.categories
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default ItemDetail