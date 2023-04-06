import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Layout from './Layout.jsx'

describe('Layout', () => {
  test('renders Header component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    expect(screen.getByTestId('header-component')).toBeInTheDocument()
  })

  test('renders Items component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    expect(screen.getByTestId('items-component')).toBeInTheDocument()
  })

  test('renders SearchTicker component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    expect(screen.getByTestId('search-ticker-component')).toBeInTheDocument()
  })

  test('renders child components within Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout>
          <div data-testid="child-component">Child Component</div>
        </Layout>
      </MemoryRouter>
    )

    expect(screen.getByTestId('child-component')).toBeInTheDocument()
  })
})
