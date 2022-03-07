import { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import UsersService from '../../shared/api/service/UserService'
import { CreateUserObject, UserDataObject } from '../../shared/interface/UsersInterfaces'


function CreateUser() {
	const [userObject, setUserObject] = useState<UserDataObject>()
	const [userName, setUserName] = useState<string>('Ada')
	const [passWord, setPassWord] = useState<string>('SecretPassword')
	
	function createUsers() {
		const payload: CreateUserObject = {
			username: userName,
			password: passWord
		}
		UsersService.createUser(payload)
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
			<H1>Create User</H1>
			
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
				<Button onClick={ createUsers }>createUser</Button>
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
  background-color: pink;
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

export default CreateUser
