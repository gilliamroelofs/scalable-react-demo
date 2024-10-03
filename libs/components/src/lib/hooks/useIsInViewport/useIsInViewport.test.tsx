import type { ReactElement } from 'react'
import { act, render, renderHook } from '@testing-library/react'

import { useIsInViewport } from './useIsInViewport'

const TestComponent = (): ReactElement => {
  const [isInViewport, ref] = useIsInViewport()

  return (
    <div style={{ height: '200px' }}>
      <div style={{ height: '100px' }} data-testid="referenced-element" ref={ref}>
        OBSERVED_ELEMENT
      </div>
      <div style={{ height: '100px' }} data-testid="boolean-element">
        {isInViewport?.toString()}
      </div>
    </div>
  )
}

describe('useIsInViewport', () => {
  const observeMock = vitest.fn()
  const disconnectMock = vitest.fn()
  const intersectionObserverMock = vitest.fn().mockImplementation(() => ({
    observe: observeMock,
    disconnect: disconnectMock,
  }))

  beforeEach(() => {
    global.IntersectionObserver = intersectionObserverMock
  })

  it('should set isInViewport when IntersectionObserver callback fires', () => {
    const { result } = renderHook(() => useIsInViewport())
    // Act
    act(() => {
      const [isInViewport] = result.current

      expect(isInViewport).toBeFalsy()
    })

    act(() => {
      const [callback] = intersectionObserverMock.mock.calls[0]

      callback([
        {
          isIntersecting: true,
        },
      ])
    })

    act(() => {
      const [isInViewport] = result.current

      expect(isInViewport).toBeTruthy()
    })
  })

  it('should observe reference element', () => {
    render(<TestComponent />)

    expect(observeMock).toHaveBeenCalledTimes(1)
    expect(disconnectMock).toHaveBeenCalledTimes(1)
  })
})
