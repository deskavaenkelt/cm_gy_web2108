import { useState } from 'react'
import UserService from '../../utils/api/service/UserService'
import css from './Container.module.css'
import CardList from './cards/CardList'
import { CreateOrUpdateUser, ReadUser } from '../../utils/interface/Users'

const UpdateUser = () => {
	const [user, setUser] = useState<Array<ReadUser>>([])
	const [id, setId] = useState<string>('')
	const [name, setName] = useState<string>('Adam')
	const [age, setAge] = useState<number>(29)
	const [gender, setGender] = useState<string>('Male')
	
	const updateUser = () => {
		const payload: CreateOrUpdateUser = {
			'name': name,
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
				console.log(error)
			})
	}
	return (
		<article className={ css.container }>
			<h1>Update User</h1>
			
			Id: <input type='string'
					   id='id'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			<br/>
			
			Name: <input type='text'
						 id='name'
						 value={ name }
						 onChange={ event => setName(event.target.value) }/>
			<br/>
			
			Age: <input type='number'
						id='age'
						value={ age }
						onChange={ event => setAge(Number(event.target.value)) }/>
			<br/>
			
			Gender: <input type='text'
						   id='gender'
						   value={ gender }
						   onChange={ event => setGender(event.target.value) }/>
			<br/>
			
			<button onClick={ function () {
				updateUser()
			} }>Update user
			</button>
			<button onClick={ function () {
				setUser([])
			} }>clear
			</button>
			{ user.length > 0 && user[0].message
				? <p>{ user[0].message }</p>
				: <CardList users={ user }/> }
		</article>
	)
}

export default UpdateUser
