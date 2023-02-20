import { Theme, ThemeOptions, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface PaletteOptions {
		type?: "dark" | "light";
	}
	// allow configuration using `createTheme`
	interface PaletteOptions {
			type?: "dark" | "light";
	}
  }