export interface UserDataObject {
	_id: string;
	username: string;
	password: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserDataObjectWithDate {
	_id: string;
	username: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface CreateUserObject {
	username: string;
	password: string;
}
