import { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Button Types */
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
  href?: string

  /** Button Attributes */
  variant?: 'primary' | 'secondary'
  primaryColor?: string
  secondaryColor?: string
  disabledColor?: string
  activeColor?: string
  hoverColor?: string
  darkModeColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: React.ReactNode
  onClick?: () => void
}

const ButtonTemplate = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor:
          props.variant === 'primary'
            ? props.primaryColor
            : props.variant === 'secondary'
            ? props.secondaryColor
            : props.disabled
            ? props.disabledColor
            : '',
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  )
}

const Button = (props: ButtonProps) => {
  return props.href ? (
    // Link Button
    <a href={props.href}>
      <ButtonTemplate {...props}>{props.label}</ButtonTemplate>
    </a>
  ) : props.icon ? (
    // Icon Button
    <ButtonTemplate {...props}>{props.icon}</ButtonTemplate>
  ) : (
    // Default Button
    <ButtonTemplate {...props}>{props.label}</ButtonTemplate>
  )
}

export default Button
