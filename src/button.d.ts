export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Button Types */
  variant?:
    | 'label'
    | 'outline'
    | 'text'
    | 'toggle'
    | 'icon'
    | 'radio'
    | 'checkbox'
  /** Button State */
  disabled?: boolean
  loading?: boolean
  /** Button Elements */
  href?: string // Converts to Link Button
  checked?: boolean // Converts to Input Button

  /** Button Attributes */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  children?: React.ReactNode
  onClick?: () => void
}
