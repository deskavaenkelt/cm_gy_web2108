import { useState } from 'react'
import styled from 'styled-components'
import UsersService from '../../shared/api/service/UserService'

function DeleteUser() {
	const [text, setText] = useState<string>('')
	const [id, setId] = useState<string>('')
	
	function deleteUser() {
		UsersService.deleteUserById(id)
			.then(function (response) {
				console.log(response.data)
				setText(response.data.message)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<H1>Delete User</H1>
			
			<div>
				Id:
				<Input type='text'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			</div>
			
			<div>
				<Button onClick={ deleteUser }>deleteUser</Button>
				<Button onClick={ () => setText('') }>clear</Button>
			</div>
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

export default DeleteUser
