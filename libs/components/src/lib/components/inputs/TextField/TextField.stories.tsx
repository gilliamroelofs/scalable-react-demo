import { Meta, StoryFn } from '@storybook/react'

import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  argTypes: {
  }
}
export default meta

export const Default: StoryFn<typeof TextField> = args => (
  <TextField {...args} />
)

Default.args = {
  id: 'example-textarea',
  label: 'Lorem ipsum',
}

export const WithError: StoryFn<typeof TextField> = args => (
  <TextField {...args} />
)

WithError.args = {
  id: 'example-textarea',
  label: 'Lorem ipsum',
  error: 'Field is invalid'
}