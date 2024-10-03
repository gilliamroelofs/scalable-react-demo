import { forwardRef, InputHTMLAttributes, ReactElement, Ref } from "react";

import css from './TextField.module.scss'

import { Typography } from "../../data";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  error?: string
}
function TextFieldComponent({
  id,
  label,
  error,
  ...rest
}: TextFieldProps, ref: Ref<HTMLInputElement>): ReactElement {
  return (
    <div className={css.control}>
      <label htmlFor={id} className={css.label}>
        <Typography as="span" variant="text-base">{label}</Typography>
      </label>
      <input {...rest} id={id} className={css.input} ref={ref} />
      {error && <Typography as="p" color="error" variant="text-base">{error}</Typography>}
    </div>
  )
}
export const TextField = forwardRef(TextFieldComponent)