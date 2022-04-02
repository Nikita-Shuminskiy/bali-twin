import React, { useState } from 'react'
import { PATH } from '../../../src/Router/PATH/PATH'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import './MenuBurger.scss'

export const MenuBurger = () => {
    const [show, setShow] = useState<boolean>(false)

    const toggleMenu = () => {
        setShow(!show)
    }

    const closeMenu = () => {
        setShow(false)
    }

    const connectWalletHandler = () => {
        console.log('connectWalletHandler')
    }

    return (
        <div className={`hamburger-menu frosted-glass`}>
            <label
                className={`menu__btn ${show ? 'show-menu' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
            </label>
            <ul className="menu__box frosted-glass">
                <li className={'menu__item-inner'}>
                    <CustomLink
                        className={'menu__item'}
                        onClick={closeMenu}
                        to={PATH.GAME}
                    >
                        Game
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>
                <li className={'menu__item-inner'}>
                    <CustomLink className="menu__item" to="#">
                        Collection
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>
                <li className={'menu__item-inner'}>
                    <CustomLink className="menu__item" to="#">
                        Marketplace
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>
                <li className={'menu__item-inner'}>
                    <CustomLink className="menu__item" to="#">
                        Jobs
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>
                <li className={'menu__item-inner'}>
                    <CustomLink className="menu__item" to="#">
                        Docs
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>

                <div
                    onClick={connectWalletHandler}
                    className={'btn-connect-wallet-mobile'}
                >
                    <span className={'btn-connect-wallet-mobile-text'}>
                        Connect wallet
                    </span>
                </div>
            </ul>
        </div>
    )
}
