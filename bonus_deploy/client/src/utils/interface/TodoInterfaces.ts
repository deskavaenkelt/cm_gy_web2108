export interface CreateOrUpdateTodo {
	title: string;
	assignedTo: string;
}

export interface ReadTodo {
	_id: string;
	title: string;
	completed: boolean;
	assignedTo: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ChangeTodoStatus {
	newTodoStatus: boolean;
}
