import React from 'react'
import { PATH } from '../../../src/Router/PATH/PATH'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import styles from './PlayGameButton.module.scss'

const PlayGameButton = () => {
    return (
        <div className={styles['button-inner']}>
            <div className={styles['button-pink-layout']} />
            <div className={styles['button-white-layout']} />
            <div className={styles['button-rainbow-layout']} />
            <CustomLink to={PATH.PLAY_GAME} className={styles['button-main']}>
                <div className={styles['button-main-left-line']}>
                    <div
                        className={styles['button-main-left-line-pink-shadow']}
                    />
                    <div
                        className={styles['button-main-left-line-white-line']}
                    />
                    <div
                        className={styles['button-main-left-line-white-shadow']}
                    />
                </div>
                <span className={styles['button-main-text']}>Play Game</span>
                <div className={styles['button-main-right-line']}>
                    <div
                        className={styles['button-main-right-line-blue-shadow']}
                    />
                    <div
                        className={styles['button-main-right-line-white-line']}
                    />
                    <div
                        className={
                            styles['button-main-right-line-white-shadow']
                        }
                    />
                </div>
            </CustomLink>
        </div>
    )
}

export default PlayGameButton
