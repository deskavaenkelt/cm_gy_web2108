import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import { CreateOrUpdateUser, ReadUser } from '../../utils/interface/Users'
import CardList from './cards/CardList'
import css from './Container.module.css'

const UpdateUser = () => {
	const [user, setUser] = useState<Array<ReadUser>>([])
	const [id, setId] = useState<string>('')
	const [name, setName] = useState<string>('Aram')
	const [age, setAge] = useState<number>(19)
	const [gender, setGender] = useState<string>('Male')
	
	const updateUser = () => {
		const payload: CreateOrUpdateUser = {
			name: name,
			'age': age,
			'gender': gender
		}
		UserService.updateUserById(id, payload)
			.then(response => {
				const dataArray = []
				dataArray.push(response.data)
				console.log(dataArray)
				setUser(dataArray)
			})
			.catch(error => {
				console.error(error)
			})
	}
	
	return (
		<article className={ css.container }>
			<h1>UpdateUser</h1>
			Id: <input type='text'
						 id='id'
						 value={ id }
						 onChange={ event => setId(event.target.value) }/>
			<br/>
			
			Name: <input type='text'
						 id='name'
						 value={ name }
						 onChange={ event => setName(event.target.value) }/>
			<br/>
			
			Age: <input type='text'
						id='age'
						value={ age }
						onChange={ event => setAge(Number(event.target.value)) }/>
			<br/>
			
			Gender: <input type='text'
						   id='gender'
						   value={ gender }
						   onChange={ event => setGender(event.target.value) }/>
			<br/>
			
			<button onClick={ updateUser }>Update User</button>
			<button onClick={ () => setUser([]) }>Clear</button>
			
			{ user.length > 0 && user[0].message ? <p>{ user[0].message }</p> : '' }
			
			{ user.length > 0 && !user[0].message
				? <CardList users={ user }/> : '' }
		</article>
	)
}

export default UpdateUser
