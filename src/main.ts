import { PokeApiService } from "./services/PokeApiService.js"

const fazerBusca = new PokeApiService()

fazerBusca.buscarPokemon("pikachus")