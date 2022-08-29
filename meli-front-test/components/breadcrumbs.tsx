// lib
import classNames from 'classnames'

// assets
import styles from '../styles/components/breadcrumbs.module.scss'

type BreadcrumbsProps = {
  categories: string[]
}

const Breadcrumbs = ({ categories }: BreadcrumbsProps) => {

  const breadcrumbsStyles = classNames(
    styles.breadcrumbs,
    'flex-r-total-center'
  )

  const breadcrumbStyles = (isLast: boolean) =>classNames({
    [styles['breadcrumbs__item']]: !isLast,
    [styles['breadcrumbs__item--last']]: isLast
  })

  const breadcrumb = (key: number, category: string, isLast = false) => (
    <li key={key} className={breadcrumbStyles(isLast)}>
      {category}
      {!isLast && <span>{'>'}</span>}
    </li>
  )

  return (
    <ul className={breadcrumbsStyles}>
      { categories.map((c, i) => breadcrumb(i, c, i === categories.length - 1))}
    </ul>
  )
}

export default Breadcrumbs