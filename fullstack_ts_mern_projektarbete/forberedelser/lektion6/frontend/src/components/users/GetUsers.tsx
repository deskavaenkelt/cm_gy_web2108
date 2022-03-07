import { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import UserService from '../../shared/api/service/UserService'
import { UserDataObject } from '../../shared/interface/UsersInterfaces'

function GetUsers() {
	const initialState: Array<UserDataObject> = []
	const [allUsersInDatabase, setAllUsersInDatabase] = useState<Array<UserDataObject>>(initialState)
	
	function getUsers() {
		UserService.getAllUsers()
			.then(function (response) {
				console.log(response.data)
				setAllUsersInDatabase(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<H1>Get users</H1>
			<h2>From database</h2>
			<Button onClick={ getUsers }>getUsers</Button>
			<Button onClick={ () => setAllUsersInDatabase(initialState) }>clear</Button>
			<JsonToTable json={ allUsersInDatabase }/>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: cornflowerblue;
`

const H1 = styled.h1`
  font-size: 2em;
`

const Button = styled.button`
  padding: 0.75em 3em;
  border-radius: 1em;
  background-color: greenyellow;
  color: blueviolet;
  border-color: blueviolet;
  margin-right: 1em;

  &:hover {
    background-color: blueviolet;
    color: greenyellow;
    border-color: greenyellow;
  }
`

export default GetUsers
