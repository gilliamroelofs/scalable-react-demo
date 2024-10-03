import { render } from '@testing-library/react'

import { Portal } from './Portal'

describe('Portal', () => {
  const appendChildSpy = vitest.spyOn(document.body, 'appendChild')
  const createElementSpy = vitest.spyOn(document, 'createElement')

  afterEach(() => {
    appendChildSpy.mockClear()
    createElementSpy.mockClear()
  })

  it('should add portal div to body', () => {
    render(<Portal className="test-portal" />)

    expect(appendChildSpy).toHaveBeenCalledTimes(2)
    expect(createElementSpy).toHaveBeenCalledWith('div')
    expect(document.body.getElementsByClassName('test-portal')).toHaveLength(1)
  })
})
