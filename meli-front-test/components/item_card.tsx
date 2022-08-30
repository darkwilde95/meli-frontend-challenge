// lib
import Image from 'next/image'

// ts
import priceFormatter from '../utils/priceFormatter'
import decimalFormatter from '../utils/decimalFormatter'

// types
import Item from '../types/item'

// assets
import styles from '../styles/components/item_card.module.scss'
import iconShipping1x from '../public/icon_shipping_1x.png'

const ItemCard = ({ title, picture, price, free_shipping, location }: Item) => {
  
  const priceFormatted = priceFormatter(price.amount, price.currency)
  const hasDecimals = price.decimals > 0
  const decimalsFormatted = decimalFormatter(price.decimals)

  return (
    <div 
      className={styles.item_card}
      aria-label={`Articulo: ${title}`}
    >
      <Image 
        src={picture}
        width={180}
        height={180}
        objectFit='contain'
      />
      <div className={styles.item_card__details}>
        <p className={styles.item_card__price}>
          {priceFormatted}
          {hasDecimals && (
            <span className={styles.item_card__price_decimals}>
            {decimalsFormatted}
            </span>
          )}
          { free_shipping && (
            <span className={styles.item_card__shipping}>
              <Image
                src={iconShipping1x}
                objectFit='cover'
              />
            </span>
          )}
        </p>
        <p className={styles.item_card__title}>
          { title }
        </p>
        <p className={styles.item_card__shipping_sm}>
          Envío gratis
        </p>
      </div>
      <p className={styles.item_card__location}>
        { location }
      </p>
    </div>
  )
}

export default ItemCard