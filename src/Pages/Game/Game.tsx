import React, { useEffect } from 'react'
import styles from './Game.module.scss'

export const Game: GamePropsType = () => {
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
