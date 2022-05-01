import React, { useEffect, useState } from 'react'
import styles from './GamePage.module.scss'
import { Connection } from './Connection/Connection'
import { v4 } from 'uuid'
import imgCard from '../../Components/ConnectionCard/mock/card-img.jpg'
import { ConnectionTypeCard } from '../../Components/ConnectionCard/ConnectionCard'
import { DisconnectAllModal } from '../../Components/Modals/DisconnectAllModal'

export const GamePage: React.FC<GamePropsType> = () => {
    const arrayConnectionsCreate: Array<CardType> = [
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'createGame',
        },
    ]

    const [arrayConnectionsLoad, setArrayConnectionsLoad] = useState<
        Array<CardType>
    >([
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            id: v4(),
            title: 'Bali Twin',
            srcImg: imgCard,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            type: 'loadingGame',
        },
        {
            id: v4(),
            type: 'newConnection',
        },
    ])

    const [showDisconnectModal, setShowDisconnectModal] =
        useState<boolean>(false)

    const openDisconnectModal = () => {
        setShowDisconnectModal(true)
    }

    const closeDisconnectModal = () => {
        setShowDisconnectModal(false)
        document.body.style.overflow = 'auto'
    }

    const callbackCard = (id: string, type: ConnectionTypeCard): void => {
        switch (type) {
            case 'createGame': {
                break
            }
            case 'loadingGame': {
                break
            }
            case 'newConnection': {
                setArrayConnectionsLoad([
                    {
                        id: v4(),
                        title: 'Bali Twin',
                        srcImg: imgCard,
                        date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                        type: 'loadingGame',
                    },
                    ...arrayConnectionsLoad,
                ])
                break
            }
            default: {
                console.log('default')
            }
        }
    }
    const disconnectGameCallback = (id: string): void => {
        setArrayConnectionsLoad(
            arrayConnectionsLoad.filter((card) => {
                return card.id !== id
            })
        )
    }

    const disconnectAllCallback = () => {
        setArrayConnectionsLoad([
            {
                id: v4(),
                type: 'newConnection',
            },
            {
                id: v4(),
                type: 'newConnection',
            },
        ])
        closeDisconnectModal()
    }

    return (
        <>
            <div className={styles['wrapper']}>
                <div className={styles['load-connection-box']}>
                    <Connection
                        disconnectAllCallback={openDisconnectModal}
                        callback={callbackCard}
                        disconnectGameCallback={disconnectGameCallback}
                        arrayConnections={arrayConnectionsLoad}
                        title={'Load connection'}
                        type={'Load'}
                    />
                </div>
                <div className={styles['create-connection-box']}>
                    <Connection
                        callback={callbackCard}
                        disconnectGameCallback={disconnectGameCallback}
                        arrayConnections={arrayConnectionsCreate}
                        title={'Create connection'}
                        type={'Create'}
                    />
                </div>
            </div>
            <DisconnectAllModal
                show={showDisconnectModal}
                callBack={disconnectAllCallback}
                closeCallback={closeDisconnectModal}
            />
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GamePropsType {}

export type CardType = {
    id: string
    title?: string
    srcImg?: string
    date?: string
    type: ConnectionTypeCard
}
