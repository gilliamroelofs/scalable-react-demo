import type { RefObject } from 'react'
import { useCallback, useEffect } from 'react'

const MOUSE_UP = 'mouseup'
const TOUCH_END = 'touchend'

export function useOutsideClick(
  handler: () => void,
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  isActive = true
): void {
  const handleClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (Array.isArray(ref)) {
        if (!ref.some(r => r?.current?.contains(event.target as Node))) {
          event.preventDefault()
          handler()
        }
        return
      }

      if (ref?.current?.contains && !ref.current.contains(event.target as Node)) {
        event.preventDefault()
        handler()
      }
    },
    [handler, ref]
  )

  useEffect(() => {
    if (!isActive) {
      return
    }
    document.addEventListener(MOUSE_UP, handleClick)
    document.addEventListener(TOUCH_END, handleClick)

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick)
      document.removeEventListener(TOUCH_END, handleClick)
    }
  }, [handleClick, isActive])
}
