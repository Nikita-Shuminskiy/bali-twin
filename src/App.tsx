import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { GamePage } from './Pages/GamePage/GamePage'

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GamePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
