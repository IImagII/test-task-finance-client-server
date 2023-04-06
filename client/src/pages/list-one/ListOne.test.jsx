import { render, screen } from '@testing-library/react'
import Moment from 'react-moment'
import { Provider } from 'react-redux'
import { MemoryRouter, Route } from 'react-router-dom'

import { store } from '../../store/store'

import ListOne from './ListOne.jsx'

describe('ListOne', () => {
  const item = {
    imageUrl: 'https://example.com/image.jpg',
    title: 'Test title',
    updatedAt: '2023-01-01T00:00:00.000Z',
    newsSite: 'Test news site',
    summary: 'Test summary'
  }

  beforeEach(() => {
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    window.scrollTo.mockRestore()
    console.error.mockRestore()
  })

  it('renders loading message when status is false', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/news/${item.id}`]}>
          <ListOne />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Loading.....')).toBeInTheDocument()
  })

  it('renders item when status is true', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/news/${item.id}`]}>
          <Route path="/news/:id">
            <ListOne />
          </Route>
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByAltText('News Image')).toHaveAttribute(
      'src',
      item.imageUrl
    )
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByText(item.newsSite)).toBeInTheDocument()
    expect(screen.getByText(item.summary)).toBeInTheDocument()
    expect(
      screen.getByText(
        `Updated ${new Moment(item.updatedAt).format('DD MMM YYYY')}`
      )
    ).toBeInTheDocument()
    expect(screen.getByText('HOME')).toHaveAttribute('href', '/')
  })
})
