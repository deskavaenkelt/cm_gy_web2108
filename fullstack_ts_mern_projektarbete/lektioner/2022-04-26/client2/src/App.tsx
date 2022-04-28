import css from './App.module.css'
import Alive from './components/Alive'
import CreateUser from './components/user/CreateUser'
import GetAllUsers from './components/user/GetAllUsers'
import GetUserById from './components/user/GetUserById'
import UpdateUser from './components/user/UpdateUser'

function App() {
	return (
		<>
			<h1>React App written in Typescript with CSS modules</h1>
			<Alive/>
			<div className={ css.container }>
				<div>
					<GetAllUsers/>
					<GetUserById/>
				</div>
				<div>
					<CreateUser/>
					<UpdateUser/>
					<p>Delete user</p>
				</div>
			</div>
		</>
	)
}

export default App
