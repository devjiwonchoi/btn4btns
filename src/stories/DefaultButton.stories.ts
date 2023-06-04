import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Default Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    primaryColor: '',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    secondaryColor: '',
    label: 'Button',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    disabledColor: '',
    label: 'Button',
  },
}

export const Hover: Story = {
  args: {
    hover: true,
    hoverColor: '',
    label: 'Button',
  },
}

export const Active: Story = {
  args: {
    active: true,
    activeColor: '',
    label: 'Button',
  },
}

export const DarkMode: Story = {
  args: {
    darkMode: true,
    darkModeColor: '',
    label: 'Button',
  },
}
