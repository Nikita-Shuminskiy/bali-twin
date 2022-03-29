import React from 'react'
import styles from './CreateConnection.module.scss'
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

export const CreateConnection = () => {
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
    ]

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['game-page-disconection-box']}>
                    <h3 className={styles['game-page-title']}>
                        Create connection
                    </h3>
                </div>
            </div>
            {arrayConnections.length >= 5 ? (
                <SliderGame>
                    {arrayConnections.map((card, index) => {
                        return (
                            <div key={index}>
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
            ) : (
                <div className={styles['container']}>
                    <div className={styles['game-page-connection-cards-inner']}>
                        {arrayConnections.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        styles['game-page-connection-card-box']
                                    }
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
                    </div>
                </div>
            )}
        </>
    )
}
