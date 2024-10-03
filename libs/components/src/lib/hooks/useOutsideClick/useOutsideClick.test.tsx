import { renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useOutsideClick } from './useOutsideClick'

describe('useOutsideClick', () => {
  beforeEach(() => {
    vitest.clearAllMocks()
  })

  it.each([
    {
      case: 'should call the handler when clicked outside the ref element and `isActive` is true',
      isActive: true,
      clickedElement: document.body,
      expectToHaveBeenCalled: true,
    },
    {
      case: 'should not call the handler when clicked outside the ref element and `isActive` is false',
      isActive: false,
      clickedElement: document.body,
      expectToHaveBeenCalled: false,
    },
    {
      case: 'should not call the handler when clicked inside the ref element and `isActive` is true',
      isActive: true,
      expectToHaveBeenCalled: false,
    },
    {
      case: 'should not call the handler when clicked inside the ref element and `isActive` is false',
      isActive: false,
      expectToHaveBeenCalled: false,
    },
  ])('$case', async ({ isActive, clickedElement, expectToHaveBeenCalled }) => {
    // Arrange
    const handler = vitest.fn()
    const ref = { current: document.createElement('div') }
    renderHook(() => useOutsideClick(handler, ref, isActive))

    // Act (when clickedElement is undefined, the ref element is clicked aka inside click)
    await userEvent.click(clickedElement || ref.current)

    // Assert
    if (expectToHaveBeenCalled) {
      expect(handler).toHaveBeenCalled()
    }

    if (!expectToHaveBeenCalled) {
      expect(handler).not.toHaveBeenCalled()
    }
  })
})
