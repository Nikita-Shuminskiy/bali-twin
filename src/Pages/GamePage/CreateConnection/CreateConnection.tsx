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
        <>
            <div className={styles['container']}>
                <div className={styles['game-page-disconection-box']}>
                    <h3 className={styles['game-page-title']}>
                        Create connection
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
