// lib
import Head from 'next/head'

type FacebookMetaTagsProps = {
  url: string
  title: string
  description: string
  imageUrl?: string 
}

const FacebookMetaTags = ({ url, title, description, imageUrl }: FacebookMetaTagsProps) => (
  <Head>
    <meta property='og:url' content={url} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    { imageUrl && (<meta property='og:image' content={imageUrl} />) }
  </Head>
)

export default FacebookMetaTags