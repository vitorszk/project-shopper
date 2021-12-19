import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from 'styled-components'

export const StyledButtonCart = styled(ShoppingCartIcon)`
    color: white;
`

export const Container = styled.header`
    box-shadow: -9px 0px 20px 0px #000000d4;
    background-color: rgb(63, 173, 133);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;

    .MuiButton-root {
        border-radius: 500px;
    }
`