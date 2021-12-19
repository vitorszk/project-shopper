import { ThemeProvider } from "@mui/material/styles";
import React from "react"
import theme from "./constants/theme";
import { GlobalState } from "./globalState/GlobalState";
import Router from "./routes/Router";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
