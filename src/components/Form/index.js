import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";
import { makeStyles } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { newOrder } from "../../api/newOrder";
import {
  Amount,
  Form as FormComponent,
  ProductList,
  StyledButton,
} from "./styled";
import CustomizedSnackbars from "../Alert";
import { Button } from "@mui/material";
import useCart from "../../hooks/useCart";

const useStyles = makeStyles({
  field: {
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
});

const Form = () => {
  const classes = useStyles();

  const { addToCart, removeProduct } = useCart();
  const { cart, setIsOpenSnackBar } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    const { client_name, delivery_date } = form;
    const order = {
      client_name,
      delivery_date: new Date(delivery_date).toISOString(),
      products: cart,
      amount: Number(cartPrice.toFixed(2)),
    };
    newOrder(order)
      .then(() => {
        setIsOpenSnackBar(true);
        clear();
      })
  };

  let cartPrice = 0;
  let today = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date());

  for (let item of cart) {
    cartPrice += item.price * item.qty;
  }

  const [form, onChange, clear] = useForm({
    client_name: "",
    delivery_date: today,
  });

  return (
    <>
      <CustomizedSnackbars />
      <FormComponent>
        <h1>Resumo do Pedido</h1>
        <TextField
          name={"client_name"}
          value={form.client_name}
          onChange={onChange}
          className={classes.field}
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          required
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateTimePicker
              name={"delivery_date"}
              value={form.delivery_date}
              onChange={(value) =>
                onChange({ target: { name: "delivery_date", value } })
              }
              label="Data e Hora"
              renderInput={(params) => <TextField {...params} />}
              minDateTime={today}
            />
          </Stack>
        </LocalizationProvider>
        <ProductList>
          {cart.map((product) => {
            const isOutOfStock = product.qty_stock - product.qty === 0;

            return (
              <div>
                <p>
                  <b>{product.qty}</b>x {product.name}
                  <Button
                    onClick={() => addToCart(product)}
                    disabled={isOutOfStock}
                  >
                    +
                  </Button>
                  <Button color="error" onClick={() => removeProduct(product)}>
                    -
                  </Button>
                </p>
                <b>R${product.price}</b>
              </div>
            );
          })}
        </ProductList>
        <Amount>TOTAL: R${cartPrice.toFixed(2)}</Amount>
        <StyledButton size="large" variant="contained" onClick={onSubmitForm}>
          ENVIAR PEDIDO
        </StyledButton>
      </FormComponent>
    </>
  );
};

export default Form;
