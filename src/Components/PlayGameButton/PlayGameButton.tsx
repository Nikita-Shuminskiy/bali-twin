import React from 'react'
import styles from './PlayGameButton.module.scss'

const PlayGameButton = () => {
    return (
        <div className={styles['button-inner']}>
            <div className={styles['button-pink-layout']}></div>
            <div className={styles['button-white-layout']}></div>
            <div className={styles['button-rainbow-layout']}></div>
            <div className={styles['button-main']}>
                <div className={styles['button-main-left-line']}>
                    <div
                        className={styles['button-main-left-line-pink-shadow']}
                    ></div>
                    <div
                        className={styles['button-main-left-line-white-line']}
                    ></div>
                    <div
                        className={styles['button-main-left-line-white-shadow']}
                    ></div>
                </div>
                <span className={styles['button-main-text']}>Play Game</span>
                <div className={styles['button-main-right-line']}>
                    <div
                        className={styles['button-main-right-line-blue-shadow']}
                    ></div>
                    <div
                        className={styles['button-main-right-line-white-line']}
                    ></div>
                    <div
                        className={
                            styles['button-main-right-line-white-shadow']
                        }
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default PlayGameButton
