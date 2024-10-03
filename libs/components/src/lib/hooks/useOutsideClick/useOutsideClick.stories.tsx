import type { ReactElement } from 'react'
import { Fragment, useRef } from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import { useOutsideClick } from './useOutsideClick'
import { Typography } from '../../components/data'

const UseOutsideClickDemo = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null)
  const handleOutsideClick = (): void => {
    alert('outside click')
  }
  useOutsideClick(handleOutsideClick, ref, true)

  return (
    <Fragment>
      <Typography as="p">outside</Typography>
      <Typography as="p">
        <div ref={ref}>inside</div>
      </Typography>
    </Fragment>
  )
}

const meta: Meta<typeof UseOutsideClickDemo> = {
  title: 'Hooks/useOutsideClick',
  component: UseOutsideClickDemo,
}
export default meta

export const Hook: StoryFn<typeof UseOutsideClickDemo> = () => <UseOutsideClickDemo />
