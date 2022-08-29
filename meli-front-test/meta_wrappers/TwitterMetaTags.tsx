// lib
import Head from 'next/head'

type TwitterMetaTagsProps = {
  url: string
  title: string
  description: string
  imageUrl?: string
}

const TwitterMetaTags = ({ url, title, description, imageUrl }: TwitterMetaTagsProps) => (
  <Head>
    <meta property='twitter:url' content={url} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={description} />
    { imageUrl && (<meta property='twitter:image' content={imageUrl} />) }
  </Head>
)

export default TwitterMetaTags