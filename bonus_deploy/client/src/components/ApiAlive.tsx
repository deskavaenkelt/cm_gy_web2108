import { useEffect, useState } from 'react'
import { FcApproval, FcCancel } from 'react-icons/fc'
import TodoService from '../utils/api/service/TodoService'
import styles from './ApiAlive.module.css'
import cardStyles from './todo/Card.module.css'

const ApiAlive = () => {
	const [text, setText] = useState('')
	const [dbConnection, setDbConnection] = useState(false)
	
	function alive() {
		TodoService.alive()
			.then(function (response) {
				setDbConnection(response.data === 'API is Alive with TypeScript!')
			})
			.catch(function (error) {
				console.log(error)
				setText('Connection to API failed!')
			})
	}
	
	useEffect(() => {
		alive()
	}, [])
	
	return (
		<div className={ styles.dbResponse }>
			Database Connection {
			dbConnection
				? <FcApproval className={ cardStyles.icon }/>
				: <FcCancel className={ cardStyles.icon }/> }
			<br/>{ text }
		</div>
	)
}

export default ApiAlive

