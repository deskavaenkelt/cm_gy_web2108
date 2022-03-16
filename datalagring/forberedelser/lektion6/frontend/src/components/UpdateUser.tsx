import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'

interface User {
	id: number;
	name: string,
	age: number,
	gender: string,
}

function UpdateUser() {
	const [text, setText] = useState<string>('')
	const [id, setId] = useState<number>(14)
	const [name, setName] = useState<string>('Ada')
	const [age, setAge] = useState<number>(19)
	const [gender, setGender] = useState<string>('Female')
	
	function updateUser() {
		const payload: User = {
			'id': id,
			'name': name,
			'age': age,
			'gender': gender
		}
		console.log(payload)
		http.put('/users', payload)
			.then(function (response) {
				console.log(response.data)
				setText(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>Uppdatera en användare</h1>
			
			Id: <input type='number'
					   id='id'
					   value={ id }
					   onChange={ event => setId(Number(event.target.value)) }/>
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
				setText('')
			} }>clear
			</button>
			<p>{ text }</p>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: hotpink;
`

export default UpdateUser
