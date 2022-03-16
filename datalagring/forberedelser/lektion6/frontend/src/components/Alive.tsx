import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'

const debug = require('debug')('http')

function Alive() {
	const [text, setText] = useState<string>('Check if server is Alive')
	
	function alive() {
		http.get('/')
			.then(function (response) {
				debug('debug', response.data)
				console.log('console.log', response.data)
				setText(response.data)
			})
			.catch(function (error) {
				// handle error
				debug('debug', error)
				console.log('console.log', error)
				return 'Error'
			})
			.then(function () {
				// always executed
			})
	}
	
	return (
		<Article>
			<h1>Alive function</h1>
			<p>{ text }</p>
			<Button onClick={ alive }>alive</Button>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightseagreen;
`

const Button = styled.button`
  padding: 0.75em 3em;
  border-radius: 1em;
  background-color: greenyellow;
  color: blueviolet;
  border-color: blueviolet;
  
  &:hover {
    background-color: blueviolet;
    color: greenyellow;
    border-color: greenyellow;
  }
`

export default Alive
