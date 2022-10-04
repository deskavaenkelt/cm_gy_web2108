import Chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'
import { ReadTodo } from '../utils/interface/Todos'
import StatusCode from '../utils/StatusCode'

Chai.use(chaiHttp)
const expect = Chai.expect

const todo = {
	title: 'Test Todo',
	assignedTo: 'Test Someone'
}

let createdTodo: ReadTodo

const updatedTodo = {
	title: 'Test Todo updated',
	assignedTo: 'Test Someone updated'
}

const toggleCompletedToTrue = {
	newTodoStatus: true
}

const createTodo = () => {
	describe('Create Todo', () => {
		it('should create a todo', () => {
			return Chai.request(app)
				.post('/todos')
				.send(todo)
				.then((response) => {
					expect(response).to.have.status(StatusCode.CREATED)
					expect(response.body).to.have.property('title')
					expect(response.body).to.have.property('assignedTo')
					expect(response.body).to.have.property('completed')
					expect(response.body).to.have.property('_id')
					createdTodo = response.body
					expect(response.body.title).to.be.equal(todo.title)
					expect(response.body.assignedTo).to.be.equal(todo.assignedTo)
					expect(response.body.completed).to.be.equal(false)
				})
		})
	})
}

const findAllTodos = () => {
	describe('Find All Todos', () => {
		it('should find all todos', () => {
			return Chai.request(app)
				.get('/todos')
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('array')
					expect(response.body[response.body.length - 1]).to.have.property('title')
					expect(response.body[response.body.length - 1]).to.have.property('assignedTo')
					expect(response.body[response.body.length - 1]).to.have.property('completed')
					expect(response.body[response.body.length - 1]).to.have.property('_id')
					expect(response.body[response.body.length - 1].title).to.be.equal(todo.title)
					expect(response.body[response.body.length - 1].assignedTo).to.be.equal(todo.assignedTo)
					expect(response.body[response.body.length - 1].completed).to.be.equal(false)
				})
		})
	})
}

const findTodoById = () => {
	describe('Find Todo By Id', () => {
		it('should find a todo by id', () => {
			return Chai.request(app)
				.get(`/todos/${ createdTodo._id }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('title')
					expect(response.body).to.have.property('assignedTo')
					expect(response.body).to.have.property('completed')
					expect(response.body).to.have.property('_id')
					expect(response.body.title).to.be.equal(todo.title)
					expect(response.body.assignedTo).to.be.equal(todo.assignedTo)
					expect(response.body.completed).to.be.equal(false)
				})
		})
	})
}

const updateTodo = () => {
	describe('Update Todo', () => {
		it('should update a todo', () => {
			return Chai.request(app)
				.put(`/todos/${ createdTodo._id }`)
				.send(updatedTodo)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('title')
					expect(response.body).to.have.property('assignedTo')
					expect(response.body).to.have.property('completed')
					expect(response.body).to.have.property('_id')
					expect(response.body.title).to.be.equal(updatedTodo.title)
					expect(response.body.assignedTo).to.be.equal(updatedTodo.assignedTo)
					expect(response.body.completed).to.be.equal(false)
				})
		})
	})
}

const toggleTodoStatus = () => {
	describe('Set Todo Completed State', () => {
		it('should set a todo completed state', () => {
			return Chai.request(app)
				.put(`/todos/toggleCompleted/${ createdTodo._id }`)
				.send(toggleCompletedToTrue)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('title')
					expect(response.body).to.have.property('assignedTo')
					expect(response.body).to.have.property('completed')
					expect(response.body).to.have.property('_id')
					expect(response.body.title).to.be.equal(updatedTodo.title)
					expect(response.body.assignedTo).to.be.equal(updatedTodo.assignedTo)
					expect(response.body.completed).to.be.equal(true)
				})
		})
	})
}

const deleteTodo = () => {
	describe('Delete Todo', () => {
		it('should delete a todo', () => {
			return Chai.request(app)
				.delete(`/todos/${ createdTodo._id }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('title')
					expect(response.body).to.have.property('assignedTo')
					expect(response.body).to.have.property('completed')
					expect(response.body).to.have.property('_id')
					expect(response.body.title).to.be.equal(updatedTodo.title)
					expect(response.body.assignedTo).to.be.equal(updatedTodo.assignedTo)
				})
		})
	})
}

describe('TESTING THE TODO API ROUTE', () => {
	createTodo()
	findAllTodos()
	findTodoById()
	updateTodo()
	toggleTodoStatus()
	deleteTodo()
})
