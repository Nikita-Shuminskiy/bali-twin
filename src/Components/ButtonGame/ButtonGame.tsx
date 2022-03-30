import React from 'react'
import styles from './ButtonGame.module.scss'

export const ButtonGame: React.FC<ButtonGamePropsType> = ({
    buttonText,
    type,
    callback,
    classNameBtn = '',
    classNameText = '',
}) => {
    const styleTypeButton = {
        error: styles['button-error'],
        none: styles['button'],
        active: styles['button-active'],
    }

    const styleTypeText = {
        error: styles['button-text-error'],
        none: styles['button-text'],
        active: styles['button-text'],
    }

    return (
        <div
            onClick={callback}
            className={`${styles['button']} ${styleTypeButton[type]} ${classNameBtn}`}
        >
            <span
                className={`${styles['button-text']} ${styleTypeText[type]} ${classNameText}`}
            >
                {buttonText}
            </span>
        </div>
    )
}

interface ButtonGamePropsType {
    buttonText: string
    type: 'error' | 'none' | 'active'
    classNameBtn?: string
    classNameText?: string
    callback: () => void
}
