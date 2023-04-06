import cn from 'classnames'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill
} from 'react-icons/bs'

import styles from './NumberDisplay.module.scss'

const cx = classNames.bind(styles)

export const useNumberDisplay = ({ number }) => {
  const [previousNumber, setPreviousNumber] = useState(null)
  const [numberColor, setNumberColor] = useState(null)
  const classes = cn(cx({ red: !numberColor, green: numberColor }))

  useEffect(() => {
    if (previousNumber !== null && number !== previousNumber) {
      const newColor = number > previousNumber ? true : false

      setNumberColor(newColor)
    }
    setPreviousNumber(number)
  }, [number, previousNumber])

  return (
    <div className={classes}>
      {numberColor ? (
        <BsFillArrowUpSquareFill
          style={{ color: 'rgb(204, 248, 213)', backgroundColor: 'green' }}
        />
      ) : (
        <BsFillArrowDownSquareFill
          style={{ color: 'rgb(247, 206, 206)', backgroundColor: 'red' }}
        />
      )}

      <span>{number}</span>
    </div>
  )
}
