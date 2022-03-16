import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'

interface User {
	name: string,
	age: number,
	gender: string,
}

function CreateUser() {
	const [text, setText] = useState<string>('')
	const [name, setName] = useState<string>('Ada')
	const [age, setAge] = useState<number>(18)
	const [gender, setGender] = useState<string>('Female')
	
	function createUser() {
		const payload:User = {
			'name': name,
			'age': age,
			'gender': gender
		}
		http.post('/users', payload)
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
			<h1>Skapa en användare</h1>
			
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
				createUser()
			} }>Create user
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
  background-color: pink;
`

export default CreateUser
