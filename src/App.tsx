import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MenuBurger } from './Pages/MenuBurger/MenuBurger'
import { GamePage } from './Pages/GamePage/GamePage'
import { HomePage } from './Pages/HomePage/HomePage'

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gamePage" element={<GamePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
