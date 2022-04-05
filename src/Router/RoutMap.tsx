import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { AppHeader } from 'Pages/AppHeader/AppHeader'
import { screens } from './PATH/PATH'

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
            </Routes>
        </>
    )
}

export default RoutMap
