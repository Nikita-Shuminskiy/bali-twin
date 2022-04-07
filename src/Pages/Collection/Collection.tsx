import React from 'react'
import { CardCollection } from './CardCollection/CardCollection'
import style from './Collection.module.scss'

export const Collection = () => {
    return (
        <div>
            <div className={style['container']}>
                <div className={style['wrapper']}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
                        <CardCollection colorCard={'pink'} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
