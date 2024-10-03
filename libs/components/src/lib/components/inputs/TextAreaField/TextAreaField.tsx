import { forwardRef, TextareaHTMLAttributes, ReactElement, Ref } from "react";

import css from './TextAreaField.module.scss'

import { Typography } from "../../data";

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string
  label: string
  error?: string
}
function TextAreaFieldComponent({
  id,
  label,
  error,
  ...rest
}: TextAreaFieldProps, ref: Ref<HTMLTextAreaElement>): ReactElement {
  return (
    <div className={css.control}>
      <label htmlFor={id} className={css.label}>
        <Typography as="span" variant="text-base">{label}</Typography>
      </label>
      <textarea {...rest} id={id} className={css.input} ref={ref}/>
      {error && <Typography as="p" color="error" variant="text-base">{error}</Typography>}
    </div>
  )
}
export const TextAreaField = forwardRef(TextAreaFieldComponent)