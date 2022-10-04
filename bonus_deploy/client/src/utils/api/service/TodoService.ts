import { ChangeTodoStatus, CreateOrUpdateTodo } from '../../interface/TodoInterfaces'
import http from '../Api'

const todos = '/todos'
const toggleTodos = '/todos/toggleCompleted'

const TodoService = {
	alive: () => {
		return http.get('/')
	},
	
	createTodo: (todo: CreateOrUpdateTodo) => {
		return http.post(todos, todo)
	},
	
	findAllTodos: () => {
		return http.get(todos)
	},
	
	findTodoById: (id: string) => {
		return http.get(`${ todos }/${ id }`)
	},
	
	updateTodo: (id: string, todo: CreateOrUpdateTodo) => {
		return http.put(`${ todos }/${ id }`, todo)
	},
	
	toggleTodoStatus: (id: string, newTodoStatus: ChangeTodoStatus) => {
		return http.put(`${ toggleTodos }/${ id }`, newTodoStatus)
	},
	
	deleteTodo: (id: string) => {
		return http.delete(`${ todos }/${ id }`)
	}
}

export default TodoService
