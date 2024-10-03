import { Meta, StoryFn } from '@storybook/react'

import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { Box } from '../../layout'
import { Typography } from '../../data'
import { Button } from '../../inputs'

const meta: Meta<typeof Card> = {
  title: 'Components/Feedback/Card',
  component: Card,
  argTypes: {
  }
}
export default meta

export const Component: StoryFn<typeof Card> = ({ children, ...args }) => (
  <Card {...args}>
    <CardContent>
      <Box as="div" padding={8}>
        <Typography as="p" variant="text-lg">Lorem</Typography>
        <Typography as="p" variant="text-xs">Ipsum</Typography>
      </Box>
    </CardContent>
    <CardFooter>
      <Box as="div" padding={8}>
        <Button label="Lorem" />
      </Box>
    </CardFooter>
  </Card>
)
