// lib
import Link from 'next/link'
import Image from 'next/image'

// assets
import meliLogo1x from '../public/meli_logo_1x.png'
import styles from '../styles/layout/search_bar.module.scss'

// components
import SearchInput from './search_input'

const SearchBar = () => {
  
  return (
    <header className={styles.container}>
      <div className='page-container flex-total-center'>
        <div className={styles.logo}>
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