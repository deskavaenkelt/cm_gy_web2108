export interface CreateTodo {
	title: string;
	completed: boolean;
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
