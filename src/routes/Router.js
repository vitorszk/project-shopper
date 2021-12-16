import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "../components/Form/Form"
import Header from "../components/Header/Header"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route element ={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router