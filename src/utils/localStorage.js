const TODO_STORAGE_KEY = "Dajeki.DoList";

export function saveTodos( todos ) {
	localStorage.setItem( TODO_STORAGE_KEY, JSON.stringify( todos ));
}

export function getTodos() {
	const todos = localStorage.getItem( TODO_STORAGE_KEY );
	return todos ? JSON.parse( todos ) : [];
}