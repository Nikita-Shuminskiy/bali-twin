import React from 'react'
import logo from '../../Images/logo-twin.png'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <img src={logo} alt="logo-bali-twin" />
            <div className={styles['block-nav']}>
            </div>
            <button className={styles['btn-header']}>Connect wallet</button>
        </div>
    )
}
