const TODO_STORAGE_KEY = "dajeki.dolist.ZKi61uA6";

export function saveTodos( todos : string[] ) {
	localStorage.setItem( TODO_STORAGE_KEY, JSON.stringify( todos ));
}

export function getTodos() {
	const todos = localStorage.getItem( TODO_STORAGE_KEY );
	return todos ? JSON.parse( todos ) : [];
}