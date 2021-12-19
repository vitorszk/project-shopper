import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { StyledCard, StyledActions, StyledButton } from "./styled";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";

const ProductCard = ({ product, addToCart, removeProduct }) => {
  const { cart } = React.useContext(GlobalStateContext);

  const quantity = cart.find((item) => item.id === product.id)?.qty || 0;

  const isOutOfStock = (product.qty_stock - quantity) === 0

  return (
    <StyledCard disabled={product.qty_stock === 0}>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image="https://landing.shopper.com.br/img/8f6a2ba72cfecb1350d60b069b71a5c5.png"
          alt="green iguana"
        />
        <p>{product.name}</p>
        <p>Quantidade em estoque: {product.qty_stock - quantity}</p>
        <Typography variant="h5" color="primary">
          R${product.price}
        </Typography>
      </CardContent>
      {quantity ? (
        <StyledActions>
          <section>
            <Button onClick={() => addToCart(product)} disabled={isOutOfStock}>+</Button>
            {quantity}
            <Button color="error" onClick={() => removeProduct(product)}>
              -
            </Button>
          </section>
        </StyledActions>
      ) : (
        <StyledActions>
          <StyledButton variant="contained" disabled={product.qty_stock === 0} onClick={() => addToCart(product)}>
            {product.qty_stock === 0 ? 'ESGOTADO' : 'ADICIONAR'}
          </StyledButton>
        </StyledActions>
      )}
    </StyledCard>
  );
};

export default ProductCard;
