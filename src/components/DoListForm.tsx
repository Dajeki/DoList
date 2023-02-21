import React, { FormEvent, useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

function DoListForm({ addTodo } : { addTodo: ( text: string ) => void }) {
	const [ value, setValue ] = useState( "" );

	const handleSubmit = ( e : FormEvent<HTMLFormElement> ) => {
		e.preventDefault();
		if( !value ) return;
		addTodo( value );
		setValue( "" );
	};

	return (
		<form onSubmit={ handleSubmit }>
			<Grid container spacing={ 2 }>
				<Grid item sm={ 9 } xs={ 12 }>
					<TextField
						autoComplete="off"
						fullWidth
						onChange={ ( e ) => setValue( e.target.value ) }
						placeholder="Add todo..."
						value={ value }
						variant="outlined"
					/>
				</Grid>
				<Grid item sm={ 3 } xs={ 12 }>
					<Button color="secondary" fullWidth type="submit" variant="contained">
						Add
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default DoListForm;