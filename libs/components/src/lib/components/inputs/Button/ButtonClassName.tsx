import classNames from 'classnames'

import { ButtonPropsBase } from './types'

import css from './Button.module.scss'

export function getButtonRootElementClassName({
  color = 'viridian',
  size = 'medium',
  disabled,
}: ButtonPropsBase) {
  return classNames(css.button, css[size], css[color], disabled && css.disabled)
}
