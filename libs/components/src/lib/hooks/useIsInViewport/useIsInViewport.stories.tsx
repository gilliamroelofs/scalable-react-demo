import { Fragment } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { useIsInViewport } from './useIsInViewport'
import { Typography } from '../../components/data'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`

const UseInViewportDemo = () => {
  const [isInViewport, ref] = useIsInViewport()

  return (
    <Fragment>
      <Typography as="p">{lorem}</Typography>
      <hr />
      <Typography as="p" bold>
        <span ref={ref}>I am observed, scroll me out of the viewport</span>
      </Typography>
      <hr />
      <Typography as="p">{lorem}</Typography>
      <Typography as="p">{lorem}</Typography>
      <hr />
      <Typography as="p" bold>
        isInViewport: {isInViewport?.toString()}
      </Typography>
      <hr />
      <Typography as="p">{lorem}</Typography>
      <Typography as="p">{lorem}</Typography>
      <Typography as="p">{lorem}</Typography>
      <Typography as="p">{lorem}</Typography>
    </Fragment>
  )
}

const meta: Meta<typeof UseInViewportDemo> = {
  title: 'Hooks/useIsInViewport',
  component: UseInViewportDemo,
}
export default meta

export const Hook: StoryFn<typeof UseInViewportDemo> = () => <UseInViewportDemo />
