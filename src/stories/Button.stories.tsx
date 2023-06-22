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
    children: 'LABEL BUTTON',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'OUTLINE BUTTON',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'TEXT BUTTON',
  },
}