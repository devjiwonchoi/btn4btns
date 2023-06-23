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

export const Icon: Story = {
  args: {
    variant: 'icon',
    color: '#ADD8E6',
    children: (
      <svg width='22' height='22' viewBox='0 0 1024 1024'>
        <path
          d={
            'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z'
          }
        ></path>
      </svg>
    ),
  },
}

export const Toggle: Story = {
  args: {
    variant: 'toggle',
    color: '#ADD8E6',
  },
}

