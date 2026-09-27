import {
    PokemonResumo,
    PokemonApiResposta
} from "../models/Pokemon.js"

export class PokeApiService {

    async buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
            const resposta = await fetch(url)

            if (!resposta.ok) {
                console.log(`Não foi encontrado Pokémon com esse Nome/Id: ${nomeOuId}`)
                return null
            }

            console.log(resposta.status)

            const dadosPokemon: PokemonApiResposta = await resposta.json()
            const pokemon: PokemonResumo = {
                id: dadosPokemon.id,
                nome: dadosPokemon.name,
                tipos: dadosPokemon.types.map((item) => item.type.name),
                altura: dadosPokemon.height,
                peso: dadosPokemon.weight
            }

            return pokemon
        } catch (error) {
            console.log("Não foi possível buscar Pokémon.")
            return null
        }
    }
}
