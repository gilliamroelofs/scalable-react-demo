export type Breakpoint = 'xs' | 'md' | 'lg' | 'xl'

export type GetBreakPointVariants<T> = {
  [Property in keyof T as `${string & Property}${Capitalize<Breakpoint>}`]: T[Property]
}

export type ObjectWithBreakPointVariants<T> = T & GetBreakPointVariants<T>
