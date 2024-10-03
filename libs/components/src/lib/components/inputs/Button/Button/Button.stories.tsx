import { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'
import { BUTTON_COLOR_OPTIONS, BUTTON_SIZE_OPTIONS } from '../types'
const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: BUTTON_COLOR_OPTIONS
    },
    size: {
      control: 'select',
      options: BUTTON_SIZE_OPTIONS
    }
  }
}
export default meta

export const Component: StoryFn<typeof Button> = args => (
  <Button {...args} />
)
Component.args = {
  label: 'Foo',
  color: 'primary',
  size: 'medium',
  type: 'button',
}
