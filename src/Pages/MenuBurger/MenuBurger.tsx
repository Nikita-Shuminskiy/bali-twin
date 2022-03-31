import React from 'react'
import { CustomLink } from '../../../src/Components/CustomLink/CustomLink'
import { PATH } from '../../../src/Router/PATH/PATH'
import './MenuBurger.scss'

export const MenuBurger = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className="menu__box">
                <li>
                    <CustomLink className={'menu__item'} to={PATH.GAME}>
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
