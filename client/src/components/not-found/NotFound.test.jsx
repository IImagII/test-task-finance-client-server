import { render, screen } from '@testing-library/react'

import NotFoundInfo from './NotFound.jsx'

describe('NotFoundInfo', () => {
  it('renders correctly', () => {
    render(<NotFoundInfo />)
    const notFoundText = screen.getByText(/Нічого не знайдено/i)
    expect(notFoundText).toBeInTheDocument()
  })
})
