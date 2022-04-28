import css from './App.module.css'
import Alive from './components/Alive'

function App() {
	return (
		<>
			<h1>React App written in Typescript with CSS modules</h1>
			<Alive/>
			<div className={ css.container }>
				<div>
					<p>Get All Users</p>
					<p>Get User by id</p>
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
