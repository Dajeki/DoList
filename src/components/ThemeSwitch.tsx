import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

type ThemeSwitchProps = {
	changeTheme: () => void
}

export default function ThemeSwitch({ changeTheme }: ThemeSwitchProps ) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display       : "flex",
				alignItems    : "center",
				justifyContent: "center",
				ml            : "auto",
			}}
		>
			{ theme.palette.mode }
			{ " mode" }
			<IconButton color="inherit" onClick={ changeTheme } sx={{ ml: 1 }}>
				{ theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 /> }
			</IconButton>
		</Box>
	);
}
