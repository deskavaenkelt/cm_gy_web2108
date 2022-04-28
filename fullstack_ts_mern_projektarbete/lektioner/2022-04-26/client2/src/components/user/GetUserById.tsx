import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import { ReadUser } from '../../utils/interface/Users'
import CardList from './cards/CardList'
import css from './Container.module.css'

const GetUserById = () => {
	const [oneUser, setOneUser] = useState<Array<ReadUser>>([])
	const [id, setId] = useState<string>('')
	
	const getUserById = () => {
		UserService.getById(id)
			.then(response => {
				const dataArray = []
				dataArray.push(response.data)
				console.log(dataArray)
				setOneUser(dataArray)
			})
			.catch(err => {
				console.log(err)
			})
	}
	
	return (
		<article className={ css.container }>
			<h1>Get user by id</h1>
			Id: <input type='text'
					   id='id'
					   value={ id }
					   onChange={ event => setId(event.target.value)}/>
			
			<button onClick={ getUserById }>getUser</button>
			
			<button onClick={ () => {
				setOneUser([])
				setId('')
			} }>clear</button>
			
			<br/>
			
			{ oneUser.length > 0 && oneUser[0].message ? <p>{ oneUser[0].message }</p> : '' }
			
			{ oneUser.length > 0 && !oneUser[0].message
				? <CardList users={ oneUser }/> : '' }
		</article>
	)
}

export default GetUserById
