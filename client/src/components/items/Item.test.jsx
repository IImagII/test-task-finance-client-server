import { render, screen } from '@testing-library/react'

import Item from './Item.jsx'

describe('Item component', () => {
  it('Item component', () => {
    render(<Item />)

    expect(screen.getByRole('table')).toBeInTheDocument()
  })
  it('renders Item component', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      description: 'This is a test item',
      price: 10,
      currency: 'USD'
    }

    const { getByText } = render(<Item item={item} />)

    expect(getByText('Test Item')).toBeInTheDocument()
    expect(getByText('This is a test item')).toBeInTheDocument()
    expect(getByText('$10.00')).toBeInTheDocument()
  })
})
