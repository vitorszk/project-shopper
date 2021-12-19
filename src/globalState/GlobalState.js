import { GlobalStateContext } from "./GlobalStateContext"
import React, { useState } from 'react'
import useRequestData from "../hooks/useRequestData"

export const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isOpenSnackBar, setIsOpenSnackBar] = useState(false)

    const products = useRequestData([], `http://localhost:3003/inventory`)
    

    return <GlobalStateContext.Provider value={{ cart, setCart, products, isOpenDrawer, setIsOpenDrawer, isOpenSnackBar, setIsOpenSnackBar }}>
        {props.children}
    </GlobalStateContext.Provider>
}