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

    return (
        <div className={`hamburger-menu frosted-glass`}>
            <label
                className={`menu__btn ${show ? 'show-menu' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
            </label>
            <ul className="menu__box frosted-glass">
                <li>
                    <CustomLink
                        className={'menu__item'}
                        onClick={closeMenu}
                        to={PATH.GAME}
                    >
                        Game
                    </CustomLink>
                </li>
                <li>
                    <CustomLink className="menu__item" to="#">
                        Collection
                    </CustomLink>
                </li>
                <li>
                    <CustomLink className="menu__item" to="#">
                        Marketplace
                    </CustomLink>
                </li>
                <li>
                    <CustomLink className="menu__item" to="#">
                        Jobs
                    </CustomLink>
                </li>
                <li>
                    <CustomLink className="menu__item" to="#">
                        Docs
                    </CustomLink>
                </li>
                <div className="menu__block-btn">
                    <CustomLink to="#" className="btn">
                        Connect wallet
                    </CustomLink>
                </div>
            </ul>
        </div>
    )
}
