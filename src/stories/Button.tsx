type ButtonProps = {
  /** Button Types */
  isIcon?: boolean
  isText?: boolean
  isToggle?: boolean
  isOutline?: boolean
  isGhost?: boolean

  /** Button State */
  disabled?: boolean
  active?: boolean
  hover?: boolean
  loading?: boolean
  darkMode?: boolean

  /** Button Elements */
  icon?: string
  label?: string

  /** Button Attributes */
  primaryColor?: string
  secondaryColor?: string
  disabledColor?: string
  activeColor?: string
  hoverColor?: string
  darkModeColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  return <button {...props}>{props.label}</button>
}
