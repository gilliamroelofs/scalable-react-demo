import classNames from 'classnames'
import { PropsWithChildren, ReactElement } from 'react'

import css from './Grid.module.scss'
import { ObjectWithBreakPointVariants, Spacer, WithDataTestId } from '../../../../types'

export type ImplicitSize = 'auto' | 'min' | 'max' | 'fr'
export type ImplicitFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none'
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | 'none'
export type GridTemplateProps = Omit<GridProps, 'children'>
export type ColumnVariants = ObjectWithBreakPointVariants<{ columns?: GridColumns }>
export type RowsVariants = ObjectWithBreakPointVariants<{ rows?: GridRows }>
export type FlowVariants = ObjectWithBreakPointVariants<{ flow?: ImplicitFlow }>
export type AutoColumnVariants = ObjectWithBreakPointVariants<{ autoColumns?: ImplicitSize }>
export type AutoRowsVariants = ObjectWithBreakPointVariants<{ autoRows?: ImplicitSize }>
export type GutterVariants = ObjectWithBreakPointVariants<{ gutter?: Spacer }>
export type ColumnGutterVariants = ObjectWithBreakPointVariants<{ columnGutter?: Spacer }>
export type RowGutterVariants = ObjectWithBreakPointVariants<{ rowGutter?: Spacer }>

export type GridProps = PropsWithChildren<
  WithDataTestId &
    ColumnVariants &
    RowsVariants &
    FlowVariants &
    AutoColumnVariants &
    AutoRowsVariants &
    GutterVariants &
    ColumnGutterVariants &
    RowGutterVariants & {
      areas?: string
    }
>

function getColumnClasses({
  columns,
  columnsXs,
  columnsMd,
  columnsLg,
  columnsXl,
}: ColumnVariants): (string | undefined)[] {
  return [
    columns && css[`grid-cols-${columns}`],
    columnsXs && css[`xs-grid-cols-${columnsXs}`],
    columnsMd && css[`md-grid-cols-${columnsMd}`],
    columnsLg && css[`lg-grid-cols-${columnsLg}`],
    columnsXl && css[`xl-grid-cols-${columnsXl}`],
  ]
}

function getRowClasses({
  rows,
  rowsXs,
  rowsMd,
  rowsLg,
  rowsXl,
}: RowsVariants): (string | undefined)[] {
  return [
    rows && css[`grid-rows-${rows}`],
    rowsXs && css[`xs-grid-rows-${rowsXs}`],
    rowsMd && css[`md-grid-rows-${rowsMd}`],
    rowsLg && css[`lg-grid-rows-${rowsLg}`],
    rowsXl && css[`xl-grid-rows-${rowsXl}`],
  ]
}

function getFlowClasses({
  flow,
  flowXs,
  flowMd,
  flowLg,
  flowXl,
}: FlowVariants): (string | undefined)[] {
  return [
    flow && css[`grid-flow-${flow}`],
    flowXs && css[`xs-grid-flow-${flowXs}`],
    flowMd && css[`md-grid-flow-${flowMd}`],
    flowLg && css[`lg-grid-flow-${flowLg}`],
    flowXl && css[`xl-grid-flow-${flowXl}`],
  ]
}

function getAutoColumnsClasses({
  autoColumns,
  autoColumnsXs,
  autoColumnsMd,
  autoColumnsLg,
  autoColumnsXl,
}: AutoColumnVariants): (string | undefined)[] {
  return [
    autoColumns && css[`auto-cols-${autoColumns}`],
    autoColumnsXs && css[`xs-auto-cols-${autoColumnsXs}`],
    autoColumnsMd && css[`md-auto-cols-${autoColumnsMd}`],
    autoColumnsLg && css[`lg-auto-cols-${autoColumnsLg}`],
    autoColumnsXl && css[`xl-auto-cols-${autoColumnsXl}`],
  ]
}

function getAutoRowsClasses({
  autoRows,
  autoRowsXs,
  autoRowsMd,
  autoRowsLg,
  autoRowsXl,
}: AutoRowsVariants): (string | undefined)[] {
  return [
    autoRows && css[`auto-rows-${autoRows}`],
    autoRowsXs && css[`xs-auto-rows-${autoRowsXs}`],
    autoRowsMd && css[`md-auto-rows-${autoRowsMd}`],
    autoRowsLg && css[`lg-auto-rows-${autoRowsLg}`],
    autoRowsXl && css[`xl-auto-rows-${autoRowsXl}`],
  ]
}

function getGutterClasses({
  gutter,
  gutterXs,
  gutterMd,
  gutterLg,
  gutterXl,
}: GutterVariants): (string | undefined)[] {
  return [
    typeof gutter === 'number' ? css[`gap-${gutter}`] : undefined,
    typeof gutterXs === 'number' ? css[`xs-gap-${gutterXs}`] : undefined,
    typeof gutterMd === 'number' ? css[`md-gap-${gutterMd}`] : undefined,
    typeof gutterLg === 'number' ? css[`lg-gap-${gutterLg}`] : undefined,
    typeof gutterXl === 'number' ? css[`xl-gap-${gutterXl}`] : undefined,
  ]
}

function getcolumnGutterClasses({
  columnGutter,
  columnGutterXs,
  columnGutterMd,
  columnGutterLg,
  columnGutterXl,
}: ColumnGutterVariants): (string | undefined)[] {
  return [
    typeof columnGutter === 'number' ? css[`gap-x-${columnGutter}`] : undefined,
    typeof columnGutterXs === 'number' ? css[`xs-gap-x-${columnGutterXs}`] : undefined,
    typeof columnGutterMd === 'number' ? css[`md-gap-x-${columnGutterMd}`] : undefined,
    typeof columnGutterLg === 'number' ? css[`lg-gap-x-${columnGutterLg}`] : undefined,
    typeof columnGutterXl === 'number' ? css[`xl-gap-x-${columnGutterXl}`] : undefined,
  ]
}

function getrowGutterClasses({
  rowGutter,
  rowGutterXs,
  rowGutterMd,
  rowGutterLg,
  rowGutterXl,
}: RowGutterVariants): (string | undefined)[] {
  return [
    typeof rowGutter === 'number' ? css[`gap-y-${rowGutter}`] : undefined,
    typeof rowGutterXs === 'number' ? css[`xs-gap-y-${rowGutterXs}`] : undefined,
    typeof rowGutterMd === 'number' ? css[`md-gap-y-${rowGutterMd}`] : undefined,
    typeof rowGutterLg === 'number' ? css[`lg-gap-y-${rowGutterLg}`] : undefined,
    typeof rowGutterXl === 'number' ? css[`xl-gap-y-${rowGutterXl}`] : undefined,
  ]
}

export function Grid({
  children,
  'data-testid': dataTestId,
  ...rest
}: GridProps): ReactElement | null {
  const props = rest

  const gridClasses = classNames(
    css.grid,
    getColumnClasses(props),
    getRowClasses(props),
    getFlowClasses(props),
    getAutoColumnsClasses(props),
    getAutoRowsClasses(props),
    getGutterClasses(props),
    getcolumnGutterClasses(props),
    getrowGutterClasses(props)
  )

  const style = { gridTemplateAreas: props.areas }

  return (
    <div data-testid={dataTestId} className={gridClasses} style={style}>
      {children}
    </div>
  )
}
