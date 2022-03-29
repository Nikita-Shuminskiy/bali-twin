import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo-twin.png'
import styles from './AppHeader.module.scss'

export const AppHeader = () => {
    return (
        <div className={styles['container']}>
            <img src={logo} alt="logo-bali-twin" />
            <div className={styles['block-nav']}>
                <Link className={styles['link']} to="#">
                    Game
                </Link>
                <Link className={styles['link']} to="#">
                    Collection
                </Link>
                <Link className={styles['link']} to="#">
                    Marketplace
                </Link>
                <Link className={styles['link']} to="#">
                    Jobs
                </Link>
                <Link className={styles['link']} to="#">
                    Builder
                </Link>
                <Link className={styles['link']} to="#">
                    Docs
                </Link>
            </div>
            <button className={styles['btn-header']}>Connect wallet</button>
        </div>
    )
}
