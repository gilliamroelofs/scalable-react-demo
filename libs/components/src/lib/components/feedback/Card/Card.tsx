import type { PropsWithChildren, ReactElement, Ref } from 'react'
import { forwardRef } from 'react'

import css from './Card.module.scss'

export type CardProps = PropsWithChildren
function CardComponent(
  { children }: CardProps,
  ref: Ref<HTMLDivElement>
): ReactElement {
  return (
    <div ref={ref} className={css.card}>
      {children}
    </div>
  )
}

export const Card = forwardRef(CardComponent)
