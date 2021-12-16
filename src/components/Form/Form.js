import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from '../DatePicker/DatePicker';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const Form = () => {
  const { cart } = useContext(GlobalStateContext)

  let cartPrice = 0
  for (let item of cart) {
    cartPrice += item.price * item.quantity
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <DatePicker />
      <p>{cart.map((product) => { return product.name })}</p>
        <b>x{cart.map((product) => { return product.quantity })}</b>
      
      <br />
      <p>Total: R${cartPrice.toFixed(2)}</p>
      <button>ENVIAR</button>

    </Box>
  );
}

export default Form