import { PropsWithChildren, ReactElement, ReactNode } from 'react'

import css from './CenteredPageTemplate.module.scss'
import { Container } from '../../layout'

export type CenteredPageTemplateProps = PropsWithChildren<{
  header: ReactNode
  footer: ReactNode
}>

export function CenteredPageTemplate({
  children,
  header,
  footer
}: CenteredPageTemplateProps): ReactElement | null {
  return (
    <div className={css.root}>
      <header className={css.header}>
        {header}
      </header>

      <main className={css.main}>
        <Container>
          {children}
        </Container>
      </main>

      <footer className={css.footer}>
        {footer}
      </footer>
    </div>
  )
}
