// lib
import type { ReactNode } from 'react'

// components
import Breadcrumbs from '../components/breadcrumbs'

type BreadcrumbsLayoutProps = {
  children: ReactNode
  categories: string[]
}

const BreadcrumbsLayout = ({ children, categories }: BreadcrumbsLayoutProps) => (
  <>
    <Breadcrumbs categories={categories} />
    { children }
  </>
)

export default BreadcrumbsLayout