import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import List from './List.jsx'

const item = {
  id: 1,
  imageUrl: 'https://example.com/image.jpg',
  title: 'Test title',
  updatedAt: '2023-04-05T12:00:00Z',
  url: 'https://example.com',
  newsSite: 'Example News',
  summary: 'This is a test summary'
}

describe('List component', () => {
  test('renders correct image', () => {
    render(
      <BrowserRouter>
        <List {...item} />
      </BrowserRouter>
    )
    const image = screen.getByAltText(item.title)
    expect(image.src).toBe(item.imageUrl)
  })

  test('renders correct author and date', () => {
    render(
      <BrowserRouter>
        <List {...item} />
      </BrowserRouter>
    )
    const author = screen.getByText(item.newsSite)
    const date = screen.getByText(/5 Apr 2022/)
    expect(author).toBeInTheDocument()
    expect(date).toBeInTheDocument()
  })

  test('renders title, summary and read more link', () => {
    render(
      <BrowserRouter>
        <List {...item} />
      </BrowserRouter>
    )
    const title = screen.getByText(item.title)
    const summary = screen.getByText(/This is a test summary/)
    const link = screen.getByRole('link', { name: 'Read More' })
    expect(title).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(link.href).toContain(`/news/${item.id}`)
  })
})
