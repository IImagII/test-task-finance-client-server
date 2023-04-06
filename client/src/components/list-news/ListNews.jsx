import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { axiosData } from '../../store/slice/spaceSlice'
import LoaderSkeleton from '../LoaderSkeleton/LoaderSkeleton.jsx'

import List from './List.jsx'
import styles from './ListNews.module.scss'

const ListNews = () => {
  const { items, status } = useSelector((state) => state.space)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axiosData())
  }, [dispatch])

  const main = items.map((item) => <List {...item} key={item.id} />)

  const skeletons = [...new Array(6)].map((_, i) => <LoaderSkeleton key={i} />)

  return <div className={styles.container}>{status ? main : skeletons}</div>
}

export default ListNews
