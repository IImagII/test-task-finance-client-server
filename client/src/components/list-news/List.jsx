import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import styles from './ListNews.module.scss'

const List = ({ ...item }) => {
  const { id, imageUrl, title, updatedAt, url, newsSite, summary } = item

  return (
    <div>
      <div className={styles.blog_card}>
        <div className={styles.meta}>
          <div className={styles.photo}>
            <img src={imageUrl} alt={title} />
          </div>
          <ul className={styles.details}>
            <li className={styles.author}>
              <a href={url}>{newsSite}</a>
            </li>
            <li className={styles.date}>
              <Moment date={updatedAt} format="DD MMM YYYY" />
            </li>
          </ul>
        </div>
        <div className={styles.description}>
          <h2>{title.substring(0, 70) + '...'}</h2>
          <h4>{newsSite}</h4>
          <p>{summary.substring(0, 100) + '...'}</p>
          <p className={styles.read_more}>
            <Link to={`/news/${id}`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default List
