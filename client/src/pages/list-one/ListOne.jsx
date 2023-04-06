import { useEffect } from 'react'
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { axiosDataOne } from '../../store/slice/spaceSlice'

import styles from './ListOne.module.scss'

const ListOne = () => {
  const { item, status } = useSelector((state) => state.space)

  const { imageUrl, title, updatedAt, newsSite, summary } = item

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axiosDataOne(id))
  }, [dispatch, id])

  if (!status) return <>Loading.....</>

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={imageUrl} alt="News Image" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.meta}>
            <span className={styles.date}>
              <Moment date={updatedAt} format="DD MMM YYYY" />
            </span>
            <span className={styles.link}>
              <Link to={'/'}>***HOME***</Link>
            </span>
            <span className={styles.author}>{newsSite}</span>
          </div>
          <div className={styles.text}>
            <p>
              {summary}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              autem natus commodi animi, deleniti recusandae dolorum temporibus
              quibusdam doloremque cumque maxime vero architecto ducimus
              officiis possimus ab amet reprehenderit consequuntur maiores nulla
              ratione accusamus, dolore magni est. Nisi et dolor hic quisquam
              corporis illo alias possimus similique excepturi quo laudantium,
              nulla est odit repellendus! Corporis mollitia saepe, deleniti illo
              et inventore animi quod vero ducimus incidunt tempora molestiae
              dicta non ex, veritatis quam dolorem magni. Quisquam id
              praesentium asperiores ea dolores ullam excepturi, consequatur,
              explicabo iure, ut non dolorem sapiente quibusdam reiciendis quae
              error? Explicabo, harum! Voluptas reprehenderit quisquam possimus
              est recusandae quas, nisi fuga ex. Sit maxime consectetur in
              placeat provident esse officiis molestias neque, consequatur
              reiciendis nobis hic mollitia sint. Animi est sed suscipit velit
              natus eveniet odit, aut dolores doloribus, non magnam dolorem.
              Commodi quibusdam optio exercitationem ullam ab consectetur
              tempora expedita iste quia esse repellendus illum adipisci rerum
              soluta dignissimos, enim in aliquam laudantium dolores, itaque
              facere ex! Nostrum sequi, tempora placeat, eaque necessitatibus
              suscipit aliquid ratione atque sint saepe ea hic? Temporibus,
              cumque vel. Nam obcaecati consequuntur earum accusamus esse eius
              sed incidunt maiores, voluptate, ullam repellat assumenda amet
              autem dolor minus velit nemo non optio necessitatibus? Magnam
              consectetur numquam sint similique dolorem iusto eos quae
              voluptatum, qui porro dicta unde eveniet suscipit sunt, ab iste
              architecto dolorum repellendus itaque. Tenetur quas perferendis
              veritatis aliquam illum expedita blanditiis aut quasi quis magnam
              dolorem culpa voluptate, nam at repellendus excepturi! Iure
              reiciendis aut, rem aspernatur repellendus voluptatum accusantium
              optio vitae, autem impedit minus inventore a exercitationem
              sapiente distinctio ratione nobis suscipit debitis, architecto
              quisquam deserunt reprehenderit obcaecati dolorem consequuntur.
              Blanditiis ad sunt quam sit obcaecati ipsam enim dolores alias.
              Ab, illo provident quae pariatur incidunt magni quos ipsa commodi
              neque totam accusantium laboriosam quo culpa exercitationem, dolor
              nesciunt sunt facilis nihil aspernatur impedit. Provident at nobis
              dolorum nemo quod in, odio reprehenderit quas corrupti totam nulla
              perspiciatis pariatur dicta tempora veritatis officia quidem quae
              facere repellendus odit autem inventore. Voluptas aperiam vero
              tempore voluptatibus eum velit, ullam magnam aspernatur odio
              asperiores ex deleniti alias temporibus quae possimus vitae quis.
              Enim eius excepturi quos atque, placeat et similique beatae
              impedit aliquid, ut vel dicta unde consequuntur earum. Tenetur
              amet possimus aliquam, soluta quae quia voluptas neque quam a, sit
              commodi? Minus, sunt eligendi nulla culpa laboriosam consequuntur
              voluptas placeat delectus totam sequi corporis asperiores earum
              impedit nemo.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListOne
