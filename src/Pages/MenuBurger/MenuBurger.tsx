import React from 'react'
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
                    <a className="menu__item" href="#">
                        Game
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        Collection
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        Marketplace
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        Jobs
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        Docs
                    </a>
                </li>
            </ul>
            <div>
                <a href="#" className={'btn-header'}>
                    Connect wallet
                </a>
            </div>
        </div>
    )
}
