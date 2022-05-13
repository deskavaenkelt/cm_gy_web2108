import React from 'react'
import styled from 'styled-components'
import Alive from './components/Alive'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import GetUsers from './components/GetUsers'
import GetUsersById from './components/GetUsersById'
import OneUserInJsonToTable from './components/OneUserInJsonToTable'
import UpdateUser from './components/UpdateUser'

function App() {
	return (
		<Wrapper>
			<SectionTwoColumns>
				<Article>
					<H1>React with TS</H1>
				</Article>
				<Alive/>
			</SectionTwoColumns>
			<SectionTwoColumns>
				<GetUsers/>
				<GetUsersById/>
			</SectionTwoColumns>
			<SectionThreeColumns>
				<CreateUser/>
				<UpdateUser/>
				<DeleteUser/>
			</SectionThreeColumns>
			<OneUserInJsonToTable/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  background-color: #7F7F85;
`

const H1 = styled.h1`
  font-size: 3em;
`

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  text-align: center;
  background-color: greenyellow;
`

const SectionTwoColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  padding: 0 1em 1em 1em;

  &:first-child {
    padding-top: 1em;
  }
`

const SectionThreeColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  padding: 0 1em 1em 1em;
`

export default App
