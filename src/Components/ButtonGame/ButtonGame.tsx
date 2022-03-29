import React from 'react'
import styles from './ButtonGame.module.scss'

export const ButtonGame: React.FC<ButtonGamePropsType> = ({
    buttonText,
    type,
}) => {
    return (
        <div
            className={`${styles['button']} ${
                type === 'active' ? styles['button-active'] : ''
            }`}
        >
            <span
                className={`${styles['button-text']} ${
                    type === 'active' ? styles['button-active-text'] : ''
                }`}
            >
                {buttonText}
            </span>
        </div>
    )
}

interface ButtonGamePropsType {
    buttonText: string
    type: 'active' | 'none'
}
