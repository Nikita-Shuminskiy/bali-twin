import React from 'react'
import styles from './GamePage.module.scss'
import './slider.css'
import Slider from 'react-slick'
import {
    ConnectionCard,
    ConnectionTypeCard,
} from '../../Components/ConnectionCard/ConnectionCard'
import imgCard from '../../Components/ConnectionCard/mock/card-img.jpg'

interface TypeCard {
    type: ConnectionTypeCard
    typeButton: 'active' | 'none'
}

export const GamePage: React.FC<GamePropsType> = () => {
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
    ]

    const settings = {
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        swipeToSlide: true,
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                <h3 className={styles['game-page-title']}>Load connection</h3>
                <Slider {...settings}>
                    {arrayConnections.map((card, index) => {
                        return (
                            <div key={index} style={{ marginRight: '20px' }}>
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
                </Slider>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GamePropsType {}
