import { Fragment } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { useMediaQuery } from './useMediaQuery'
import { Typography } from '../../components/data'

const UseMediaQueryDemo = () => {
  const isMinLg = useMediaQuery({ up: 'lg' })
  const isMaxLg = useMediaQuery({ down: 'lg' })
  const isBetweenMdAndLg = useMediaQuery({ between: { min: 'md', max: 'lg' } })

  return (
    <Fragment>
      <Typography as="p">min-width lg: {isMinLg?.toString()}</Typography>
      <Typography as="p">max-width lg: {isMaxLg?.toString()}</Typography>
      <hr />
      <Typography as="p">between md and lg: {isBetweenMdAndLg?.toString()}</Typography>
    </Fragment>
  )
}

const meta: Meta<typeof UseMediaQueryDemo> = {
  title: 'Hooks/useMediaQuery',
  component: UseMediaQueryDemo,
}
export default meta

export const Hook: StoryFn<typeof UseMediaQueryDemo> = () => <UseMediaQueryDemo />
