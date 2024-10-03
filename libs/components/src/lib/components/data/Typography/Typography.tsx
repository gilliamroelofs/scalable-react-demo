import { PropsWithChildren, ReactElement } from "react"
import classNames from 'classnames'

import css from './Typography.module.scss'

export const TYPOGRAPHY_AS_OPTIONS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'] as const;
export type TypographyAsOptionTuple = typeof TYPOGRAPHY_AS_OPTIONS;
export type TypographyAsOption = TypographyAsOptionTuple[number];

export const TYPOGRAPHY_VARIANTS = ['heading-4xl', 'heading-3xl', 'heading-2xl', 'heading-xl', 'heading-lg', 'heading-sm', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs'] as const;
export type TypographyVariantsTuple = typeof TYPOGRAPHY_VARIANTS;
export type TypographyVariant = TypographyVariantsTuple[number];

export const TYPOGRAPHY_TYPES = ['body', 'muted'] as const;
export type TypographyTypeTuple = typeof TYPOGRAPHY_TYPES;
export type TypographyType = TypographyTypeTuple[number];

export type TypographyProps = PropsWithChildren<{
  as: TypographyAsOption,
  variant?: TypographyVariant
  bold?: boolean
  color?: 'primary' | 'error'
}>

export function Typography({
  as: Component,
  children,
  variant,
  color,
  bold
}: TypographyProps): ReactElement {
  const className = classNames(
    css.root,
    variant && css[`variant-${variant}`],
    bold && css.bold,
    color && css[`color-${color}`]
  )

  return <Component className={className} >{children}</Component>
}