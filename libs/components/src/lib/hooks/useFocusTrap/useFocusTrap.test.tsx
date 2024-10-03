import type { FocusTrap } from 'focus-trap'
import { createFocusTrap } from 'focus-trap'
import type { RefObject } from 'react'
import { createRef } from 'react'
import { renderHook } from '@testing-library/react'

import { useFocusTrap } from './useFocusTrap'

vitest.mock('focus-trap', () => ({
  createFocusTrap: vitest.fn(),
}))
const createFocusTrapMock = vitest.mocked(createFocusTrap)

describe('useFocusTrap', () => {
  const activateMock = vitest.fn()
  const deactivateMock = vitest.fn()

  beforeEach(() => {
    vitest.clearAllMocks()

    createFocusTrapMock.mockReturnValue({
      active: false,
      activate: activateMock,
      deactivate: deactivateMock,
    } as unknown as FocusTrap)
  })

  it('should not call createFocusTrap when reference element is not available', () => {
    const ref = createRef<HTMLElement>()
    const { result } = renderHook(() => useFocusTrap({ ref }))
    const { activateTrap, deActivateTrap } = result.current

    expect(createFocusTrapMock).not.toHaveBeenCalled()
    expect(activateTrap).toBeTruthy()
    expect(deActivateTrap).toBeTruthy()
    expect(activateMock).not.toHaveBeenCalled()
    expect(deactivateMock).not.toHaveBeenCalled()
  })

  it('should call createFocusTrap when reference element is available', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() => useFocusTrap({ ref }))
    const { activateTrap, deActivateTrap } = result.current

    expect(createFocusTrapMock).toHaveBeenCalled()
    expect(createFocusTrapMock).toHaveBeenCalledWith('MOCKED ELEMENT', {
      escapeDeactivates: expect.any(Function),
      initialFocus: false,
    })
    expect(activateTrap).toBeTruthy()
    expect(deActivateTrap).toBeTruthy()
    expect(activateMock).not.toHaveBeenCalled()
    expect(deactivateMock).not.toHaveBeenCalled()
  })

  it('should call createFocusTrap when reference element via callback is available', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() => useFocusTrap({ ref: () => ref }))
    const { activateTrap, deActivateTrap } = result.current

    expect(createFocusTrapMock).toHaveBeenCalled()
    expect(activateTrap).toBeTruthy()
    expect(deActivateTrap).toBeTruthy()
    expect(activateMock).not.toHaveBeenCalled()
    expect(deactivateMock).not.toHaveBeenCalled()
  })

  it('should call activate when activateOnInit is set to true', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() => useFocusTrap({ ref, activateOnInit: true }))
    const { activateTrap, deActivateTrap } = result.current

    expect(createFocusTrapMock).toHaveBeenCalled()
    expect(activateTrap).toBeTruthy()
    expect(deActivateTrap).toBeTruthy()
    expect(activateMock).toHaveBeenCalled()
    expect(deactivateMock).not.toHaveBeenCalled()
  })

  it('should call activate when activateTrap is used', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() => useFocusTrap({ ref, activateOnInit: true }))
    const { activateTrap } = result.current
    activateTrap()
    expect(activateMock).toHaveBeenCalled()
  })

  it('should call deactivate when deActivateTrap is used', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() => useFocusTrap({ ref, activateOnInit: true }))
    const { deActivateTrap } = result.current
    deActivateTrap()
    expect(deactivateMock).toHaveBeenCalled()
  })

  it('should create focus trap with initialFocus undefined when focusFirstElementOnActivation is true', () => {
    const ref = { current: 'MOCKED ELEMENT' } as unknown as RefObject<HTMLElement>
    const { result } = renderHook(() =>
      useFocusTrap({ ref, activateOnInit: true, focusFirstElementOnActivation: true })
    )
    const { deActivateTrap } = result.current
    deActivateTrap()
    expect(createFocusTrapMock).toHaveBeenCalled()
    expect(createFocusTrapMock).toHaveBeenCalledWith('MOCKED ELEMENT', {
      escapeDeactivates: expect.any(Function),
      initialFocus: undefined,
    })
  })
})
