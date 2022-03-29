import React from 'react'
import styles from '../Pages/HomePage/HomePage.module.scss'

const Btn = () => {
    return (
        <div className={`${styles['box3']}`}>
            <div className={`${styles.btn} ${styles.frostedGlass}`}>
                <span className={styles['btn-line-left']} />
                <span className={styles.textBtn}>Play Game</span>
                <span className={styles['btn-line-right']} />
            </div>
        </div>
    )
}

export default Btn
