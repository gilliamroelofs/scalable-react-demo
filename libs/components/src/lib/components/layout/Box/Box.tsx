import classNames from 'classnames'
import { PropsWithChildren, type ReactElement } from 'react'

import css from './Box.module.scss'
import { Spacer } from '../../../types'

export type BoxProps = PropsWithChildren<{
  as: 'div' | 'span'
  padding?: Spacer
  margin?: Spacer
}>

export function Box({
  children,
  padding,
  margin,
  as: Component = 'div',
}: BoxProps): ReactElement {
  const boxClassNames = classNames(
    css.root,
    typeof padding === 'number' ? css[`p-${padding}`] : undefined,
    typeof margin === 'number' ? css[`m-${padding}`] : undefined,
  )

  return (
    <Component className={boxClassNames}>
      {children}
    </Component>
  )
}
