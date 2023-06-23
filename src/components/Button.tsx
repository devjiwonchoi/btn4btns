import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import { ButtonProps } from '../button'

const baseButtonStyles = ({ disabled, size = 'md' }: ButtonProps) => css`
  border-style: solid;
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
  ${({ color }) => {
    return (
      color &&
      `
        background-color: ${color};
        border-color: ${color};
        &:hover {
          background-color: ${lighten(0.1, color)};
          border-color: ${lighten(0.1, color)};
        }
        &:active {
          background-color: ${darken(0.1, color)};
          border-color: ${darken(0.1, color)};
        }
      `
    )
  }}
`

const OutlineButton = styled.button`
  ${baseButtonStyles};
  background-color: transparent;
  ${({ color }) => {
    return (
      color &&
      `
        color: ${color};
        border-color: ${darken(0.1, color)};
        &:hover {
          background-color: ${lighten(0.2, color)};
          border-color: ${color};
        }
        &:active {
          background-color: ${lighten(0.15, color)};
        }
      `
    )
  }}
`

const TextButton = styled.button`
  ${baseButtonStyles};
  background-color: transparent;
  border-color: transparent;
  border-style: solid;
  ${({ color }) => {
    return (
      color &&
      `
        color: ${color};
        &:hover {
          background-color: ${lighten(0.15, color)};
          border-color: ${lighten(0.15, color)};
        }
        &:active {
          background-color: ${lighten(0.1, color)};
          border-color: ${lighten(0.1, color)};
        }
      `
    )
  }}
`

export default function Button({
  children,
  color,
  disabled,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <>
      {variant === 'label' ? (
        <LabelButton color={color} size={size} disabled={disabled} {...props}>
          {children}
        </LabelButton>
      ) : variant === 'outline' ? (
        <OutlineButton color={color} size={size} disabled={disabled} {...props}>
          {children}
        </OutlineButton>
      ) : variant === 'text' ? (
        <TextButton color={color} size={size} disabled={disabled} {...props}>
          {children}
        </TextButton>
      ) : (
        <LabelButton color={color} size={size} disabled={disabled} {...props}>
          {children}
        </LabelButton>
      )}
    </>
  )
}
