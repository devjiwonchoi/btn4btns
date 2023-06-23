import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Label: Story = {
  args: {
    variant: 'label',
    color: '#ADD8E6',
    children: 'LABEL BUTTON',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: '#ADD8E6',
    children: 'OUTLINE BUTTON',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    color: '#ADD8E6',
    children: 'TEXT BUTTON',
  },
}