// Unions
// interface Users {
// 	id: number;
// 	name: string;
// 	age: number;
// 	gender: "Male" | "Female" | "Other";
// }

interface CreateUser {
	name: string;
	age: number;
	gender: "Male" | "Female" | "Other";
}

interface ReadUser extends CreateUser{
	id: number;
}

export {
	CreateUser,
	ReadUser,
}
