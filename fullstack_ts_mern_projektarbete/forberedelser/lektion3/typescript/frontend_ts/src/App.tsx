import React, { useState } from 'react'
import styled from 'styled-components'
import MyComponent from './components/MyComponent'

function App() {
	const [text, setText] = useState<string>('Hej')
	
	return (
		<section>
			<Article>
				<H1>Vår react app</H1>
				<p>TypeScript</p>
				<MyComponent/>
				<H1>{text}</H1>
				<Button onClick={() => {setText('Tjabba!')}}>my button</Button>
				<Button onClick={() => {setText('Vad gulligt!')}}>Emilies button</Button>
			</Article>
		</section>
	)
}

const Article = styled.article`
  padding: 2em;
  border: 1px solid black;
`

const H1 = styled.h1`
  font-size: 2em;
  color: purple;
`

const Button = styled.button`
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: orange;
  border-radius: 0.5em;
  border: none;
  box-shadow: 0.4em 0.4em 0.4em cornflowerblue;
  
  &:hover, :focus {
	color: orange;
	background-color: black;
  }
`

export default App
