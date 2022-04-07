import { ButtonGame } from 'Components'
import React from 'react'
import helmet from '../../../Images/Collection/helmet.svg'
import styles from './CardCollection.module.scss'

enum ColorCardEnum {
    white = '#FFFFFF',
    lightBlue = '#0ACEDB',
    pink = '#FF1AB1',
    yellow = '#F9C62F',
}

type CardCollectionType = {
    colorCard: 'white' | 'lightBlue' | 'pink' | 'yellow'
    name?: string
    price?: string
}
export const CardCollection = ({ colorCard, name }: CardCollectionType) => {
    return (
        <div className={`${styles['container']} ${styles[colorCard]}`}>
            <div className={styles['wrapper']}>
                <div className={styles['header']}>
                    <span className={styles['header-text']}>420</span>
                    <div className={styles['wrapper-bg']}>
                        <svg
                            width="121"
                            height="24"
                            viewBox="0 0 121 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.5 0H120.5L110.711 19.5777C109.356 22.288 106.586 24 103.556 24H17.4443C14.4141 24 11.644 22.288 10.2889 19.5777L0.5 0Z"
                                fill={ColorCardEnum[colorCard]}
                            />
                        </svg>
                        <span>common</span>
                    </div>
                    <span className={styles['header-text']}>3200</span>
                </div>
                <div className={styles['block-body']}>
                    {/*  <img
                        className={styles['helmet-img-border']}
                        src={helmetBorderYellow}
                        alt="border-helmet"
                    />*/}
                    <img
                        className={styles['helmet-img']}
                        src={helmet}
                        alt="helmet"
                    />
                    <div className={styles['body-text']}>
                        <span className={styles['name-item']}>
                            Penida halmet
                        </span>
                        <span className={styles['item-line']} />
                        <span
                            className={`${styles['item-shadow']} ${styles[colorCard]}`}
                        />
                        <div className={`${styles['item-head-text']}`}>
                            Item / Head
                        </div>
                    </div>
                    <div className={styles['body-footer']}>
                        <span className={styles['footer-text-price']}>
                            Price
                        </span>
                        <span className={styles['footer-text']}>4.20 ICR</span>
                        <span className={styles['footer-text-price']}>
                            ~$532
                        </span>
                    </div>
                    <div className={styles['btn-game']}>
                        <ButtonGame
                            type={'none'}
                            buttonText={'Buy now'}
                            callback={() => {
                                console.log('job')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
