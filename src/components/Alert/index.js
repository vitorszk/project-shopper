import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { GlobalStateContext } from "../../globalState/GlobalStateContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { isOpenSnackBar, setIsOpenSnackBar } =
    React.useContext(GlobalStateContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenSnackBar(false);
  };

  return (
    <Snackbar
      open={isOpenSnackBar}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Seu pedido foi enviado com sucesso!
      </Alert>
    </Snackbar>
  );
}
