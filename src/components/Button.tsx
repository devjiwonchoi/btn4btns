import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import { ButtonProps } from '../button'

const baseButtonStyles = ({ disabled, error, size = 'md' }: ButtonProps) => css`
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.25s;
  font-family: Roboto, Helvetica, Arial, sans-serif;

  ${disabled && 'opacity: 0.7; pointer-events: none;'}

  ${size === 'sm' &&
  css`
    padding: 6px 12px;
    font-size: 13px;
  `}

  ${size === 'md' &&
  css`
    padding: 8px 16px;
    font-size: 14px;
  `}

  ${size === 'lg' &&
  css`
    padding: 10px 20px;
    font-size: 16px;
  `}

  ${size === 'xl' &&
  css`
    padding: 12px 24px;
    font-size: 18px;
  `}
`

const LabelButton = styled.button`
  ${baseButtonStyles};
  border-style: solid;
  ${({ color }) => color && `border-color: ${color};`}
  ${({ color }) => color && `&:hover { border-color: ${lighten(0.1, color)}; }`}
  ${({ color }) => color && `&:active { border-color: ${darken(0.1, color)}; }`}
  ${({ color }) => color && `background-color: ${color};`}
  ${({ color }) =>
    color && `&:hover { background-color: ${lighten(0.1, color)}; }`}
  ${({ color }) =>
    color && `&:active { background-color: ${darken(0.1, color)}; }`}
`

const OutlineButton = styled.button`
  ${baseButtonStyles};
  color: ${({ color }) => color};
  background-color: transparent;
  border-style: solid;
  ${({ color }) =>
    color && `&:hover { background-color: ${lighten(0.2, color)}; }`}
  ${({ color }) =>
    color && `&:active { background-color: ${lighten(0.15, color)}; }`}
  ${({ color }) => color && `border-color: ${darken(0.1, color)};`}
  ${({ color }) => color && `&:hover { border-color: ${color}; }`}
`

const TextButton = styled.button`
  ${baseButtonStyles};
  background-color: transparent;
  border-style: solid;
  border-color: transparent;
  color: ${({ color }) => color};
  ${({ color }) =>
    color && `&:hover { background-color: ${lighten(0.15, color)}; }`}
  ${({ color }) =>
    color && `&:active { background-color: ${lighten(0.1, color)}; }`}
  ${({ color }) => color && `&:hover {border-color: ${lighten(0.15, color)}; }`}
  ${({ color }) =>
    color && `&:active { border-color: ${lighten(0.1, color)}; }`}
`

export default function Button({
  children,
  disabled,
  error,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <>
      {variant === 'label' ? (
        <LabelButton
          color='#ADD8E6'
          size={size}
          disabled={disabled}
          error={error}
          {...props}
        >
          {children}
        </LabelButton>
      ) : variant === 'outline' ? (
        <OutlineButton
          color='#ADD8E6'
          size={size}
          disabled={disabled}
          {...props}
        >
          {children}
        </OutlineButton>
      ) : variant === 'text' ? (
        <TextButton color='#ADD8E6' size={size} disabled={disabled} {...props}>
          {children}
        </TextButton>
      ) : (
        <LabelButton color='#ADD8E6' size={size} disabled={disabled} {...props}>
          {children}
        </LabelButton>
      )}
    </>
  )
}
