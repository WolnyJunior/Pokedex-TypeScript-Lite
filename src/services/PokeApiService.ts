import {
    PokemonResumo,
    PokemonApiResposta
} from "../models/Pokemon.js"
import { ApiError } from "../models/CustomErrors.js"

export class PokeApiService {

    async buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
            const resposta = await fetch(url)

            if (!resposta.ok) {
                throw new ApiError(`Não foi encontrado Pokémon com esse Nome/Id: ${nomeOuId}`)
            }

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
            if (error instanceof ApiError) {
                throw error
            }

            throw new ApiError("Não foi possível buscar Pokémon.")
        }
    }
}
