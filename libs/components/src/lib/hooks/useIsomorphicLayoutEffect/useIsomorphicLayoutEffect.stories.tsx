import { Meta, StoryFn } from '@storybook/react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const UseIsoMorphicLayoutEffectDemo = () => {
  useIsomorphicLayoutEffect(() => {
    console.log("In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.")
  }, [])

  return <p>Hello, world</p>
}

const meta: Meta<typeof UseIsoMorphicLayoutEffectDemo> = {
  title: 'Hooks/useIsoMorphicLayoutEffect',
  component: UseIsoMorphicLayoutEffectDemo,
}
export default meta

export const Hook: StoryFn<typeof UseIsoMorphicLayoutEffectDemo> = () => (
  <UseIsoMorphicLayoutEffectDemo />
)
