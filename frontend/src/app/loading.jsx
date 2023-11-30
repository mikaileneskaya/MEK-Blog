import React from 'react'
import styles from './loading.module.css'

const loading = () => {
  return (
    <div className={styles.container}>
        <div className={styles.toplar}>
            <div className={styles.top.top1}></div>
            <div className={styles.top.top2}></div>
            <div className={styles.top.top3}></div>
            <div className={styles.top.top4}></div>
        </div>
    </div>
  )
}

export default loading