import http from '../PokeApi'


const PokeService = {
	searchForPokemon: (userSearch: string) => {
		return http.get(`/${ userSearch }`)
	}
}

export default PokeService
