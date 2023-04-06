import { useContext, useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'

import { TickerContext } from '../../hooks/context/useContextProvider.jsx'
import { SearchContext } from '../../hooks/context/useSearchProvider.jsx'
import useDebounce from '../../hooks/useDebounce/useDebouce'
import { paths } from '../../utils/paths'

import Item from './Item.jsx'
import styles from './Items.module.scss'

const Items = () => {
  const { ticker, setTicker } = useContext(TickerContext)

  useEffect(() => {
    const socket = io(paths.url)
    socket.emit('start')
    socket.on('ticker', (response) => {
      setTicker(response)
    })
    return () => {
      socket.disconnect()
    }
  }, [setTicker])

  const { searchValue } = useContext(SearchContext)

  const debouncedSearchTerm = useDebounce(searchValue, 700)

  const [tickerButton, setTickerButton] = useState('')

  const handleTickerClick = (value) => {
    setTickerButton(value === tickerButton ? '' : value)
  }

  const filterTicker = useMemo(() => {
    if (!debouncedSearchTerm && !tickerButton) return ticker

    if (debouncedSearchTerm) {
      return ticker.filter((item) => {
        return item.ticker
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      })
    }

    const filterButton = ticker.filter((item) => {
      return item.ticker.toLowerCase().includes(tickerButton.toLowerCase())
    })
    return filterButton
  }, [debouncedSearchTerm, ticker, tickerButton])

  const tickerValue = filterTicker.map((elem) => (
    <tr key={elem.ticker}>
      <Item
        debouncedSearchTerm={debouncedSearchTerm}
        onTickerClick={handleTickerClick}
        {...elem}
      />
    </tr>
  ))

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Ticker <span className={styles.handle}></span>
            </th>
            <th>
              Exchange <span className={styles.handle}></span>
            </th>
            <th>
              Price <span className={styles.handle}></span>
            </th>
            <th>
              Change <span className={styles.handle}></span>
            </th>
            <th>
              Percent <span className={styles.handle}></span>
            </th>
            <th>
              Dividend <span className={styles.handle}></span>
            </th>
            <th>
              Yield <span className={styles.handle}></span>
            </th>
            <th>
              Last trade<span className={styles.handle}></span>
            </th>
            <th>
              <span className={styles.handle}></span>
            </th>
          </tr>
        </thead>
        <tbody>{tickerValue}</tbody>
      </table>
    </div>
  )
}

export default Items
