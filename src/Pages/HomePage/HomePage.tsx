import React from 'react'
import styles from './HomePage.module.scss'
import logoHome from '../../Images/Logo-twin.png'
import PlayGameButton from '../../Components/PlayGameButton/PlayGameButton'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo-block']}>
                <div>
                    <img src={logoHome} alt="logo-home" />
                </div>
                <PlayGameButton />
                <div className={styles['description']}>
                    Unite the world to create and develop the Island together
                </div>
            </div>
        </div>
    )
}
