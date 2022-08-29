// lib
import Head from 'next/head'
import { NextPage } from 'next'

// ts
import { hostUrl } from '../config/variables'

// components
import FacebookMetaTags from '../meta_wrappers/FacebookMetaTags'
import TwitterMetaTags from '../meta_wrappers/TwitterMetaTags'

const Home: NextPage = () => {

  const metaTags = {
    title: 'Mercado Libre Argentina - Envíos Gratis en el día',
    description: 'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
    url: hostUrl,
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
    </>
  )
}

export default Home
