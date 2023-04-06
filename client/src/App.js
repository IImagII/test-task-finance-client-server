import { Route, Routes } from 'react-router'

import Layout from './components/layout/Layout.jsx'
import NotFoundInfo from './components/not-found/NotFound.jsx'
import Home from './pages/home/Home.jsx'
import ListOne from './pages/list-one/ListOne.jsx'
import { ROUTES } from './utils/routes'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.NEWS} element={<ListOne />} />
        <Route path={ROUTES.ERROR} element={<NotFoundInfo />} />
      </Route>
    </Routes>
  )
}

export default App
