import css from './App.module.css'
import Alive from './components/Alive'
import GetAllUsers from './components/user/GetAllUsers'
import GetUserById from './components/user/GetUserById'

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
					<p>Create user</p>
					<p>Update user</p>
					<p>Delete user</p>
				</div>
			</div>
		</>
	)
}

export default App
