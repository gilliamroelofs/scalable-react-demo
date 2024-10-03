import { Meta, StoryFn } from '@storybook/react'

import { Typography, TYPOGRAPHY_AS_OPTIONS, TYPOGRAPHY_VARIANTS } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Data/Typography',
  component: Typography,
  argTypes: {
    as: {
      control: 'select',
      options: TYPOGRAPHY_AS_OPTIONS
    },
    variant: {
      control: 'select',
      options: TYPOGRAPHY_VARIANTS
    },
    bold: {
      control: 'boolean',
    },
  }
}
export default meta

export const Component: StoryFn<typeof Typography> = args => (
  <Typography {...args}>Lorem ipsum dolor sit amet</Typography>
)
Component.args = {
  as: 'h1',
  color: 'primary',
}