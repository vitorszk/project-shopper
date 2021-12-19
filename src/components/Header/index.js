import * as React from "react";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";
import { Container, StyledButtonCart } from "./styled";
import Logo from "../Logo";
import { Button } from "@mui/material";

const Header = () => {
  const { setIsOpenDrawer } = React.useContext(GlobalStateContext);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenDrawer(newOpen);
  };

  return (
    <Container>
      <Logo />
      <Button color="inherit" onClick={toggleDrawer(true)}>
        <StyledButtonCart fontSize="large"/>
      </Button>
    </Container>
  );
};

export default Header;
