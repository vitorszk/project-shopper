import * as React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";
import { StyledButton, Container } from "./styled";
import Logo from "../Logo";

const Header = () => {
  const { setIsOpenDrawer } = React.useContext(GlobalStateContext);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenDrawer(newOpen);
  };

  return (
    <Container>
      <Logo />
      <StyledButton color="inherit" onClick={toggleDrawer(true)}>
        <ShoppingCartIcon fontSize="large"/>
      </StyledButton>
    </Container>
  );
};

export default Header;
