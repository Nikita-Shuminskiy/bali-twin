import { AppHeader } from 'Pages/AppHeader/AppHeader'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { screens } from 'Router/PATH/PATH'
import '../styles.css'

const RoutMap = () => {
    const location = useLocation()
    console.log('121')
    return (
        <>
            <AppHeader />
            {/* <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={5000}
                > */}
            <Routes location={location}>
                {screens['AUTHORIZED'].map((path, index) => {
                    return (
                        <Route
                            key={`${index} ${path?.path}`}
                            path={path?.path}
                            element={path?.component}
                        />
                    )
                })}
            </Routes>
            {/* </CSSTransition>
            </TransitionGroup> */}
        </>
    )
}

export default RoutMap
