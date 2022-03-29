import React from 'react'
import logoHome from '../../Images/Logo-home.png'
import { AppHeader } from '../AppHeader/AppHeader'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <AppHeader />
            <div className={styles['logo-block']}>
                <div>
                    <div className={styles['back-top']} />
                    <img src={logoHome} alt="logo-home" />
                    <div className={styles['back-down']} />
                </div>
                <div className={`${styles['box']}`}>
                    <div className={styles['background-blue']} />
                    <div className={styles['background-pink']} />
                    <span className={styles['btn-line-left']} />
                    <div
                        className={`${styles['btn']} ${styles['frosted-glass']}`}
                    >
                        <span className={styles['text-btn']}>Play Game</span>
                    </div>
                    <span className={styles['btn-line-right']} />
                </div>
                <div className={styles.test}></div>
            </div>
        </div>
    )
}
