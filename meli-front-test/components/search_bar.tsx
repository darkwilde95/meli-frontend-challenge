// lib
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

// assets
import meliLogo1x from '../public/meli_logo_1x.png'
import styles from '../styles/layout/search_bar.module.scss'

// components
import SearchInput from './search_input'

const SearchBar = () => {

  const logoContainerStyles = classNames(styles.logo, 'flex-total-center')
  const containerStyles = classNames(styles.container, 'd-flex-row')
  
  return (
    <header className={containerStyles}>
      <div className='page-container flex-total-center'>
        <div className={logoContainerStyles}>
          <Link href='/'>
            <a tabIndex={1} aria-label='Ir al contenido principal'>
              <Image
                src={meliLogo1x}
                alt='meli-logo'
                objectFit='fill'
              />
            </a>
          </Link>
        </div>
        <SearchInput />
      </div>
    </header>
  )
}

export default SearchBar