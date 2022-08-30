// lib
import type { ReactNode } from 'react'

// components
import SearchBar from '../components/search_bar' 

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <SearchBar />
    <main className='page-container content'>
      { children }
    </main>
  </>
)

export default Layout