// lib
import classNames from 'classnames'
import type { MouseEventHandler, ReactNode } from 'react'

// assets
import styles from '../styles/components/button.module.scss'

type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  tabIndex: number
}

const Button = ({ type, children, className = '', onClick, tabIndex }: ButtonProps) => (
  <button
    type={type}
    className={classNames(styles['button--secondary'], className)}
    onClick={onClick}
    tabIndex={tabIndex}
  >
    { children }
  </button>
)

export default Button