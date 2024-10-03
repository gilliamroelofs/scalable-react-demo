import type { PropsWithChildren, ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = PropsWithChildren<{
  className?: string
}>

export function Portal({ children, className }: PortalProps): ReactElement | null {
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = document.createElement('div')

    if (className) {
      el.classList.add(className)
    }

    document.body.appendChild(el)
    setElement(el)

    return () => {
      setElement(null)
      document.body.removeChild(el)
    }
  }, [className])

  if (!element) {
    return null
  }

  return createPortal(children, element)
}
