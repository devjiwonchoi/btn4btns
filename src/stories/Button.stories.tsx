import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    primaryColor: 'lightblue',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    secondaryColor: 'white',
    label: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    disabledColor: 'gray',
    label: 'Button',
  },
}