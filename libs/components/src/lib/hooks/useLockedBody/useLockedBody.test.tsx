import { act, renderHook } from '@testing-library/react'

import { useLockedBody } from './useLockedBody'

describe('useLockedBody', () => {
  const observeMock = vitest.fn()
  const disconnectMock = vitest.fn()
  const intersectionObserverMock = vitest.fn().mockImplementation(() => ({
    observe: observeMock,
    disconnect: disconnectMock,
  }))

  beforeEach(() => {
    global.IntersectionObserver = intersectionObserverMock
  })

  it('should have locked as false by default', () => {
    const { result } = renderHook(() => useLockedBody())
    // Act
    act(() => {
      const [isLocked] = result.current

      expect(isLocked).toBeFalsy()
    })
  })

  it('should set overflow on body on initial value', () => {
    const { result } = renderHook(() => useLockedBody(true))

    // Act
    act(() => {
      const [isLocked] = result.current
      expect(isLocked).toBeTruthy()
      expect(document.body.style['overflow']).toBe('hidden')
    })
  })
})
