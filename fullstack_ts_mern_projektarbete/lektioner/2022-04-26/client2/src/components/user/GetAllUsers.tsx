import UserService from '../../utils/api/service/UserService'
import { ReadUser } from '../../utils/interface/Users'
import Card from './cards/Card'
import css from './Container.module.css'
import { useState } from 'react'

const GetAllUsers = () => {
	const [allUsers, setAllUsers] = useState<Array<ReadUser>>([])
	
	const getAllUsers = () => {
		UserService.getAll()
			.then(res => {
				// setAllUsers(res.data)
				console.log(res.data)
			})
			.catch(error => {
				console.log(error)
			})
	}
	
	const clear = () => {
		setAllUsers([])
	}
	
	return (
		<article className={ css.container }>
			<h1>Get all users</h1>
			<button onClick={ getAllUsers }>Get Users</button>
			<button onClick={ () => setAllUsers([]) }>Clear</button>
			<button onClick={ clear }>Clear 2</button>
			<br/>
			<Card/>
		</article>
	)
}

export default GetAllUsers