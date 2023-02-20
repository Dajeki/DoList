import { Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import DoListForm from "./components/DoListForm";
import DoList from "./components/DoList";
import { getTodos, saveTodos } from "./utils/localStorage";

function App() {
	const [todos, setTodos] = useState( getTodos());

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
