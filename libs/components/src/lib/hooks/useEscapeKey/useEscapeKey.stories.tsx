import { Fragment } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { useEscapeKey } from './useEscapeKey'
import { Typography } from '../../components/data'

const UseEscapeKeyDemo = () => {
  const handleEscapeKey = () => {
    alert('escape clicked')
  }
  useEscapeKey(handleEscapeKey, true)

  return (
    <Fragment>
      <Typography as="p">Press escape to test</Typography>
    </Fragment>
  )
}

const meta: Meta<typeof UseEscapeKeyDemo> = {
  title: 'Hooks/useEscapeKey',
  component: UseEscapeKeyDemo,
}
export default meta

export const Hook: StoryFn<typeof UseEscapeKeyDemo> = () => <UseEscapeKeyDemo />
