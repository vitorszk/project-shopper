import { useContext } from "react";
import { GlobalStateContext } from "../globalState/GlobalStateContext";

const useCart = () => {
  const { cart, setCart } = useContext(GlobalStateContext);
  const addToCart = (productToAdd) => {
    const index = cart.find(
      (productInCart) => productInCart.id === productToAdd.id
    );

    if (!index) {
      const productWithQuantity = {
        ...productToAdd,
        qty: 1,
      };

      const newCart = [...cart, productWithQuantity];
      setCart(newCart);
    } else {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === productToAdd.id) {
          return {
            ...productInCart,
            qty: productInCart.qty + 1,
          };
        } else {
          return productInCart;
        }
      });

      setCart(newCart);
    }
  };

  const removeProduct = (productToRemove) => {
    const newCart = cart
      .map((productInCart) => {
        if (productInCart.id === productToRemove.id) {
          return {
            ...productInCart,
            qty: productInCart.qty - 1,
          };
        } else {
          return productInCart;
        }
      })
      .filter((productInCart) => productInCart.qty !== 0);

    setCart(newCart);
  };

  return { addToCart, removeProduct };
};

export default useCart;
