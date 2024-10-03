import { ButtonHTMLAttributes, ReactElement, Ref, forwardRef } from 'react'

import { getButtonRootElementClassName } from '../ButtonClassName'
import { ButtonContent } from '../ButtonContent'
import { ButtonPropsBase } from '../types'
import { WithDataTestId } from '../../../../types'

export type ButtonProps = ButtonPropsBase & WithDataTestId & ButtonHTMLAttributes<HTMLButtonElement> & { label: string }

function ButtonComponent({
  disabled,
  size,
  label,
  color,
  type = 'button',
  ...rest
}: ButtonProps, ref: Ref<HTMLButtonElement>): ReactElement {
  const className = getButtonRootElementClassName({ disabled, size, color })

  return (
    <button className={className} disabled={disabled} ref={ref} type={type} {...rest}>
      <ButtonContent label={label} />
    </button>
  )
}

export const Button = forwardRef(ButtonComponent)