import React from 'react'
import logoHome from '../../Images/Logo-home.png'
import { AppHeader } from '../AppHeader/AppHeader'
import { MenuBurger } from '../MenuBurger/MenuBurger'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <MenuBurger />
            <div className={styles['logo-block']}>
                <span className={`${styles['line']} ${styles['line-1']}`} />
                <span className={`${styles['line']} ${styles['line-2']}`} />
                <span className={`${styles['line']} ${styles['line-3']}`} />
                <div className={styles['setting-logo']}>
                    <div className={styles['back-top']} />
                    <img src={logoHome} alt="logo-home" />
                    <div className={styles['back-down']} />
                </div>
                <span className={`${styles['line']} ${styles['line-4']}`} />
                <span className={`${styles['line']} ${styles['line-5']}`} />
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
