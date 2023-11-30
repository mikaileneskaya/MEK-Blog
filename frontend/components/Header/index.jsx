"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./styles.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.headerr}>
      <Link className={styles.baslik} href="/">
        <h1>MEK Blog</h1>
      </Link>

      <nav className={styles.navv}>
        <Link className={pathname === '/' ? `${styles.linkk} ${styles.active}` : styles.linkk} href="/">ANASAYFA</Link>
        <Link className={pathname === '/hakkimizda' ? `${styles.linkk} ${styles.active}` : styles.linkk} href="/hakkimizda">HAKKIMIZDA</Link>
        <Link className={pathname === '/iletisim' ? `${styles.linkk} ${styles.active}` : styles.linkk} href="/iletisim">İLETİŞİM</Link>
      </nav>
    </header>
  );
};

export default Header;
