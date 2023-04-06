import { useNumberColor } from '../../hooks/number-display/useNumberColor.jsx'

import styles from './List.module.scss'

const List = ({ ...item }) => {
  const { ticker, price, change_percent: percent } = item

  const priceDisplay = useNumberColor({ number: price })
  const percentDisplay = useNumberColor({ number: percent, enabled: false })
  return (
    <div className={styles.cell}>
      <div className={styles.name}>{ticker}</div>
      <div className={styles.price}> {priceDisplay} $</div>
      <div className={styles.change}>{percentDisplay} %</div>
    </div>
  )
}

export default List
