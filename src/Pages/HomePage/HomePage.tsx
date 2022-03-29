import React from 'react'
import logoHome from '../../Images/Logo-home.png'
import { AppHeader } from '../AppHeader/AppHeader'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <AppHeader />
            <div className={styles['background-pink']} />
            <div className={styles['background-blue']} />
            <div className={styles['logo-block']}>
                <div className={styles['back-top']} />
                <img src={logoHome} alt="logo-home" />
                <div className={styles['back-down']} />
            </div>
        </div>
    )
}
