import React, { useEffect } from 'react'
import styles from './GamePage.module.scss'

export const GamePage: React.FC<GamePropsType> = () => {
    useEffect(() => {
        console.log('aaaa')
    }, [])
    return (
        <div className={styles['main']}>
            <div className={styles['main-card']}>asdfasdf</div>
        </div>
    )
}

interface GamePropsType {
    name: string
}
