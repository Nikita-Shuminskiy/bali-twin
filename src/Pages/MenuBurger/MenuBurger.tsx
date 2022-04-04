import React from 'react'
import { PATH } from '../../../src/Router/PATH/PATH'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import './MenuBurger.scss'

export const MenuBurger: React.FC<MenuBurgerPropsType> = ({
    closeMenu,
    toggleMenu,
    connectWalletHandler,
    show,
}) => {
    return (
        <div className={`hamburger-menu frosted-glass`}>
            <label
                className={`menu__btn ${show ? 'show-menu' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
            </label>
            <ul className="menu__box frosted-glass">
                <li onMouseUp={closeMenu} className={'menu__item-inner'}>
                    <CustomLink className={'menu__item'} to={PATH.MAIN}>
                        Game
                    </CustomLink>
                    <div className={'menu__item-inner-pink-layout'}></div>
                    <div className={'menu__item-inner-white-layout'}></div>
                </li>
                <li className={'menu__item-inner'}>
                    <CustomLink
                        onMouseUp={closeMenu}
                        className="menu__item"
                        to={PATH.COLLECTION}
                    >
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

interface MenuBurgerPropsType {
    show: boolean
    toggleMenu: () => void
    closeMenu: () => void
    connectWalletHandler: () => void
}
