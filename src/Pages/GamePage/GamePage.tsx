import React from 'react'
import styles from './GamePage.module.scss'
import './slider.css'
import { Connection, TypeCard } from './Connection/Connection'
import imgCard from '../../Components/ConnectionCard/mock/card-img.jpg'

export const GamePage: React.FC<GamePropsType> = () => {
    const arrayConnectionsLoad: Array<any | TypeCard> = [
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            typeButton: 'active',
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            typeButton: 'none',
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            typeButton: 'none',
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            typeButton: 'active',
            type: 'newConnection',
        },
        {
            typeButton: 'none',
            type: 'newConnection',
        },
        {
            typeButton: 'active',
            type: 'newConnection',
        },
        {
            typeButton: 'none',
            type: 'newConnection',
        },
    ]
    const arrayConnectionsCreate: Array<any | TypeCard> = [
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
    ]
    return (
        <div className={styles['wrapper']}>
            <div className={styles['load-connection-box']}>
                <Connection
                    arrayConnections={arrayConnectionsLoad}
                    title={'Load connection'}
                    type={'Load'}
                />
            </div>
            <div className={styles['create-connection-box']}>
                <Connection
                    arrayConnections={arrayConnectionsCreate}
                    title={'Create connection'}
                    type={'Create'}
                />
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GamePropsType {}
