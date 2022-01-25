import http from '../PokemonAPI'

const searchForPokemon = (userSearch) => {
    return http.get(`/${ userSearch }`)
}

export default {
    searchForPokemon
}
