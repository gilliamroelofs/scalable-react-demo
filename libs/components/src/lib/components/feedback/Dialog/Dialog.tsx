import type { AriaAttributes, PropsWithChildren, ReactElement } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'


import css from './Dialog.module.scss'

import { Portal } from './components/Portal'
import { DialogFocusTrap } from './components/DialogFocusTrap'
import { useLockedBody } from '../../../hooks/useLockedBody'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { useEscapeKey } from '../../../hooks/useEscapeKey'
import { WithDataTestId } from '../../../types'

export type DialogProps = WithDataTestId &
  PropsWithChildren<
    {
      ariaLabelCloseButton?: string
      closeOnEscape?: boolean
      closeOnOutsideClick?: boolean
      isVisible?: boolean
      modalFooter?: ReactElement
      modalHeader?: ReactElement
      modalImage?: ReactElement
      onClose?: () => void
      showHeaderCloseButton?: boolean
    } & Pick<AriaAttributes, 'aria-label'>
  >

export function Dialog({
  children,
  closeOnEscape = true,
  closeOnOutsideClick = true,
  isVisible = false,
  onClose,
  'data-testid': dataTestId,
  ...rest
}: DialogProps): ReactElement | null {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const modalDialogRef = useRef<HTMLDivElement>(null)
  const modalDialogInnerRef = useRef<HTMLDivElement>(null)
  const { ['aria-label']: ariaLabel } = rest
  useLockedBody(isModalVisible)

  const closeDialog = useCallback(() => {
    if (modalDialogRef.current) {
      setIsModalVisible(false)

      if (onClose) {
        onClose()
      }
    }
  }, [onClose])

  useEscapeKey(closeDialog, closeOnEscape)
  useOutsideClick(closeDialog, modalDialogRef, closeOnOutsideClick)

  useEffect(() => {
    // sync modal visibility with prop from consumer
    if (isVisible !== isModalVisible) {
      setIsModalVisible(isVisible)
    }

    if (!isVisible) {
      closeDialog()
    }
  }, [closeDialog, isModalVisible, isVisible])

  return (
    <Portal>
      {!!isModalVisible && (
        <div data-testid="modal_backdrop" className={css.modalBackdrop}>
          <div
            aria-modal="true"
            role="dialog"
            aria-label={ariaLabel}
            className={css.modalDialog}
            ref={modalDialogRef}
            data-testid={dataTestId}
          >
            <DialogFocusTrap>
              <div className={css.modalDialogInner} ref={modalDialogInnerRef}>
                <div className={css.modalDialogContentContainer}>
                  <div className={css.modalDialogContent}>
                    {children}
                  </div>
                </div>
              </div>
            </DialogFocusTrap>
          </div>
        </div>
      )}
    </Portal>
  )
}
