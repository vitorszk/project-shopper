import React, { useState } from "react"
import Form from "../../components/Form/Form"
import ProductCard from "../../components/ProductCard/ProductCard"
import useRequestData from "../../hooks/useRequestData"
import { Container, Content, ProductsContainer, FormContainer } from "./styled"

const HomePage = (props) => {
    const products = useRequestData([], `http://localhost:3003/inventory`)
    const {cart, setCart} = props

    const addToCart = (productToAdd) => {
        const index = cart.findIndex((productInCart) => {
            if (productInCart.id === productToAdd.id) {
                return true
            } else {
                return false
            }
        })

        if (index === -1) {
            const productWithQuantity = {
                ...productToAdd,
                quantity: 1
            }

            const cartCopy = [...cart, productWithQuantity]
            setCart(cartCopy)
        } else {
            const cartCopy = cart.map((productInCart) => {
                if (productInCart.id === productToAdd.id) {
                    return {
                        ...productInCart,
                        quantity: productInCart.quantity + 1
                    }
                } else {
                    return productInCart
                }
            })

            setCart(cartCopy)
        }

    }

    const removeProduct = (productToRemove) => {
        const newCart = cart.map((productInCart) => {
            if (productInCart.id === productToRemove.id) {
                return {
                    ...productInCart,
                    quantity: productInCart.quantity - 1
                }
            } else {
                return productInCart
            }
        }).filter((productInCart) => {
            if(productInCart.quantity === 0) {
                return false
            } else {
                return true
            }
        })

        setCart(newCart)
    }

    const productsResult = products.map((product) => {
        return <div>
            <ProductCard
                key={product.id}
                productInfo={product}
                addToCart={addToCart}
                removeProduct={removeProduct}
            />
        </div>
    })

    return (
        <Container>
            <h1>HomePage</h1>
            <Content>
                <ProductsContainer>
                    {productsResult}
                </ProductsContainer>
                <FormContainer>
                    <Form />
                </FormContainer>
            </Content>
        </Container>
    )
}

export default HomePage