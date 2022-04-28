import css from './App.module.css'

function App() {
	return (
		<>
			<h1>React App written in Typescript with CSS modules</h1>
			<p>Alive</p>
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
