import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import logo from '../../Images/logo.svg'
import { MenuBurger } from '../../Pages/MenuBurger/MenuBurger'
import { PATH } from '../../Router/PATH/PATH'
import styles from './AppHeader.module.scss'

export const AppHeader = () => {
    const { pathname } = useLocation()
    const [show, setShow] = useState<boolean>(false)
    let location = document.location
    const toggleMenu = () => {
        if (show) {
            setShow(false)
            document.body.style.overflow = 'auto'
        } else {
            setShow(true)
            document.body.style.overflow = 'hidden'
        }
    }
    const closeMenu = () => {
        setShow(false)
        document.body.style.overflow = 'auto'
    }
    const styleLink = (PATH: string) => {
        return `${styles['link']} ${
            pathname === PATH
                ? `${styles['active']} ${styles['active-line']}`
                : ''
        }`
    }
    const connectWalletHandler = () => {
        console.log('connectWalletHandler')
    }
    console.log(location.pathname)
    return (
        <div className={styles['container']}>
            <MenuBurger
                show={show}
                closeMenu={closeMenu}
                connectWalletHandler={connectWalletHandler}
                toggleMenu={toggleMenu}
            />
            <div className={styles['logo']}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles['block-nav']}>
                <CustomLink
                    className={`${styles['link']} ${
                        location.pathname === '/' ||
                        location.pathname === '/bali-twin' ||
                        location.pathname === '/bali-twin/' ||
                        location.pathname === '/game/play-game'
                            ? `${styles['active']} ${styles['active-line']}`
                            : ''
                    }
                    }`}
                    to={PATH.MAIN}
                >
                    <span />
                    Game
                </CustomLink>
                <CustomLink
                    className={styleLink(PATH.COLLECTION)}
                    to={PATH.COLLECTION}
                >
                    <span />
                    Collection
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    <span />
                    Marketplace
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    <span />
                    Jobs
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    <span />
                    Builder
                </CustomLink>
                <CustomLink className={styles['link']} to="#">
                    <span />
                    Docs
                </CustomLink>
            </div>
            <div
                onClick={connectWalletHandler}
                className={styles['btn-connect-wallet']}
            >
                <span className={styles['btn-connect-wallet-text']}>
                    Connect wallet
                </span>
            </div>
        </div>
    )
}
