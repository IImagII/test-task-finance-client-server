import { useContext } from 'react'

import { SearchContext } from '../../hooks/context/useSearchProvider.jsx'
import Input from '../ui/input/Input.jsx'

import styles from './SearchTicker.module.scss'

const SearchTicker = () => {
  const { setSearchValue } = useContext(SearchContext)

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Input
          type="search"
          placeholder="Enter required tricker"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.text}>пошук працює по ticker</div>
    </div>
  )
}

export default SearchTicker
