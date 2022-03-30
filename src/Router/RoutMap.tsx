import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import { GamePage } from '../Pages/GamePage/GamePage'
import { PATH } from './PATH/PATH'

const RoutMap = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route path={PATH.GAME} element={<GamePage />} />
        </Routes>
    )
}

export default RoutMap
