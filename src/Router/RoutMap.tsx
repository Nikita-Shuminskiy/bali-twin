import { AppHeader } from 'Pages/AppHeader/AppHeader'
import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { screens } from './PATH/PATH'
import { GamePage } from '../Pages/GamePage/GamePage'

const RoutMap = () => {
    return (
        <>
            <AppHeader />
            <Routes>
                {screens['AUTHORIZED'].map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route?.path}
                            element={route?.component}
                        />
                    )
                })}
                <Route path={'/game'}>
                    <Route path="play-game" element={<GamePage />} />
                </Route>
                <Route path="*" element={<Navigate to="/game" />} />
            </Routes>
        </>
    )
}

export default RoutMap
