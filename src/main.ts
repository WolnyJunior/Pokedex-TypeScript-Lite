import { PokeApiService } from "./services/PokeApiService.js"

const fazerBusca = new PokeApiService()

fazerBusca.buscarPokemon("pikachus")
    .then((pokemon) => {
        console.log(pokemon)
    })