import React from 'react'
import { AppHeader } from '../AppHeader/AppHeader'
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles['container']}>
            <AppHeader />
        </div>
    )
}
