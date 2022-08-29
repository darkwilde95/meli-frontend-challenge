// lib
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { RouterScrollProvider } from '@moxy/next-router-scroll'

// types
import NextPageWithLayout from '../types/NextPageWithLayout'

// assets
import '../styles/base/globals.scss'

// layouts
import SearchBarLayout from '../layouts/search_bar_layout'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <RouterScrollProvider>
      <Head>
        <link rel="icon" href="/meli_logo.ico" />
      </Head>
      <SearchBarLayout>
        { getLayout(<Component {...pageProps} />) }
      </SearchBarLayout>
    </RouterScrollProvider>
  )
}

export default MyApp
