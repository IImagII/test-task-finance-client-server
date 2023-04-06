import styles from './NotFound.module.scss'

const NotFoundInfo = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Нічого не знайдено:(
    </h1>
  )
}
export default NotFoundInfo
