import type { PropsWithChildren, ReactElement, Ref } from 'react'
import { forwardRef } from 'react'

import css from './Card.module.scss'

export type CardContentProps = PropsWithChildren
function CardContentComponent(
  { children }: CardContentProps,
  ref: Ref<HTMLDivElement>
): ReactElement {
  return (
    <div ref={ref} className={css.content}>
      {children}
    </div>
  )
}

export const CardContent = forwardRef(CardContentComponent)
