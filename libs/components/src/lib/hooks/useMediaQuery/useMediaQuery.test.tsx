import { renderHook } from '@testing-library/react'

import type { UseMediaQueryOptions } from './useMediaQuery'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
  const breakpointCases: { options: UseMediaQueryOptions; query: string }[] = [
    { options: { up: 'xs' }, query: '(min-width: 0)' },
    { options: { up: 'md' }, query: '(min-width: 744px)' },
    { options: { up: 'lg' }, query: '(min-width: 980px)' },
    { options: { up: 'xl' }, query: '(min-width: 1280px)' },
    { options: { down: 'md' }, query: '(max-width: 744px)' },
    { options: { down: 'lg' }, query: '(max-width: 980px)' },
    { options: { down: 'xl' }, query: '(max-width: 1280px)' },
    {
      options: { between: { min: 'md', max: 'xl' } },
      query: '(min-width: 744px) and (max-width: 1280px)',
    },
  ]

  const addEventListenerMock = vitest.fn()
  const removeEventListenerMock = vitest.fn()
  const matchMediaMock = vitest.fn()

  beforeEach(() => {
    global.matchMedia = matchMediaMock
  })

  afterEach(() => {
    addEventListenerMock.mockReset()
    removeEventListenerMock.mockReset()
    matchMediaMock.mockReset()
  })

  it('should use matchMedia to watch media query', () => {
    matchMediaMock.mockImplementation(() => {
      return {
        matches: false,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
      }
    })

    const { result, unmount } = renderHook(() => useMediaQuery({ up: 'md' }))

    const matches = result.current

    expect(matches).toBeFalsy()
    expect(addEventListenerMock).toHaveBeenCalledTimes(1)

    // act
    unmount()
    expect(addEventListenerMock).toHaveBeenCalledTimes(1)
    expect(removeEventListenerMock).toHaveBeenCalledTimes(1)
  })

  it.each(breakpointCases)(
    'should map breakpoint to the correct min-width media query',
    ({ options, query }) => {
      matchMediaMock.mockImplementation(() => {
        return {
          matches: true,
          addEventListener: vitest.fn(),
          removeEventListener: vitest.fn(),
        }
      })

      renderHook(() => useMediaQuery(options))

      expect(matchMediaMock).toHaveBeenCalledWith(query)
    }
  )

  it('should use deprecated addListener and removeListener on old devices when new version is undefined', () => {
    const addListenerMock = vitest.fn()
    const removeListenerMock = vitest.fn()

    matchMediaMock.mockImplementation(() => {
      return {
        matches: false,
        addEventListener: undefined,
        removeEventListener: undefined,
        addListener: addListenerMock,
        removeListener: removeListenerMock,
      }
    })

    const { result, unmount } = renderHook(() => useMediaQuery({ up: 'md' }))

    const matches = result.current

    expect(matches).toBeFalsy()
    expect(addEventListenerMock).toHaveBeenCalledTimes(0)
    expect(addListenerMock).toHaveBeenCalledTimes(1)

    unmount()
    expect(addEventListenerMock).toHaveBeenCalledTimes(0)
    expect(removeEventListenerMock).toHaveBeenCalledTimes(0)
    expect(addListenerMock).toHaveBeenCalledTimes(1)
    expect(removeListenerMock).toHaveBeenCalledTimes(1)
  })
})
