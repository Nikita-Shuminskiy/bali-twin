import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from '../Pages/AppHeader/AppHeader'
import { GamePage } from '../Pages/GamePage/GamePage'
import { HomePage } from '../Pages/HomePage/HomePage'
import { PATH } from './PATH/PATH'
import { MenuBurger } from '../Pages/MenuBurger/MenuBurger'

const RoutMap = () => {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route path={PATH.HOME} element={<MenuBurger />} />
                <Route path={PATH.MAIN || PATH.HOME} element={<HomePage />} />
                <Route
                    path={PATH.GAME}
                    element={
                        <>
                            <HomePage />
                            <GamePage />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default RoutMap
