import { render, cleanup } from '@testing-library/react'

import HotTipPage from './HotTipPage'

describe('HotTipPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<HotTipPage />)
    }).not.toThrow()
  })
})
