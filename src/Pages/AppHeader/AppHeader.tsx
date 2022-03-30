import React from 'react'
import { CustomLink } from '../../Compmonent/CustomLink/CustomLink'
import logo from '../../Images/logo-twin.png'
import styles from './AppHeader.module.scss'
import { PATH } from '../../Router/PATH/PATH'

export const AppHeader = () => {
    return (
        <div className={styles['container']}>
            <img src={logo} alt="logo-bali-twin" />
            <div className={styles['block-nav']}>
                <CustomLink className={styles['link']} to={PATH.GAME}>
                    Game
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    Collection
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    Marketplace
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    Jobs
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    Builder
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    Docs
                </CustomLink>
            </div>
            <a href="#" className={styles['btn-header']}>
                Connect wallet
            </a>
        </div>
    )
}
