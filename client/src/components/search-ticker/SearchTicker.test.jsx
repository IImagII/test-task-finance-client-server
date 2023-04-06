import { fireEvent, render } from '@testing-library/react'

import { SearchContext } from '../../hooks/context/useSearchProvider.jsx'

import SearchTicker from './SearchTicker.jsx'

test('calls setSearchValue on input change', () => {
  const setSearchValue = jest.fn()
  const { getByPlaceholderText } = render(
    <SearchContext.Provider value={{ setSearchValue }}>
      <SearchTicker />
    </SearchContext.Provider>
  )

  const input = getByPlaceholderText('Enter required tricker')
  fireEvent.change(input, { target: { value: 'AAPL' } })

  expect(setSearchValue).toHaveBeenCalledWith('AAPL')
})
