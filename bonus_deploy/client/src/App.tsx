import React from 'react'
import styles from './App.module.css'
import ApiAlive from './components/ApiAlive'
import CardList from './components/todo/CardList'

function App() {
	return (
		<>
			<ApiAlive/>
			<div className={ styles.gridContainer }>
				<span/>
				<CardList/>
				<span/>
			</div>
		
		</>
	)
}

export default App
