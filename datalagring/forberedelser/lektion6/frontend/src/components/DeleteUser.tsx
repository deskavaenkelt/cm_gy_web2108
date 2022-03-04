import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'

function DeleteUser() {
	const [text, setText] = useState<string>('')
	const [id, setId] = useState<number>(14)
	
	function deleteUserById() {
		http.delete(`/users/${ id }`)
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
			<h1>Radera en användare</h1>
			
			Id: <input type='number'
					   id='id'
					   value={ id }
					   onChange={ event => setId(Number(event.target.value)) }/>
			<br/>
			
			<button onClick={ function () {
				deleteUserById()
			} }>Delete user
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
  background-color: deeppink;
`

export default DeleteUser
