import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default NextPageWithLayout