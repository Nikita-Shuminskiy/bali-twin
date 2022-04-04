import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CustomLink } from '../../Components/CustomLink/CustomLink'
import logo from '../../Images/logo-twin.png'
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
    const styleLink = (PATH: any) => {
        console.log(PATH)
        console.log(pathname)
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
                <svg
                    width="166"
                    height="16"
                    viewBox="0 0 166 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M138.058 15.8652H141.236C141.658 15.8652 142.062 15.6983 142.36 15.401C142.658 15.1038 142.825 14.7007 142.825 14.2804V0.0166016H139.647C139.225 0.0166016 138.821 0.183581 138.523 0.480801C138.225 0.778021 138.058 1.18113 138.058 1.60147V15.8652Z"
                        fill="white"
                    />
                    <path
                        d="M162.821 1.60147V10.5116L150.969 0.396992C150.682 0.151488 150.315 0.0165725 149.936 0.0166016H146.531V15.8652H148.121C148.542 15.8652 148.946 15.6983 149.245 15.401C149.543 15.1038 149.71 14.7007 149.71 14.2804V5.54223L161.603 15.4944C161.889 15.7338 162.251 15.8651 162.624 15.8652H166V0.0166016H164.411C163.989 0.0166016 163.585 0.183581 163.287 0.480801C162.989 0.778021 162.821 1.18113 162.821 1.60147Z"
                        fill="white"
                    />
                    <path
                        d="M80.9749 0.0078125L81.4667 1.34624C81.5788 1.65083 81.782 1.91377 82.0487 2.09955C82.3154 2.28534 82.6329 2.38502 82.9583 2.38511H89.3153V15.8565H92.4938C92.9153 15.8565 93.3195 15.6895 93.6176 15.3923C93.9156 15.095 94.083 14.6919 94.083 14.2716V2.38511H100.566C100.899 2.38558 101.225 2.28119 101.496 2.08675C101.767 1.8923 101.97 1.61768 102.075 1.30186L102.508 0.0078125H80.9749Z"
                        fill="white"
                    />
                    <path
                        d="M134.054 0.016638C133.761 0.0165534 133.475 0.0967691 133.226 0.248448C132.976 0.400126 132.774 0.617407 132.64 0.876434L126.212 13.3485L119.786 0.861383C119.653 0.602059 119.45 0.384435 119.201 0.232467C118.951 0.0804996 118.665 6.51206e-05 118.372 0H114.27L118.243 7.7064L115.371 13.3414L108.953 0.869315C108.819 0.609991 108.617 0.392367 108.367 0.240399C108.118 0.0884317 107.831 0.00799718 107.539 0.00793206H103.437L111.164 15.0047C111.298 15.2639 111.5 15.4813 111.75 15.6332C111.999 15.785 112.286 15.8653 112.578 15.8653H115.689C115.983 15.8656 116.272 15.7842 116.523 15.6303C116.774 15.4764 116.977 15.2559 117.11 14.9936L119.532 10.2089L122.001 15.0008C122.134 15.2593 122.336 15.4763 122.585 15.6279C122.834 15.7796 123.119 15.8601 123.411 15.8606L126.533 15.8661C126.826 15.8665 127.113 15.7864 127.363 15.6346C127.612 15.4827 127.815 15.2651 127.949 15.0055L135.674 0.016638H134.054Z"
                        fill="white"
                    />
                    <path
                        d="M30.411 2.5167L36.8348 14.9999C36.9685 15.2598 37.1717 15.4778 37.4218 15.6298C37.672 15.7818 37.9595 15.8619 38.2524 15.8612H42.3551L34.6273 0.864476C34.4938 0.605301 34.2912 0.387848 34.0418 0.236025C33.7924 0.0842023 33.5059 0.00389655 33.2137 0.00390625H30.0916C29.7994 0.00389655 29.5128 0.0842023 29.2635 0.236025C29.0141 0.387848 28.8115 0.605301 28.6779 0.864476L20.9534 15.8525H22.5712C22.863 15.8516 23.1489 15.7706 23.3975 15.6183C23.6462 15.4661 23.848 15.2486 23.9809 14.9896L30.411 2.5167Z"
                        fill="white"
                    />
                    <path
                        d="M15.8226 15.8525C18.4791 15.8525 20.6937 13.6852 20.6603 11.0361C20.6512 10.3031 20.4719 9.58222 20.1366 8.92987C19.8013 8.27752 19.3191 7.71147 18.7278 7.27606C19.4358 6.53513 19.8641 5.5422 19.8657 4.3694C19.8657 1.94852 17.8529 0.00390625 15.4253 0.00390625H1.58925C1.16776 0.00390625 0.763529 0.170886 0.465485 0.468106C0.167442 0.765325 0 1.16844 0 1.58877V15.8525H15.8226ZM12.714 2.3812C13.5881 2.3812 15.0979 2.65935 15.0979 4.36228C15.0979 6.06522 13.5881 6.34336 12.714 6.34336H4.76776V2.3812H12.714ZM4.76776 8.72066H12.714C13.5881 8.72066 15.8926 8.72066 15.8926 11.098C15.8926 13.4752 13.5881 13.4752 12.714 13.4752H4.76776V8.72066Z"
                        fill="white"
                    />
                    <path
                        d="M70.7216 0.00390625H67.5431C67.1216 0.00390625 66.7174 0.170886 66.4193 0.468106C66.1213 0.765325 65.9539 1.16844 65.9539 1.58877V15.9999L69.1816 15.9001C69.5945 15.8873 69.9862 15.7147 70.2737 15.4189C70.5611 15.123 70.7218 14.7272 70.7216 14.3152V0.00390625Z"
                        fill="white"
                    />
                    <path
                        d="M62.1049 14.7693L62.5372 13.4752H49.8232V1.58877C49.8232 1.16844 49.6557 0.765325 49.3577 0.468106C49.0597 0.170886 48.6554 0.00390625 48.2339 0.00390625H45.0554V15.8525H60.5975C60.931 15.8525 61.256 15.7479 61.5265 15.5535C61.797 15.3591 61.9994 15.0847 62.1049 14.7693Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className={styles['block-nav']}>
                <CustomLink
                    className={`${styles['link']} ${
                        location.pathname === '/' ||
                        location.pathname === '/bali-twin' ||
                        location.pathname === '/bali-twin/'
                            ? `${styles['active']} ${styles['active-line']}`
                            : location.pathname === '/bali-twin/'
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
