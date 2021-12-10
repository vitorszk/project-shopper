import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route element ={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router