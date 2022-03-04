import * as React from "react";
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Form from "../Form";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";
import { Puller, Root, StyledBox } from "./styled";

const drawerBleeding = 56;


function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const { cart, isOpenDrawer, setIsOpenDrawer } =
    React.useContext(GlobalStateContext);

  let results = 0;

  for (let item of cart) {
    results += item.qty;
  }

  const toggleDrawer = (newOpen) => () => {
    setIsOpenDrawer(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={isOpenDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Form />
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}  >
            <b>ITENS NO CARRINHO: {results.length === 0 ? "0" : results}</b>
          </Typography>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default SwipeableEdgeDrawer;
