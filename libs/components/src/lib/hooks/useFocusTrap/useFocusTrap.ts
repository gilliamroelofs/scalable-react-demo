import type { FocusTrap } from 'focus-trap'
import { createFocusTrap } from 'focus-trap'
import type { MutableRefObject, RefObject } from 'react'
import { useEffect, useState } from 'react'

type UseFocusTrapResult = {
  activateTrap: () => void
  deActivateTrap: () => void
}
type UseFocusTrapOptions<T> = {
  ref: RefType<T> | (() => RefType<T>)
  activateOnInit?: boolean
  deactivateOnEscape?: boolean
  focusFirstElementOnActivation?: boolean
}
type RefType<T> = RefObject<T> | MutableRefObject<T>
export function useFocusTrap<T extends HTMLElement>({
  ref: refOrCallback,
  deactivateOnEscape = false,
  activateOnInit,
  focusFirstElementOnActivation = false,
}: UseFocusTrapOptions<T>): UseFocusTrapResult {
  const [trap, setTrap] = useState<null | FocusTrap>(null)

  useEffect(() => {
    const getFocusTrapRef = (): RefType<T> => {
      if (typeof refOrCallback === 'function') {
        const ref = refOrCallback()
        return ref
      }

      return refOrCallback
    }

    const refEl = getFocusTrapRef()

    if (!refEl.current) {
      return
    }

    const focusTrap = createFocusTrap(refEl.current, {
      escapeDeactivates: () => deactivateOnEscape,
      initialFocus: focusFirstElementOnActivation ? undefined : false,
    })

    if (activateOnInit) {
      focusTrap.activate()
    }

    setTrap(focusTrap)

    return () => {
      if (focusTrap.active) {
        focusTrap.deactivate()
      }
    }
  }, [activateOnInit, refOrCallback, deactivateOnEscape, focusFirstElementOnActivation])

  const activateTrap = (): void => {
    trap?.activate()
  }

  const deActivateTrap = (): void => {
    trap?.deactivate()
  }

  return {
    activateTrap,
    deActivateTrap,
  }
}
