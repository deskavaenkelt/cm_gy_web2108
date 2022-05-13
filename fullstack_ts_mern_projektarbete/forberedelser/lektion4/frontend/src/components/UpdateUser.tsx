import { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'
import { CreateUserObject, UserDataObject } from '../utils/interfaces/UserData'


function UpdateUser() {
	const [userObject, setUserObject] = useState<UserDataObject>()
	const [id, setId] = useState<string>('')
	const [userName, setUserName] = useState<string>('Ada')
	const [passWord, setPassWord] = useState<string>('NewSecretPassword')
	
	function updateUser() {
		const payload: CreateUserObject = {
			username: userName,
			password: passWord,
		}
		http.put(`/users/${ id }`, payload)
			.then(function (response) {
				console.log(response.data)
				setUserObject(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<H1>Update User</H1>
			
			<div>
				Id:
				<Input type='text'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			</div>
			
			<div>
				Username:
				<Input type='text'
					   value={ userName }
					   onChange={ event => setUserName(event.target.value) }/>
			</div>
			
			<div>
				Password:
				<Input type='password'
					   value={ passWord }
					   onChange={ event => setPassWord(event.target.value) }/>
			</div>
			
			<div>
				<Button onClick={ updateUser }>updateUser</Button>
				<Button onClick={ () => setUserObject(undefined) }>clear</Button>
			</div>
			<JsonToTable json={ userObject }/>
		</Article>
	)
}


const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: hotpink;
`

const H1 = styled.h1`
  font-size: 2em;
`

const Input = styled.input`
  width: 200px;
  margin-bottom: 1em;
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

export default UpdateUser
