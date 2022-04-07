import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { AppHeader } from '../Pages/AppHeader/AppHeader'
import { screens } from './PATH/PATH'
import { animated, useTransition } from 'react-spring'

const RoutMap = () => {
    return (
        <>
            <AppHeader />
                    <Routes location={location?.pathname}>
                        {screens['AUTHORIZED'].map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route?.path}
                                    element={route?.component}
                                />
                            )
                        })}
                    </Routes>
        </>
    )
}

export default RoutMap
