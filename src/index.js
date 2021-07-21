import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./serviceWorker";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey, deepOrange } from "@material-ui/core/colors";

export const globalTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: grey,
    error: deepOrange,
    contrastText: "#fff",
  },
});

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
