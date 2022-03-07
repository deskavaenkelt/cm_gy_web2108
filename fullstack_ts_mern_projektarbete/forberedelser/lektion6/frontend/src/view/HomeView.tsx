import React from 'react'
import { PrimaryButton, SecondaryButton } from '../components/CustomButtonComponent'

const HomeView = () => {
	return (
		<>
			<h1>HomeView</h1>
			<button onClick={() => alert('Hej')}>Klicka</button>
			<br/>
			<PrimaryButton onClick={ () => console.log('You clicked on the PrimaryButton')}
						   children={'Primary Component Button'}/>
			<br/>
			<SecondaryButton onClick={ () => console.log('You clicked on the SecondaryButton')}
							 children={'Secondary Component Button'}/>
		</>
	)
}

export default HomeView
