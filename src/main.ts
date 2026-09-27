import { PokeApiService } from "./services/PokeApiService.js"
import { Catalogopokemon } from "./services/CatalogoPokemon.js"
import { PokemonResumo } from "./models/Pokemon.js"

const catalogo = new Catalogopokemon()
const fazerBusca = new PokeApiService()

const meowth: PokemonResumo = {
    id: 52,
    nome: "Meowth",
    tipos: ["normal"],
    altura: 4,
    peso: 42
}
const pikachu: PokemonResumo = {
    id: 25,
    nome: "pikachu",
    tipos: ["eletric"],
    altura: 4,
    peso: 60
}


// fazerBusca.buscarPokemon("pikachus")
//     .then((pokemon) => {
//         console.log(pokemon)
//     })

catalogo.adicionar(pikachu)
catalogo.adicionar(pikachu)
catalogo.adicionar(meowth)
console.log(catalogo.listar())
catalogo.remover(52)
console.log(catalogo.listar())
