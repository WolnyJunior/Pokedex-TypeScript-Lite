import {
    PokemonResumo,
    PokemonApiResposta
} from "../models/Pokemon.js"

export class PokeApiService {
    async buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
        const resposta = await fetch(url)
        if (!resposta.ok) {
            console.log(`Não foi encontrado Pokémon com esse Nome/Id: ${nomeOuId}`)
            return null
        }
        console.log(resposta.status)
        return null
    }
}
