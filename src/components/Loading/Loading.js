import LoadingImg from '../../assets/Loading.svg'
import styles from './loadingStyle.css'

export function Loading() {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: 'center', color: 'F9FBFE' }}>Carregando...</h1>
      <img className={styles.loader} src={LoadingImg} alt='loading'/>
    </div>
  )
}