import React from 'react'
import styles from './GamePage.module.scss'
import './slider.css'
import { LoadConnection } from './LoadConnection/LoadConnection'
import { CreateConnection } from './CreateConnection/CreateConnection'

export const GamePage: React.FC<GamePropsType> = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['load-connection-box']}>
                <LoadConnection />
            </div>
            <div className={styles['create-connection-box']}>
                <CreateConnection />
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GamePropsType {}
