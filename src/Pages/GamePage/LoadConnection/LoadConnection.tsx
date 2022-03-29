import React from 'react'
import styles from './LoadConnection.module.scss'
import { SliderGame } from '../../../Components/SliderGame/SliderGame'
import {
    ConnectionCard,
    ConnectionTypeCard,
} from '../../../Components/ConnectionCard/ConnectionCard'
import imgCard from '../../../Components/ConnectionCard/mock/card-img.jpg'

interface TypeCard {
    type: ConnectionTypeCard
    typeButton: 'active' | 'none'
}

export const LoadConnection = () => {
    const arrayConnections: Array<any | TypeCard> = [
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
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['game-page-disconection-box']}>
                    <h3 className={styles['game-page-title']}>
                        Load connection
                    </h3>
                    <h3 className={styles['game-page-disconection']}>
                        Disconnect all
                    </h3>
                </div>
            </div>
            <SliderGame>
                {arrayConnections.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className={styles['game-page-connection-card-box']}
                        >
                            <ConnectionCard
                                date={card.date}
                                type={card.type}
                                typeButton={card.typeButton}
                                srcImg={card.srcImg}
                                title={card.title}
                            />
                        </div>
                    )
                })}
            </SliderGame>
        </>
    )
}
