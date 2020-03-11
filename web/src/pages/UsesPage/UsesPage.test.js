import { render, cleanup } from '@testing-library/react'

import UsesPage from './UsesPage'

describe('UsesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<UsesPage />)
    }).not.toThrow()
  })
})
