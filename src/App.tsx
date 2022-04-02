import React, { useEffect, useState } from 'react'
import { Preloader } from '../src/Components/Preloader/Preloader'
import './App.css'
import RoutMap from './Router/RoutMap'

export const App = () => {
    const [preloader, setPreloader] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 1500)
    }, [])
    return <>{preloader ? <Preloader /> : <RoutMap />}</>
}
