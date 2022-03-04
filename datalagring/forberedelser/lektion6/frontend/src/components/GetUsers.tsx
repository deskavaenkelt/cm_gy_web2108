import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'
import { JsonToTable } from "react-json-to-table";

interface User {
	id: number;
	name: string,
	age: number,
	gender: string,
}

function GetUsers() {
	const [allUsers, setAllUsers] = useState<Array<User>>()
	
	function getUsers() {
		http.get<User[]>('/users')
			.then(function (response) {
				console.log(response.data)
				setAllUsers(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>GetUsers function</h1>
			<button onClick={ getUsers }>getUsers</button>
			<button onClick={ () => {setAllUsers([])} }>clear</button>
			<JsonToTable json={allUsers}/>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: cornflowerblue;
`

export default GetUsers
