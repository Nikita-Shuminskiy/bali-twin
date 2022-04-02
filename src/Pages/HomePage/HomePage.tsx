import React from 'react'
import styles from './HomePage.module.scss'
import logoHome from '../../Images/Logo-twin.png'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo-block']}>
                <div>
                    <img src={logoHome} alt="logo-home" />
                </div>
                <div className={`${styles['box']}`}>
                    <span className={styles['btn-line-left']} />
                    <div
                        className={`${styles['btn']} ${styles['frosted-glass']}`}
                    >
                        <span className={styles['text-btn']}>Play Game</span>
                    </div>
                    <span className={styles['btn-line-right']} />
                </div>
                <div className={styles['description']}>
                    Unite the world to create and develop the Island together
                </div>
            </div>
        </div>
    )
}
