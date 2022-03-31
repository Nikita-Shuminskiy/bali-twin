import React from 'react'
import './App.css'
import RoutMap from './Router/RoutMap'
import { AppHeader } from './Pages/AppHeader/AppHeader'

export const App = () => {
    return (
        <>
            <AppHeader />
            <RoutMap />
        </>
    )
}
