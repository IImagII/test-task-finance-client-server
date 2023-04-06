import { useEffect, useState } from 'react'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/ai'

export const useNumberColor = ({ number, enabled = true }) => {
  const [color, setColor] = useState('black')
  const [previousValue, setPreviousValue] = useState(null)

  useEffect(() => {
    if (previousValue !== null && number !== previousValue) {
      const newColor = number > previousValue ? 'green' : 'red'
      setColor(newColor)
    }
    setPreviousValue(number)
  }, [number, previousValue])

  return (
    <div style={{ color }}>
      {enabled ? (
        color === 'green' ? (
          <AiOutlineArrowUp size="25px" />
        ) : (
          <AiOutlineArrowDown size="25px" />
        )
      ) : color === 'green' ? (
        <AiOutlinePlus size="10px" />
      ) : (
        <AiOutlineMinus size="10px" />
      )}
      {number}
    </div>
  )
}
