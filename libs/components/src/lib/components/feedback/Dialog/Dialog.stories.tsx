import { Fragment, useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Dialog } from './Dialog'
import { Typography } from '../../data'
import { Button } from '../../inputs'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`

const meta: Meta<typeof Dialog> = {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  decorators: [
    Story => (
      <div>
        {Array.from(Array(2).keys()).map(n => (
          <Typography key={n} as="p">
            {lorem}
          </Typography>
        ))}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}
export default meta

export const Simple: StoryFn<typeof Dialog> = args => {
  const [isVisible, setIsVisible] = useState(false)

  function openDialog() {
    setIsVisible(true)
  }

  function onCloseHandler() {
    setIsVisible(false)
  }

  return (
    <Fragment>
      <Button color="meadow" onClick={openDialog} label="Open dialog"/>

      <Dialog {...args} isVisible={isVisible} onClose={onCloseHandler}>
        <Typography as="p" variant="text-lg">A simple dialog!</Typography>
        <Button color="cannon" label="ok" onClick={() => setIsVisible(false)}/>
      </Dialog>
    </Fragment>
  )
}
Simple.args = {
  isVisible: false,
  showHeaderCloseButton: true
}
