import React, { useEffect, useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../components/CustomButtonComponent'

const CounterView = () => {
	const [count, setCount] = useState<number>(0)
	
	useEffect(() => {
		console.log('Component is being rendered in DOM')
		
		return () => {
			console.log('--== Component is being removed from DOM ==--')
		}
	}, [count])
	
	return (
		<>
			<h1>CounterView</h1>
			<h1>{ count }</h1>
			<PrimaryButton onClick={ () => setCount(count + 1) } children={ 'Increment by 1' }/>
			<SecondaryButton onClick={ () => setCount(count - 1) } children={ 'Decrement by 1' }/>
		</>
	)
}

export default CounterView
