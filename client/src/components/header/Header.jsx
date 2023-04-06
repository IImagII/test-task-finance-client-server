import { useContext } from 'react'

import { TickerContext } from '../../hooks/context/useContextProvider.jsx'
import List from '../list/List.jsx'

import styles from './Header.module.scss'

const Header = () => {
  const { ticker } = useContext(TickerContext)

  if (!ticker) {
    return <div>Loading...</div>
  }

  return (
    <header className={styles.header}>
      {ticker.map((item) => (
        <List {...item} key={item.ticker} />
      ))}
    </header>
  )
}

export default Header
