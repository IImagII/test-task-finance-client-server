import { render, screen } from '@testing-library/react'

import List from './List.jsx'

describe('List', () => {
  test('renders ticker', () => {
    const mockData = { ticker: 'AAPL', price: 120.0, change_percent: 1.5 }
    render(<List {...mockData} />)

    expect(screen.getByText('AAPL')).toBeInTheDocument()
  })

  test('renders price with correct color', () => {
    const mockData = { ticker: 'AAPL', price: 120.0, change_percent: 1.5 }
    render(<List {...mockData} />)

    expect(screen.getByText('120.0 $')).toHaveStyle('color: #00b300')
  })

  test('renders percent with correct color', () => {
    const mockData = { ticker: 'AAPL', price: 120.0, change_percent: -1.5 }
    render(<List {...mockData} />)

    expect(screen.getByText('-1.5 %')).toHaveStyle('color: #ff0000')
  })
})
