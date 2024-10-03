import type { PropsWithChildren, ReactElement, Ref } from 'react'
import { forwardRef } from 'react'

import css from './Card.module.scss'

export type CardFooterProps = PropsWithChildren
function CardFooterComponent(
  { children }: CardFooterProps,
  ref: Ref<HTMLDivElement>
): ReactElement {
  return (
    <div ref={ref} className={css.footer}>
      {children}
    </div>
  )
}

export const CardFooter = forwardRef(CardFooterComponent)
