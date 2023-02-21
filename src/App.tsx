import { Typography, Container, Box, CssBaseline } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import DoListForm from "./components/DoListForm";
import DoList from "./components/DoList";
import ThemeSwitch from "./components/ThemeSwitch";
import { getTodos, saveTodos } from "./utils/localStorage";
import "./App.css";
import logo512 from "./assets/checklist-512x512.png";



function App() {
	const [todos, setTodos] = useState( getTodos());
	const [mode, setMode] = useState<"light" | "dark">( "light" );


	function changeTheme() {
		setMode(( state )=> state === "light" ? "dark" : "light" );
	}

	const purpleTheme = useMemo(
		() => createTheme({
			palette: {
				mode,
				primary: {
					light       : grey[200],
					main        : grey[200],
					dark        : grey[600],
					contrastText: "#EEE",
				},
				secondary: {
					light       : purple[900],
					main        : purple[500],
					dark        : purple[300],
					contrastText: "#EEE",
				},
			},
		}), [mode] );

	const addTodo = ( text : string ) => {
		const newTodos = [...todos, text];
		setTodos( newTodos );
	};

	const deleteTodo = ( index : number ) => {
		const newTodos = [...todos];
		newTodos.splice( index, 1 );
		setTodos( newTodos );
	};

	useEffect(() => {
		saveTodos( todos );
	}, [todos] );

	return (

		<Container className="App">
			<ThemeProvider theme={purpleTheme}>
				<CssBaseline />
				<Container
					sx={{
						display   : "flex",
						alignItems: "center",
						m         : 0,
						mb        : "2rem",
					}}
					disableGutters={true}
				>
					<Box
						component="img"
						sx={{
							height: 64,
							width : 64,
						}}
						alt="DoList Icon"
						src={logo512}
						mr="1rem"
					/>
					<Typography variant="h4" align="center" sx={{ display: "inline-block" }}>
						DoList
					</Typography>
					<ThemeSwitch changeTheme={changeTheme} />
				</Container>
				<Container maxWidth="sm">
					<DoListForm addTodo={ addTodo } />
					<DoList todos={todos} deleteTodo={deleteTodo} />
				</Container>
			</ThemeProvider>
		</Container>
	);
}

export default App;
