import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import css from './Container.module.css'

const DeleteUser = () => {
	const [text, setText] = useState<string>('')
	const [id, setId] = useState<string>('')
	
	const deleteUserById = () => {
		UserService.deleteUserById(id)
			.then(res => {
				setText(res.data.message)
			})
			.catch(err => {
				console.error(err.message)
			})
	}
	
	return (
		<article className={ css.container }>
			<h1>Delete user</h1>
			Id: <input type='text'
					   id='id'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			<br/>
			
			<button onClick={ deleteUserById }>Delete user</button>
			<button onClick={ () => {
				setText('')
				setId('')
			} }>Clear
			</button>
			
			<p>{ text }</p>
		</article>
	)
}

export default DeleteUser
