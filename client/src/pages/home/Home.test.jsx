import { render, screen } from '@testing-library/react'

import Home from './Home.jsx'

describe('Home', () => {
  test('renders ListNews component', () => {
    render(<Home />)

    expect(screen.getByTestId('list-news-component')).toBeInTheDocument()
  })
})
