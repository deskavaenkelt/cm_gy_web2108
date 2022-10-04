import { FC, useState } from 'react'
import { FcPlus } from 'react-icons/fc'
import TodoService from '../../utils/api/service/TodoService'
import { CreateOrUpdateTodo } from '../../utils/interface/TodoInterfaces'
import cardStyles from './Card.module.css'

interface Props {
	getAllTodos: () => void
}

const NewTask: FC<Props> = ({getAllTodos}) => {
	const [title, setTitle] = useState<string>('Do Something')
	const [assignedTo, setAssignedTo] = useState<string>('Me')
	const [createMessage, setCreateMessage] = useState<string>('')
	
	function createTodo() {
		const newTodo: CreateOrUpdateTodo = {
			title: title,
			assignedTo: assignedTo
		}
		
		TodoService.createTodo(newTodo)
			.then((response) => {
				if (response.status === 201) {
					setCreateMessage('Todo created successfully')
					getAllTodos()
				} else {
					setCreateMessage('Todo creation failed')
				}
			})
			.catch(err => {
				console.log(err)
			})
	}
	
	return (
		<div>
			<h1>NewTask</h1>
			Todo: <input type='text'
						 value={ title }
						 onChange={ event => setTitle(event.target.value) }/>
			Assigned To: <input type='text'
								value={ assignedTo }
								onChange={ event => setAssignedTo(event.target.value) }/>
			<FcPlus className={ cardStyles.icon } onClick={ createTodo }/>
			{ createMessage }
		</div>
	)
}

export default NewTask
