import { PropsWithChildren, ReactElement } from 'react'

import css from './Container.module.scss'
import { WithDataTestId } from '../../../types'

export type ContainerProps = PropsWithChildren<WithDataTestId>

export function Container({
  children,
  'data-testid': dataTestId,
}: ContainerProps): ReactElement | null {
  return (
    <div data-testid={dataTestId} className={css.container}>
      {children}
    </div>
  )
}
