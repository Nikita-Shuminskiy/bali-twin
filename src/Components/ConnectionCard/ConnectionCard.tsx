import React from 'react'
import styles from './ConnectionCard.module.scss'
import { CardType } from '../../Pages/GamePage/GamePage'
export const ConnectionCard: React.FC<ConnectionCardPropsType> = ({
    card,
    callback,
    disconnectGameCallback,
}) => {
    const { type, title, date, srcImg, id } = card
    const buttonText = {
        newConnection: 'Create',
        createGame: 'Create game',
        loadingGame: 'Load game',
    }

    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['card-image-box']}>
                {type !== 'newConnection' ? (
                    <img
                        className={styles['card-image']}
                        src={srcImg}
                        alt={'cardImage'}
                    />
                ) : (
                    <div className={styles['card-connection-inner']}>
                        <div
                            onClick={callback}
                            className={styles['card-connection-icon']}
                        >
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_401_265)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M41 24H39V39H24V41H39V56H41V41H56V39H41V24Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_401_265"
                                        x="0"
                                        y="0"
                                        width="80"
                                        height="80"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="12" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.96 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_401_265"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_401_265"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles['card-info-inner']}>
                <h3 className={styles['card-info-title']}>
                    {type === 'newConnection' ? 'New connection' : title}
                </h3>
                <p className={styles['card-info-date']}>
                    {type === 'newConnection' ? 'Create new connection' : date}
                </p>
            </div>
            <div className={styles['button']} onClick={() => callback()}>
                <span className={styles['button-text']}>
                    {buttonText[type]}
                </span>
                {type === 'loadingGame' && (
                    <span
                        onClick={disconnectGameCallback}
                        className={styles['button-disconnect']}
                    >
                        Disconnect
                    </span>
                )}
            </div>
        </div>
    )
}

export type ConnectionTypeCard = 'newConnection' | 'createGame' | 'loadingGame'

interface ConnectionCardPropsType {
    callback: () => void
    card: CardType
    disconnectGameCallback?: () => void
}
