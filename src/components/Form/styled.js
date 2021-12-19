import { Button } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  background-color: ghostwhite;
  padding: 12px;
  padding-bottom: 20px;
  max-height: 100%;
  max-width: 100vw;
  border-radius: 5px;
  overflow: auto;
`;

export const ProductList = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  div {
    border-bottom: 1px #c9c9c9 solid;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 10px;
  }
`;

export const Amount = styled.b`
  width: 100%;
  text-align: right;
  margin: 1rem 0;
  padding: 0 10px;
`;

export const StyledButton = styled(Button)`
    font-size: 1.3rem;
    color: white;
`
