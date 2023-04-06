import { render } from '@testing-library/react'

import Header from './Header.jsx'

//mock data for testing
jest.mock('../../hooks/context/useContextProvider.jsx', () => ({
  TickerContext: {
    Consumer: ({ children }) =>
      children({ ticker: [{ ticker: 'AAPL', name: 'Apple' }] })
  }
}))

describe('Header', () => {
  it('render ticker list', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Apple')).toBeInTheDocument()
  })
})
