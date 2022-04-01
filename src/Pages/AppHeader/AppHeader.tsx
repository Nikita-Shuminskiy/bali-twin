import React from 'react'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import logo from '../../Images/logo-twin.png'
import { MenuBurger } from '../../Pages/MenuBurger/MenuBurger'
import { PATH } from '../../Router/PATH/PATH'
import styles from './AppHeader.module.scss'

export const AppHeader = () => {
    return (
        <div className={styles['container']}>
            <MenuBurger />
            <CustomLink className={styles['link']} to={PATH.HOME}>
                <img src={logo} alt="logo-bali-twin" />
            </CustomLink>
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
