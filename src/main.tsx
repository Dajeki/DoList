import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import "./index.css";
import App from "./App";

const darkPurpleTheme = createTheme({
	palette: {
		primary: {
			main: "#000",
		},
		secondary: {
			main: purple[500],
		},
		type: "dark",
	},
});

ReactDOM.createRoot( document.getElementById( "root" ) as HTMLElement ).render(
	<React.StrictMode>
		<ThemeProvider theme={darkPurpleTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
