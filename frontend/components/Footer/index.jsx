"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./styles.module.css";


const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.containerr}>
      <h2><Link className={styles.h22} href="/">MEK Blog</Link></h2>
      <hr className={styles.hrr}/>
      <div className={styles.divv}>
        <Link className={pathname === '/' ? `${styles.linkk} ${styles.activeLink}` : styles.linkk} href="/">ANASAYFA</Link>
        <Link className={pathname === '/hakkimizda' ? `${styles.linkk} ${styles.activeLink}` : styles.linkk} href="/hakkimizda">HAKKIMIZDA</Link>
        <Link className={pathname === '/iletisim' ? `${styles.linkk} ${styles.activeLink}` : styles.linkk} href="/iletisim">İLETİŞİM</Link>
      </div>
      <p className={styles.copy}>© 2023 Copyrights. Tüm Hakkı Saklıdır.</p>
      <Link className={styles.tag} href="https://www.mikaileneskaya.com">
      Designed and developed by Mikail Enes Kaya
      </Link>
    </footer>
  )
}

export default Footer;