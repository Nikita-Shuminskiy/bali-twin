import React from 'react'
import styles from './Connection.module.scss'
import { SliderGame } from '../../../Components/SliderGame/SliderGame'
import {
    ConnectionCard,
    ConnectionTypeCard,
} from '../../../Components/ConnectionCard/ConnectionCard'

export interface TypeCard {
    type: ConnectionTypeCard
}

export const Connection: React.FC<ConnectionPropsType> = ({
    arrayConnections,
    type,
    title,
}) => {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['game-page-disconection-box']}>
                    <h3 className={styles['game-page-title']}>{title}</h3>
                    {type === 'Load' ? (
                        <h3 className={styles['game-page-disconection']}>
                            Disconnect all
                        </h3>
                    ) : null}
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

interface ConnectionPropsType {
    arrayConnections: Array<any | TypeCard>
    type: 'Load' | 'Create'
    title: string
}
