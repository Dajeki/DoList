import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

function TodoForm({ addTodo }) {
	const [value, setValue] = useState( "" );

	const handleSubmit = ( e ) => {
		e.preventDefault();
		if( !value ) return;
		addTodo( value );
		setValue( "" );
	};

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={9}>
					<TextField
						variant="outlined"
						fullWidth
						placeholder="Add todo..."
						value={value}
						onChange={( e ) => setValue( e.target.value )}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Button variant="contained" color="secondary" fullWidth type="submit">
						Add
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default TodoForm;