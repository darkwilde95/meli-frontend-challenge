// lib
import Image, { StaticImageData } from 'next/image'
import type { 
  ChangeEventHandler, 
  CSSProperties, 
  Dispatch, 
  KeyboardEventHandler, 
  SetStateAction 
} from 'react'

// assets
import styles from '../styles/components/input.module.scss'

type InputProps = {
  id?: string
  type?: string
  placeholder?: string
  style?: CSSProperties
  value: string
  setValue: Dispatch<SetStateAction<string>>
  iconRight?: StaticImageData
  iconRightAlt?: string
  onKeyPressed?: KeyboardEventHandler<HTMLInputElement>
  inputLabel?: string
  rightIconLabel?: string
}

const Input = ({ 
  id, 
  type = 'text', 
  value, 
  placeholder,
  setValue,
  style,
  iconRight, 
  iconRightAlt, 
  onKeyPressed,
  inputLabel,
  rightIconLabel
}: InputProps) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <div className={styles.input_group} style={style}>
      <input 
        type={type} 
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={ handleChange }
        onKeyDown={ onKeyPressed }
        aria-label={inputLabel}
        tabIndex={2}
      />
      {iconRight && (
        <div className={styles.input_group__icon_right}>
          <Image
            src={iconRight}
            alt={iconRightAlt}
          />
        </div>
      )}
    </div>
  )
}

export default Input