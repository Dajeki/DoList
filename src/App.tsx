import { Typography, Container } from "@mui/material";
import { useState } from "react";
import "./App.css";
import DoListForm from "./components/DoListForm";
import DoList from "./components/DoList";

function App() {
	const [todos, setTodos] = useState<string[]>( [] );

	const addTodo = ( text: string ) => {
		const newTodos = [...todos, text];
		setTodos( newTodos );
	};

	const deleteTodo = ( index: number ) => {
		const newTodos = [...todos];
		newTodos.splice( index, 1 );
		setTodos( newTodos );
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h1" align="center" gutterBottom>
				Todo List
			</Typography>
			<DoListForm addTodo={addTodo} />
			<DoList todos={todos} deleteTodo={deleteTodo} />
		</Container>
	);
}

export default App;
