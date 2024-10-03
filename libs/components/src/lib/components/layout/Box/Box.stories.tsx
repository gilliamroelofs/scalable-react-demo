import type { Meta, StoryFn } from '@storybook/react'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
}
export default meta

export const Component: StoryFn<typeof Box> = args => (
  <Box {...args}>
    A box wrapped heading as child
  </Box>
)

Component.args = {
  margin: 0,
  padding: 0,
}
