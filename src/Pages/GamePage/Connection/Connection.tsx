import React from 'react'
import styles from './Connection.module.scss'
import { SliderGame } from '../../../Components/SliderGame/SliderGame'
import {
    ConnectionCard,
    ConnectionTypeCard,
} from '../../../Components/ConnectionCard/ConnectionCard'
import { CardType } from '../GamePage'
import { SwiperSlide } from 'swiper/react'

export interface TypeCard {
    type: ConnectionTypeCard
}

export const Connection: React.FC<ConnectionPropsType> = ({
    arrayConnections,
    type,
    title,
    callback,
    disconnectGameCallback,
    disconnectAllCallback,
}) => {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['game-page-disconection-box']}>
                    <h3 className={styles['game-page-title']}>{title}</h3>
                    {type === 'Load' ? (
                        <h3
                            onClick={disconnectAllCallback}
                            className={styles['game-page-disconection']}
                        >
                            Disconnect all
                        </h3>
                    ) : null}
                </div>
                {/*<SliderBtn*/}
                {/*    type={type}*/}
                {/*    Move={'prevBtn'}*/}
                {/*    disabled={arrayConnections.length === 4}*/}
                {/*/>*/}
                <SliderGame>
                    {arrayConnections.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <ConnectionCard
                                    disconnectGameCallback={() =>
                                        disconnectGameCallback(card.id)
                                    }
                                    callback={() => {
                                        callback(card.id, card.type)
                                    }}
                                    card={card}
                                />
                            </SwiperSlide>
                        )
                    })}
                </SliderGame>
                {/*<SliderBtn*/}
                {/*    type={type}*/}
                {/*    Move={'nextBtn'}*/}
                {/*    disabled={arrayConnections.length === 4}*/}
                {/*/>*/}
            </div>
        </>
    )
}

interface ConnectionPropsType {
    arrayConnections: Array<CardType>
    type: 'Load' | 'Create'
    title: string
    disconnectAllCallback?: () => void
    callback: (id: string, type: ConnectionTypeCard) => void
    disconnectGameCallback: (id: string) => void
}
