import React from 'react'
import { useLocation } from 'react-router-dom'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import logo from '../../Images/logo-twin.png'
import { MenuBurger } from '../../Pages/MenuBurger/MenuBurger'
import { PATH } from '../../Router/PATH/PATH'
import styles from './AppHeader.module.scss'

export const AppHeader = () => {
    const { pathname } = useLocation()
    const styleLink = (PATH: any) => {
        return `${styles['link']} ${pathname === PATH ? styles['active'] : ''}`
    }
    return (
        <div className={styles['container']}>
            <MenuBurger />
            <CustomLink className={styleLink(PATH.HOME)} to={PATH.HOME}>
                <img src={logo} alt="logo-bali-twin" />
            </CustomLink>
            <div className={styles['block-nav']}>
                <CustomLink className={styleLink(PATH.GAME)} to={PATH.GAME}>
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
