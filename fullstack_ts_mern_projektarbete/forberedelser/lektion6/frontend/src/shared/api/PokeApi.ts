import Axios from 'axios'

const PokeApi = Axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default PokeApi
