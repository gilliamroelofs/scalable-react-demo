import classNames from 'classnames'
import { PropsWithChildren } from 'react'

import css from './Column.module.scss'
import { ObjectWithBreakPointVariants, WithDataTestId } from 'libs/components/src/lib/types'

export type ColumnPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'auto'
export type RowPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'auto'
export type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'full'
export type RowSpan = 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'full'

export type SpanVariants = ObjectWithBreakPointVariants<{ span?: ColumnSpan }>
export type StartVariants = ObjectWithBreakPointVariants<{ start?: ColumnPosition }>
export type EndVariants = ObjectWithBreakPointVariants<{ end?: ColumnPosition }>
export type RowSpanVariants = ObjectWithBreakPointVariants<{ rowSpan?: ColumnSpan }>
export type RowStartVariants = ObjectWithBreakPointVariants<{ rowStart?: ColumnPosition }>
export type RowEndVariants = ObjectWithBreakPointVariants<{ rowEnd?: ColumnPosition }>

function getSpanClasses({
  span,
  spanXs,
  spanMd,
  spanLg,
  spanXl,
}: SpanVariants): (string | undefined)[] {
  return [
    span && css[`col-span-${span}`],
    spanXs && css[`xs-col-span-${spanXs}`],
    spanMd && css[`md-col-span-${spanMd}`],
    spanLg && css[`lg-col-span-${spanLg}`],
    spanXl && css[`xl-col-span-${spanXl}`],
  ]
}

function getStartClasses({
  start,
  startXs,
  startMd,
  startLg,
  startXl,
}: StartVariants): (string | undefined)[] {
  return [
    start && css[`col-start-${start}`],
    startXs && css[`xs-col-start-${startXs}`],
    startMd && css[`md-col-start-${startMd}`],
    startLg && css[`lg-col-start-${startLg}`],
    startXl && css[`xl-col-start-${startXl}`],
  ]
}

function getEndClasses({ end, endXs, endMd, endLg, endXl }: EndVariants): (string | undefined)[] {
  return [
    end && css[`col-end-${end}`],
    endXs && css[`xs-col-end-${endXs}`],
    endMd && css[`md-col-end-${endMd}`],
    endLg && css[`lg-col-end-${endLg}`],
    endXl && css[`xl-col-end-${endXl}`],
  ]
}

function getRowSpanClasses({
  rowSpan,
  rowSpanXs,
  rowSpanMd,
  rowSpanLg,
  rowSpanXl,
}: RowSpanVariants): (string | undefined)[] {
  return [
    rowSpan && css[`row-span-${rowSpan}`],
    rowSpanXs && css[`xs-row-span-${rowSpanXs}`],
    rowSpanMd && css[`md-row-span-${rowSpanMd}`],
    rowSpanLg && css[`lg-row-span-${rowSpanLg}`],
    rowSpanXl && css[`xl-row-span-${rowSpanXl}`],
  ]
}

function getRowStartClasses({
  rowStart,
  rowStartXs,
  rowStartMd,
  rowStartLg,
  rowStartXl,
}: RowStartVariants): (string | undefined)[] {
  return [
    rowStart && css[`row-start-${rowStart}`],
    rowStartXs && css[`xs-row-start-${rowStartXs}`],
    rowStartMd && css[`md-row-start-${rowStartMd}`],
    rowStartLg && css[`lg-row-start-${rowStartLg}`],
    rowStartXl && css[`xl-row-start-${rowStartXl}`],
  ]
}

function getRowEndClasses({
  rowEnd,
  rowEndXs,
  rowEndMd,
  rowEndLg,
  rowEndXl,
}: RowEndVariants): (string | undefined)[] {
  return [
    rowEnd && css[`row-end-${rowEnd}`],
    rowEndXs && css[`xs-row-end-${rowEndXs}`],
    rowEndMd && css[`md-row-end-${rowEndMd}`],
    rowEndLg && css[`lg-row-end-${rowEndLg}`],
    rowEndXl && css[`xl-row-end-${rowEndXl}`],
  ]
}

export type ColumnProps = PropsWithChildren<
  WithDataTestId &
    SpanVariants &
    StartVariants &
    EndVariants &
    RowSpanVariants &
    RowStartVariants &
    RowEndVariants & {
      area?: string
    }
>

export function Column({ children, 'data-testid': dataTestId, area, ...rest }: ColumnProps) {
  const columnClasses = classNames(
    css.column,
    getSpanClasses(rest),
    getStartClasses(rest),
    getEndClasses(rest),
    getRowSpanClasses(rest),
    getRowStartClasses(rest),
    getRowEndClasses(rest)
  )

  const style = { gridArea: area }

  return (
    <div data-testid={dataTestId} className={columnClasses} style={style}>
      {children}
    </div>
  )
}
