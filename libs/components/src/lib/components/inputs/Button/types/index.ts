export const BUTTON_SIZE_OPTIONS = ['small', 'medium', 'large'] as const;
export type ButtonSizeTuple = typeof BUTTON_SIZE_OPTIONS;
export type ButtonSize = ButtonSizeTuple[number];

export const BUTTON_COLOR_OPTIONS = ['primary'] as const;
export type ButtonColorTuple = typeof BUTTON_COLOR_OPTIONS;
export type ButtonColor = ButtonColorTuple[number];

export type ButtonPropsBase = {
  disabled?: boolean
  size?: ButtonSize
  color?: ButtonColor
}
