import axios from 'axios'
import { JsonToTable } from 'react-json-to-table'
import { useState } from 'react'

const PokeView = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('ditto')
    const [showTable, setShowTable] = useState(false)

    function fetchDataFromExternalApi() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${ search.toLowerCase() }`)
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

    function displayTable() {
        if (data.length !== 0 && showTable) {
            return <JsonToTable json={ data }/>
        }
    }

    return (
        <>
            <h1>PokeApi</h1>

            Search for pokemon: <input value={search} type='search' onChange={ event => setSearch(event.target.value) }/>

            <button onClick={ () => fetchDataFromExternalApi() }>Make API call</button>
            <button onClick={ () => setData([]) }>Reset</button>
            <button onClick={ () => console.log(data) }>ShowState</button>
            {/*<h3>{ search }</h3>*/}
            { displayData() }
            <button onClick={() => setShowTable(!showTable)}>Toggle table on/off</button>
            { displayTable() }
        </>
    )
}

export default PokeView
