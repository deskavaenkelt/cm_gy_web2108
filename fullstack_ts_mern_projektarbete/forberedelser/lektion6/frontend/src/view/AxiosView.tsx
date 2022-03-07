import React, { useState } from 'react'
import PokemonService from '../shared/api/service/PokemonService'

const AxiosView = () => {
	interface Data {
		name: string
		id: number
		weight: number
	}
	
	const [search, setSearch] = useState<string>('ditto')
	const [data, setData] = useState<Data>()
	
	const fetchDataFromExternalAPI = () => {
		PokemonService.searchForPokemon(search.toLowerCase())
			.then((response) => {
				setData(response.data)
			})
			.catch((error) => console.log(error))
	}
	
	const displayData = () => {
		if (data) {
			return (
				<>
					<h3>name: { data.name }</h3>
					<h3>id: { data.id }</h3>
					<h3>weight: { data.weight }</h3>
				</>
			)
		}
	}
	
	return (
		<>
			<h1>Axios View</h1>
			<input type='text' value={ search } onChange={ event => setSearch(event.target.value)}/>
			<button onClick={ fetchDataFromExternalAPI }>Make API call</button>
			<button onClick={() => console.log(data)}>Console log data</button>
			{displayData()}
		</>
	)
}

export default AxiosView
