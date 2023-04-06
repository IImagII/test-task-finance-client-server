import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ListNews from './ListNews.jsx'

// Створюємо mock store
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('ListNews', () => {
  it('should render skeleton loaders before data is loaded', () => {
    const store = mockStore({
      space: {
        items: [],
        status: false
      }
    })

    render(
      <Provider store={store}>
        <ListNews />
      </Provider>
    )

    // Повинні відобразитись 6 заглушок
    expect(screen.getAllByTestId('loader-skeleton')).toHaveLength(6)
  })

  it('should render a list of news items', async () => {
    const store = mockStore({
      space: {
        items: [
          {
            id: '1',
            title: 'News Title 1',
            newsSite: 'News Site 1',
            imageUrl: 'http://example.com/image.jpg',
            updatedAt: '2023-04-01T10:00:00.000Z',
            summary: 'News Summary 1',
            url: 'http://example.com/news/1'
          },
          {
            id: '2',
            title: 'News Title 2',
            newsSite: 'News Site 2',
            imageUrl: 'http://example.com/image.jpg',
            updatedAt: '2023-04-02T11:00:00.000Z',
            summary: 'News Summary 2',
            url: 'http://example.com/news/2'
          }
        ],
        status: true
      }
    })

    render(
      <Provider store={store}>
        <ListNews />
      </Provider>
    )

    // повині відобразитись 2 новини
    await waitFor(() =>
      expect(screen.getAllByTestId('list-news')).toHaveLength(2)
    )

    // Перевіряємо що заголовок відобраджається 2 новин
    expect(screen.getByText('News Title 1...')).toBeInTheDocument()
    expect(screen.getByText('News Title 2...')).toBeInTheDocument()
  })
})
