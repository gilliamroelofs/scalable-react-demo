import { Meta, StoryFn } from '@storybook/react'

import { Column } from '../Column'
import { Grid } from './Grid'

import css from './Grid.stories.module.scss'

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  subcomponents: { Column },
}
export default meta

const BasicTemplate: StoryFn<typeof Grid> = args => (
  <div className={css.root}>
    <Grid {...args}>
      <Column>01</Column>
      <Column>02</Column>
      <Column>03</Column>
      <Column>04</Column>
      <Column>05</Column>
      <Column>06</Column>
      <Column>07</Column>
      <Column>08</Column>
      <Column>09</Column>
    </Grid>
  </div>
)

export const TemplateColumns: StoryFn<typeof Grid> = BasicTemplate.bind({})
TemplateColumns.args = {
  columns: 5,
  gutter: 4,
}

export const SpanningColumns: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column>01</Column>
        <Column>02</Column>
        <Column>03</Column>
        <Column span={2}>04</Column>
        <Column>05</Column>
        <Column>06</Column>
        <Column span={2}>07</Column>
      </Grid>
    </div>
  )
}
SpanningColumns.args = {
  columns: 3,
  gutter: 4,
}

export const StartingAndEndingLinesForColumns: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column start={2} span={4}>
          01
        </Column>
        <Column start={1} end={3}>
          02
        </Column>
        <Column end={7} span={2}>
          03
        </Column>
        <Column start={1} end={7}>
          04
        </Column>
      </Grid>
    </div>
  )
}
StartingAndEndingLinesForColumns.args = {
  columns: 6,
  gutter: 4,
}

export const TemplateRows: StoryFn<typeof Grid> = BasicTemplate.bind({})
TemplateRows.args = {
  flow: 'column',
  rows: 4,
  gutter: 4,
}

export const SpanningRows: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column rowSpan={3}>01</Column>
        <Column span={2}>02</Column>
        <Column rowSpan={2} span={2}>
          03
        </Column>
      </Grid>
    </div>
  )
}
SpanningRows.args = {
  flow: 'column',
  rows: 3,
  gutter: 4,
}

export const StartingAndEndingLinesForRows: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column rowStart={2} rowSpan={2}>
          01
        </Column>
        <Column rowEnd={3} rowSpan={2}>
          02
        </Column>
        <Column rowStart={1} rowEnd={4}>
          03
        </Column>
      </Grid>
    </div>
  )
}
StartingAndEndingLinesForRows.args = {
  flow: 'column',
  rows: 3,
  gutter: 4,
}

export const ControllingGridElementPlacement: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column span={2}>01</Column>
        <Column span={2}>02</Column>
        <Column>03</Column>
        <Column>04</Column>
        <Column>05</Column>
      </Grid>
    </div>
  )
}
ControllingGridElementPlacement.args = {
  flow: 'row-dense',
  columns: 3,
  rows: 3,
  gutter: 4,
}

export const SizingImplicitlyCreatedGridColumns: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column>01</Column>
        <Column>02</Column>
        <Column>03</Column>
      </Grid>
    </div>
  )
}
SizingImplicitlyCreatedGridColumns.args = {
  flow: 'row-dense',
  autoColumns: 'max',
  gutter: 4,
}

export const SizingImplicitlyCreatedGridRows: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column>01</Column>
        <Column>02</Column>
      </Grid>
    </div>
  )
}
SizingImplicitlyCreatedGridRows.args = {
  flow: 'row',
  autoRows: 'max',
  gutter: 4,
}

export const Gutters: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column>01</Column>
        <Column>02</Column>
        <Column>02</Column>
        <Column>04</Column>
        <Column>05</Column>
        <Column>06</Column>
      </Grid>
    </div>
  )
}
Gutters.args = {
  columns: 3,
  autoColumns: 'fr',
  columnGutter: 6,
  rowGutter: 10,
}

export const Responsive: StoryFn<typeof Grid> = args => (
  <div className={css.root}>
    <Grid {...args}>
      <Column>01</Column>
      <Column>02</Column>
      <Column>03</Column>
      <Column>04</Column>
      <Column>05</Column>
      <Column>06</Column>
      <Column>07</Column>
      <Column>08</Column>
      <Column>09</Column>
      <Column>10</Column>
      <Column>11</Column>
      <Column>12</Column>
      <Column>13</Column>
      <Column>14</Column>
      <Column>15</Column>
    </Grid>
  </div>
)
Responsive.args = {
  columnsXs: 4,
  columnsMd: 8,
  columnsLg: 12,
  columnsXl: 12,
  autoColumns: 'fr',
  gutter: 4,
}
export const Areas: StoryFn<typeof Grid> = args => {
  return (
    <div className={css.root}>
      <Grid {...args}>
        <Column area="header">header</Column>
        <Column area="aside">aside</Column>
        <Column area="main">Main</Column>
        <Column area="footer">Footer</Column>
      </Grid>
    </div>
  )
}
Areas.args = {
  areas: `
  'header header header'
  'aside main main'
  'footer footer footer'
  `,
  autoColumns: 'fr',
  gutter: 4,
}
