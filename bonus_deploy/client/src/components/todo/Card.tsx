import { FC, useState } from 'react'
import { FcCancel, FcCheckmark } from 'react-icons/fc'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import TodoService from '../../utils/api/service/TodoService'
import { ChangeTodoStatus, CreateOrUpdateTodo, ReadTodo } from '../../utils/interface/TodoInterfaces'
import styles from './Card.module.css'

interface Props {
	todo: ReadTodo,
	// setTodos: (todos: ReadTodo[]) => void
	getAllTodos: () => void
}

const Card: FC<Props> = ({todo, getAllTodos}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [updatedTitle, setUpdatedTitle] = useState(todo.title)
	const [updatedAssignedTo, setUpdatedAssignedTo] = useState(todo.assignedTo)
	
	function deleteTodo() {
		TodoService.deleteTodo(todo._id).then(() => {
			getAllTodos()
		})
	}
	
	function toggleTodo() {
		const payload: ChangeTodoStatus = {
			newTodoStatus: !todo.completed
		}
		TodoService.toggleTodoStatus(todo._id, payload).then(() => {
			getAllTodos()
		})
	}
	
	function updateTodo() {
		const payload: CreateOrUpdateTodo = {
			title: updatedTitle,
			assignedTo: updatedAssignedTo
		}
		TodoService.updateTodo(todo._id, payload).then(() => {
			getAllTodos()
			setIsEditing(!isEditing)
		})
	}
	
	function editMode() {
		return (
			<>
				<FcCheckmark className={ styles.icon } onClick={ updateTodo }/>
				<FcCancel className={ styles.icon } onClick={ () => setIsEditing(!isEditing) }/>
			</>
		)
	}
	
	return (
		<article className={ styles.card }>
			<div className={ styles.grid }>
				<span className={ styles.itemCenter }>
					<MdDeleteForever className={ styles.icon } onClick={ deleteTodo }/>
				</span>
				<span className={ styles.itemCenter }>
					{ !isEditing
						? todo.title
						: <input type='text' value={ updatedTitle } onChange={ e => setUpdatedTitle(e.target.value) }/>
					}
				</span>
				<span className={ styles.itemCenter }>
					{ !isEditing
						? todo.assignedTo
						: <input type='text' value={ updatedAssignedTo }
								 onChange={ e => setUpdatedAssignedTo(e.target.value) }/>
					}
				</span>
				<span className={ styles.itemCenter }>
					{ !isEditing
						? <MdModeEdit className={ styles.icon } onClick={ () => setIsEditing(!isEditing) }/>
						: editMode()
					}
					
				</span>
				<span className={ styles.itemCenter }>
				{ todo.completed
					? <RiCheckboxCircleFill className={ styles.icon } onClick={ toggleTodo }/>
					: <RiCheckboxBlankCircleLine className={ styles.icon } onClick={ toggleTodo }/> }
				</span>
			</div>
		</article>
	)
}

export default Card
