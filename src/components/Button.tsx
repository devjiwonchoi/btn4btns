import { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Button Types */
  isIcon?: boolean
  isLink?: boolean
  isText?: boolean
  isToggle?: boolean
  isOutline?: boolean
  isGhost?: boolean

  /** Button State */
  disabled?: boolean
  active?: boolean
  hover?: boolean
  darkmode?: boolean

  /** Button Elements */
  icon?: string
  label?: string

  /** Button Attributes */
  variant?: 'primary' | 'secondary'
  primaryColor?: string
  secondaryColor?: string
  disabledColor?: string
  activeColor?: string
  hoverColor?: string
  darkModeColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return <button {...props}>{props.label}</button>
}

export default Button
