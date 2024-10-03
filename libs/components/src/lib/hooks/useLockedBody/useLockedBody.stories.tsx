import { Meta, StoryFn } from '@storybook/react'

import { useLockedBody } from './useLockedBody'
import { Button } from '../../components/inputs'

const UseLockedBodyDemo = () => {
  const [locked, setLocked] = useLockedBody(false)

  const toggleLocked = () => {
    setLocked(!locked)
  }

  return <Button onClick={toggleLocked} label={locked ? 'unlock scroll' : 'lock scroll'} />
}

const meta: Meta<typeof UseLockedBodyDemo> = {
  title: 'Hooks/useLockedBody',
  component: UseLockedBodyDemo,
}
export default meta

export const Hook: StoryFn<typeof UseLockedBodyDemo> = () => <UseLockedBodyDemo />
