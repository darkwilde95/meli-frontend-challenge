// lib
import Image from 'next/image'
import classNames from 'classnames'

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

  const itemCard = classNames(
    styles.item_card,
    'd-flex-row'
  )
  const itemCardDetailsStyles = classNames(
    styles.item_card__details,
    'd-flex-column'
  )

  const itemCardPriceStyles = classNames(
    styles.item_card__price,
    'd-flex-row'
  )

  return (
    <div 
      className={itemCard}
      aria-label={`Articulo: ${title}`}
    >
      <Image 
        src={picture}
        width={180}
        height={180}
        objectFit='contain'
      />
      <div className={itemCardDetailsStyles}>
        <p className={itemCardPriceStyles}>
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
      </div>
      <div className={styles.item_card__location}>
        {location}
      </div>
    </div>
  )
}

export default ItemCard