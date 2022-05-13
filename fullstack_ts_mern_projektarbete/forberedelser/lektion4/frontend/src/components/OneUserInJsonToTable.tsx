import styled from 'styled-components'
import { UserDataObject, UserDataObjectWithDate } from '../utils/interfaces/UserData'

export default function OneUserInJsonToTable(props: Array<UserDataObject>) {
	const oneUser: UserDataObjectWithDate = {
		_id: '6183cf6bc1b80a97972358da',
		username: 'Ada',
		password: 'SecretPassword',
		createdAt: new Date('2021-11-04T12:17:47.062Z'),
		updatedAt: new Date('2021-11-04T12:17:47.062Z')
	}
	
	const myArray = [oneUser, oneUser, oneUser]
	
	
	function generateOneEntry(userObject: UserDataObjectWithDate) {
		const dt = userObject.createdAt.toISOString().split('T')
		const date = dt[0]
		const time = dt[1].split('.')[0]
		
		return (
			<Tr key={userObject._id}>
				<Td>{ userObject._id }</Td>
				<Td>{ userObject.username }</Td>
				<Td>{ userObject.password }</Td>
				<Td>{ date + ' - ' + time }</Td>
			</Tr>
		)
	}
	
	function generateEntriesFromArray(users: Array<UserDataObjectWithDate>) {
		let tableContent = []
		for (const user of users) {
			tableContent.push(generateOneEntry(user))
		}
		return tableContent
	}
	
	return (
		<Article>
			<h1>JsonToTable</h1>
			<Table>
				<thead>
				<Tr>
					<Th id='id'>ID</Th>
					<Th id='username'>Username</Th>
					<Th id='password'>Password</Th>
					<Th id='createdAt'>Created At</Th>
				</Tr>
				</thead>
				<tbody>
				{ generateEntriesFromArray(myArray) }
				</tbody>
			</Table>
		</Article>
	)
}

const Article = styled.article`
  margin: 0 1em 1em 1em;
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightcoral;
`

const Table = styled.table`
  border-collapse: collapse;
  widTh: 100%;
`

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5em;
`

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5em;
`

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: salmon;
  }
`
