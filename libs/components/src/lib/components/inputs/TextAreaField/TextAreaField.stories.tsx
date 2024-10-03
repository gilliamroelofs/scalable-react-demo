import { Meta, StoryFn } from '@storybook/react'

import { TextAreaField } from './TextAreaField'

const meta: Meta<typeof TextAreaField> = {
  title: 'Components/Inputs/TextAreaField',
  component: TextAreaField,
  argTypes: {
  }
}
export default meta

export const Default: StoryFn<typeof TextAreaField> = args => (
  <TextAreaField {...args} />
)

Default.args = {
  id: 'example-textarea',
  label: 'Lorem ipsum',
}

export const WithError: StoryFn<typeof TextAreaField> = args => (
  <TextAreaField {...args} />
)

WithError.args = {
  id: 'example-textarea',
  label: 'Lorem ipsum',
  error: 'Field is invalid'
}