export interface CreateOrUpdateUser {
	name: string;
	age: number;
	gender: string;
}

export interface ReadUser {
	_id: string;
	name: string;
	age: number;
	gender: string;
	createdAt: Date,
	updatedAt: Date
}
