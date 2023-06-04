type ButtonProps = {
  /** Button Types */
  isIcon?: boolean
  isText?: boolean
  isToggle?: boolean
  isOutline?: boolean
  isGhost?: boolean
  isDarkMode?: boolean

  /** Button State */
  disabled?: boolean
  active?: boolean
  hover?: boolean

  /** Button Elements */
  icon?: string
  label: string

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

export default function Button(props: ButtonProps) {
  return <button>{props.label}</button>
}
