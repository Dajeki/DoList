import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DoList({ todos, deleteTodo }) {
	return (
		<List>
			{todos.map(( todo, index ) => (
				<ListItem key={index} divider>
					<ListItemText primary={todo} />
					<IconButton onClick={() => deleteTodo( index )}>
						<DeleteIcon color="secondary" />
					</IconButton>
				</ListItem>
			))}
		</List>
	);
}

export default DoList;




