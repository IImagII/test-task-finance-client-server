import { fireEvent, render } from '@testing-library/react'

import Items from './Item.jsx'

// mock TickerContext
jest.mock('../../hooks/context/useContextProvider.jsx', () => ({
  TickerContext: {
    Consumer: ({ children }) =>
      children({ ticker: [{ ticker: 'AAPL', name: 'Apple' }] })
  }
}))

// mock SearchContext
jest.mock('../../hooks/context/useSearchProvider.jsx', () => ({
  SearchContext: {
    Consumer: ({ children }) => children({ searchValue: '' })
  }
}))

// mock useDebounce hook
jest.mock('../../hooks/useDebouce', () => {
  return jest.fn().mockReturnValue('')
})

describe('Items', () => {
  it('should render table with header', () => {
    const { getByText } = render(<Items />)
    expect(getByText('Ticker')).toBeInTheDocument()
    expect(getByText('Exchange')).toBeInTheDocument()
    expect(getByText('Price')).toBeInTheDocument()
    expect(getByText('Change')).toBeInTheDocument()
    expect(getByText('Percent')).toBeInTheDocument()
    expect(getByText('Dividend')).toBeInTheDocument()
    expect(getByText('Yield')).toBeInTheDocument()
    expect(getByText('Last trade')).toBeInTheDocument()
  })

  it('should render ticker items', () => {
    const { getByText } = render(<Items />)
    expect(getByText('AAPL')).toBeInTheDocument()
    expect(getByText('Apple')).toBeInTheDocument()
  })

  it('should filter ticker items by searchValue', () => {
    // mock SearchContext to provide searchValue
    jest.mock('../../hooks/context/useSearchProvider.jsx', () => ({
      SearchContext: {
        Consumer: ({ children }) => children({ searchValue: 'AAPL' })
      }
    }))
    const { getByText, queryByText } = render(<Items />)
    expect(getByText('AAPL')).toBeInTheDocument()
    expect(getByText('Apple')).toBeInTheDocument()
    expect(queryByText('MSFT')).not.toBeInTheDocument()
  })

  it('should filter ticker items by tickerButton', () => {
    const { getByText, queryByText } = render(<Items />)
    expect(getByText('AAPL')).toBeInTheDocument()
    expect(getByText('Apple')).toBeInTheDocument()

    const button = getByText('AAPL')
    fireEvent.click(button)
    expect(getByText('AAPL')).toBeInTheDocument()
    expect(getByText('Apple')).toBeInTheDocument()
    expect(queryByText('MSFT')).not.toBeInTheDocument()
  })
})
