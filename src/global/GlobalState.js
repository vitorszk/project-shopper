import { GlobalStateContext } from "./GlobalStateContext"
import React, { useState } from 'react'
import useRequestData from "../hooks/useRequestData"

export const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const products = useRequestData([], `http://localhost:3003/inventory`)

    return <GlobalStateContext.Provider value={{ cart, setCart, products }}>
        {props.children}
    </GlobalStateContext.Provider>
}