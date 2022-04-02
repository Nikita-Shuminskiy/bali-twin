import React from 'react'
import PlayGameButton from '../../Components/PlayGameButton/PlayGameButton'
import logoHome from '../../Images/Logo-twin.png'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo-block']}>
                <div className={styles['logo-block-btn-logo-inner']}>
                    <img src={logoHome} alt="logo-home" />
                    <PlayGameButton />
                </div>
                <div className={styles['description']}>
                    Unite the world to create and develop the Island together
                </div>
            </div>
        </div>
    )
}
