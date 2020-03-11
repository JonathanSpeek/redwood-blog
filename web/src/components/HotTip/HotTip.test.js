import { render, cleanup } from '@testing-library/react'

import HotTip from './HotTip'

describe('HotTip', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HotTip />)
    }).not.toThrow()
  })
})
