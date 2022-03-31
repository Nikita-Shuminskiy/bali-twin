import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MenuBurger } from '../Pages/MenuBurger/MenuBurger'
import { AppHeader } from '../Pages/AppHeader/AppHeader'
import { GamePage } from '../Pages/GamePage/GamePage'
import { HomePage } from '../Pages/HomePage/HomePage'
import { PATH } from './PATH/PATH'

const RoutMap = () => {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route
                    path={PATH.HOME || PATH.MAIN}
                    element={
                        <>
                            <HomePage />
                        </>
                    }
                />
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
