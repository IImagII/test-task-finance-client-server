import { Outlet } from 'react-router-dom'

import Header from '../../components/header/Header.jsx'
import Items from '../../components/items/Items.jsx'
import SearchTicker from '../../components/search-ticker/SearchTicker.jsx'
import { TickerProvider } from '../../hooks/context/useContextProvider.jsx'
import { SearchProvider } from '../../hooks/context/useSearchProvider.jsx'

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <SearchProvider>
            <TickerProvider>
              <Header />
              <SearchTicker />
              <Items />
            </TickerProvider>
          </SearchProvider>
          <div className="post">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
