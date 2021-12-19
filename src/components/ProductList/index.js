import React, { useContext } from "react";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";
import useCart from "../../hooks/useCart";
import ProductCard from "../ProductCard";
import { Container } from "./styled";

const ProductList = () => {
  const { products } = useContext(GlobalStateContext);
  const { addToCart, removeProduct } = useCart();

  return (
    <Container>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeProduct={removeProduct}
          />
        );
      })}
    </Container>
  );
};

export default ProductList;
