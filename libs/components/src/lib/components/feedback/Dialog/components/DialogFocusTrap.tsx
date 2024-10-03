import { useFocusTrap } from '../../../../hooks/useFocusTrap'
import type { PropsWithChildren, ReactElement } from 'react'
import { useRef } from 'react'

export function DialogFocusTrap({ children }: PropsWithChildren): ReactElement {
  const wrapRef = useRef<HTMLDivElement>(null)
  useFocusTrap({
    ref: wrapRef,
    deactivateOnEscape: true,
    activateOnInit: true,
  })

  return <div ref={wrapRef}>{children}</div>
}
