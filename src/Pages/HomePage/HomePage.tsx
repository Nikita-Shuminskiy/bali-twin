import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo-twin.png'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <img src={logo} alt="logo-bali-twin" />
            <div className={styles['block-nav']}>
                <Link to="about">Game</Link>
                <Link to="about">Collection</Link>
                <Link to="about">Marketplace</Link>
                <Link to="about">Jobs</Link>
                <Link to="about">Builder</Link>
                <Link to="about">Docs</Link>
            </div>
            <button className={styles['btn-header']}>Connect wallet</button>
        </div>
    )
}
