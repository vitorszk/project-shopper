import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from '../DatePicker/DatePicker';
import ProductCard from '../ProductCard/ProductCard';
import { PinDropSharp } from '@material-ui/icons';

const Form = () => {
 
  // let cartPrice = 0
  // for(let item of props.cart) {
  //   cartPrice += item.price * item.quantity
  // }

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
      <p>//map do carrinho <b>xquantity</b></p> 
      <p>Total: R$</p>
      <button>ENVIAR</button>

    </Box>
  );
}

export default Form