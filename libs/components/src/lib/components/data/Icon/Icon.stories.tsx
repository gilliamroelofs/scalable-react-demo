import { Meta, StoryFn } from '@storybook/react'

import { Icon, ICON_NAMES } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Data/Icon',
  component: Icon,
  argTypes: {
    children: {
      control: 'select',
      options: ICON_NAMES
    }
  }
}
export default meta

export const Component: StoryFn<typeof Icon> = ({ children, ...args }) => (
  <Icon {...args}>{children}</Icon>
)

Component.args = {
  children: 'search',
}
