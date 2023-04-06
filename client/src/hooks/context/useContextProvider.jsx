import { createContext, useState } from 'react'

export const TickerContext = createContext()

export const TickerProvider = ({ children }) => {
  const [ticker, setTicker] = useState([])

  return (
    <TickerContext.Provider value={{ ticker, setTicker }}>
      {children}
    </TickerContext.Provider>
  )
}
