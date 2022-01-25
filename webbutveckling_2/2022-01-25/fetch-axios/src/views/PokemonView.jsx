import { useState } from 'react'
import PokemonService from '../shared/api/service/PokemonService'

const PokemonView = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('ditto')

    function fetchDataFromExternalApi() {
        PokemonService.searchForPokemon(search.toLowerCase())
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <div>
                <h3>name: { data.name }</h3>
                <h3>id: { data.id }</h3>
                <h3>weight: { data.weight }</h3>
                <h3>height: { data.height }</h3>
                <h3>type: { data.types[0].type.name }</h3>
            </div>
        }
    }

    return (
        <>
            <h1>PokeApi</h1>

            Search for pokemon: <input value={ search } type='search'
                                       onChange={ event => setSearch(event.target.value) }/>

            <button onClick={ () => fetchDataFromExternalApi() }>Make API call</button>
            <button onClick={ () => setData([]) }>Reset</button>
            <button onClick={ () => console.log(data) }>ShowState</button>
            { displayData() }
        </>
    )
}

export default PokemonView
