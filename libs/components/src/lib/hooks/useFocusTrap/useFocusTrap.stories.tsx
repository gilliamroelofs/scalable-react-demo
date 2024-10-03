import { Fragment, useRef, useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { useFocusTrap } from './useFocusTrap'
import { Button } from '../../components/inputs'
import { Typography } from '../../components/data'

const UseFocusTrapDemo = () => {
  const [deactivateOnEscape, setDeactivateOnEscape] = useState(false)
  const [focusFirstElementOnActivation, setFocusFirstElementOnActivation] = useState(false)
  const ref = useRef(null)
  const { activateTrap, deActivateTrap } = useFocusTrap({ ref, deactivateOnEscape, focusFirstElementOnActivation })

  return (
    <Fragment>
      <Button color="denim" size="small" onClick={() => activateTrap()} label="Activate Trap" />
      <label htmlFor="deactivate-on-esc">
        <input
          id="deactivate-on-esc"
          type="checkbox"
          checked={deactivateOnEscape}
          onChange={() => setDeactivateOnEscape(!deactivateOnEscape)}
        />
        Deactive on `ESC`
      </label>
      <label htmlFor="focus-first-element">
        <input
          id="focus-first-element"
          type="checkbox"
          checked={focusFirstElementOnActivation}
          onChange={() => setFocusFirstElementOnActivation(!focusFirstElementOnActivation)}
        />
        Focus first focusable element
      </label>
      <hr />
      <div
        ref={ref}
        style={{
          maxWidth: '500px',
          backgroundColor: '#e5e7eb',
          padding: '2rem',
        }}
      >
        <Typography as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Button color="viridian" size="small" label="Lorem ipsum" />
        <hr />
      <Button color="denim" size="small" onClick={() => deActivateTrap()} label="Deactivate Trap" />
      </div>
    </Fragment>
  )
}

const meta: Meta<typeof UseFocusTrapDemo> = {
  title: 'Hooks/useFocusTrap',
  component: UseFocusTrapDemo,
}
export default meta

export const Hook: StoryFn<typeof UseFocusTrapDemo> = () => <UseFocusTrapDemo />
