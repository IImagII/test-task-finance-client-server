import { useCallback, useState } from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'

import { useNumberDisplay } from '../../hooks/number-display/useNumberDisplay.jsx'
import { changeData } from '../../utils/changeData'
import { HightLight } from '../../utils/hight-light/HightLight'

import styles from './Items.module.scss'

const Item = ({
  debouncedSearchTerm,
  onTickerClick,

  ...item
}) => {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent: percent,
    dividend,
    yield: decideYield,
    last_trade_time
  } = item

  const [isIconChange, setIsIconChange] = useState(true)

  const priceDisplay = useNumberDisplay({ number: price })
  const changeDisplay = useNumberDisplay({ number: change })
  const percentDisplay = useNumberDisplay({ number: percent })
  const dividendDisplay = useNumberDisplay({ number: dividend })
  const yieldDisplay = useNumberDisplay({ number: decideYield })

  const lightText = useCallback(
    (str) => {
      return <HightLight filter={debouncedSearchTerm} str={str} />
    },
    [debouncedSearchTerm]
  )

  const handleTickerClick = useCallback(() => {
    onTickerClick(ticker)
    setIsIconChange((isIconChange) => !isIconChange)
  }, [onTickerClick, ticker])

  return (
    <>
      <td>{lightText(ticker)}</td>
      <td>{exchange}</td>
      <td className={styles.view}>
        {priceDisplay}
        <span>$</span>
      </td>
      <td className={styles.view}>
        {changeDisplay}

        <span>$</span>
      </td>
      <td className={styles.view} data-number={percentDisplay}>
        {percentDisplay}
        <span>%</span>
      </td>
      <td>{dividendDisplay}</td>
      <td>{yieldDisplay}</td>
      <td>{changeData(new Date(last_trade_time))}</td>
      <td>
        <a onClick={handleTickerClick}>
          {isIconChange ? (
            <BsPlusCircle size={20} />
          ) : (
            <AiOutlineMinusCircle size={20} />
          )}
        </a>
      </td>
    </>
  )
}

export default Item
