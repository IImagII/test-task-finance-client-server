import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

describe('App', () => {
  test('renders home page when navigating to "/" path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  test('renders ListOne page when navigating to "/news/:id" path', () => {
    render(
      <MemoryRouter initialEntries={['/news/1']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('ListOne Page')).toBeInTheDocument()
  })

  test('renders NotFoundInfo page when navigating to non-existing path', () => {
    render(
      <MemoryRouter initialEntries={['/non-existing-path']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  test('renders Layout component on root path and Home component on nested "/" path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('layout-component')).toBeInTheDocument()
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  test('renders Layout component on root path and ListOne component on nested "/news/:id" path', () => {
    render(
      <MemoryRouter initialEntries={['/news/1']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('layout-component')).toBeInTheDocument()
    expect(screen.getByText('ListOne Page')).toBeInTheDocument()
  })
})
