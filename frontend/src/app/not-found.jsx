import Link from 'next/link'
import styles from './not-found.module.css'
 
export default function NotFound() {
  return (
    <section className={styles.container}>

        <h1 className={styles.baslik}>404</h1>
        <p className={styles.metin}>Aradığınız sayfaya şuan ulaşılamıyor.</p>
        <Link href="/" className={styles.linkk}>ANASAYFAYA DÖN</Link>
    </section>
  )
}