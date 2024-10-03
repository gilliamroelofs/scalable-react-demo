import { WithDataTestId } from '../../../types'
import css from './Button.module.scss'

export type ButtonContentProps = WithDataTestId & {
  label: string
}

export function ButtonContent({ label }: ButtonContentProps) {
  return (
    <div className={css.content}>
      <span className={css.text}>{label}</span>
    </div>
  )
}
