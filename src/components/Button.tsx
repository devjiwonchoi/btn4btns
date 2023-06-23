import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import { ButtonProps } from '../button'

const baseButtonStyles = ({ disabled, size = 'md' }: ButtonProps) => css`
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.25s;

  ${disabled && 'opacity: 0.5; cursor: not-allowed;'}

  ${size === 'xs' &&
  css`
    min-width: 60px;
    min-height: 24px;
    padding: 4px 8px;
    font-size: 12px;
  `}

  ${size === 'sm' &&
  css`
    min-width: 80px;
    min-height: 32px;
    padding: 6px 12px;
    font-size: 13px;
  `}

  ${size === 'md' &&
  css`
    min-width: 100px;
    min-height: 40px;
    padding: 8px 16px;
    font-size: 14px;
  `}

  ${size === 'lg' &&
  css`
    min-width: 120px;
    min-height: 48px;
    padding: 10px 20px;
    font-size: 16px;
  `}

  ${size === 'xl' &&
  css`
    min-width: 140px;
    min-height: 56px;
    padding: 12px 24px;
    font-size: 18px;
  `}
`

const baseInputStyles = ({ disabled, checked }: ButtonProps) => css`
  ${disabled && 'opacity: 0.5; cursor: not-allowed;'}
`

const LabelButton = styled.button`
  ${baseButtonStyles};
  ${({ color }) => {
    return (
      color &&
      `
        background-color: ${color};
        &:hover {
          background-color: ${lighten(0.1, color)};
        }
        &:active {
          background-color: ${darken(0.1, color)};
        }
      `
    )
  }}
`

const OutlineButton = styled.button`
  ${baseButtonStyles};
  border: 1px solid;
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
  ${({ color }) => {
    return (
      color &&
      `
        color: ${color};
        &:hover {
          background-color: ${lighten(0.15, color)};
        }
        &:active {
          background-color: ${lighten(0.1, color)};
        }
      `
    )
  }}
`

const ToggleButton = styled.input`
  appearance: none;
  width: 40px;
  height: 24px;
  background-color: ${({ color, checked }) =>
    (checked ? color : '#ccc') ?? '#ccc'};
  border-radius: 16px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
  }

  &:checked:before {
    transform: translateX(16px);
  }
`

const CheckboxButton = styled.input`
  ${baseInputStyles};
`

export default function Button({
  checked,
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
      ) : variant === 'toggle' ? (
        <ToggleButton type='checkbox' checked={checked} color={color} />
      ) : (
        <LabelButton color={color} size={size} disabled={disabled} {...props}>
          {children}
        </LabelButton>
      )}
    </>
  )
}
