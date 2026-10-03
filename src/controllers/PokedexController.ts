import { ApiError, LocalBoxError } from "../models/CustomErrors.js";
import { BoxService } from "../services/BoxService.js";
import { PokeApiService } from "../services/PokeApiService.js";
import { formatarPokemon } from "../utils/textFormatters.js";

export class PokedexController {
    constructor(
        private readonly pokeApiService: PokeApiService,
        private readonly boxService: BoxService
    ) { }

    async adicionarPokemon(nomeOuId: string | number): Promise<void> {
        try {
            const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId)

            if (!pokemon) {
                return
            }

            this.boxService.adicionar(pokemon)

        } catch (error) {
            if (error instanceof ApiError || error instanceof LocalBoxError) {
                console.log(`[ERRO] ${error.message}`)
                return
            }
            console.log("[ERRO] Ocorreu um erro inesperado.")
        }
    }

    listarPokemons(): void {
        try {
            const catalogoPokemons = this.boxService.listar()

            if (catalogoPokemons.length === 0) {
                console.log("Nenhum Pokémon no catálogo.")
                return
            }

            catalogoPokemons.forEach((pokemon) => {
                console.log(formatarPokemon(pokemon))
            })

        } catch (error) {
            if (error instanceof LocalBoxError) {
                console.log(`[ERRO] ${error.message}`)
                return
            }
            console.log("[ERRO] Ocorreu um erro inesperado.")
        }

    }

    removerPokemon(id: number): void {
        try {
            this.boxService.remover(id)
            console.log(("[SUCESSO] O Pokémon foi removido deste catálogo."))
        } catch (error) {
            if (error instanceof LocalBoxError) {
                console.log(`[ERRO] ${error.message}`)
                return
            }
            console.log("[ERRO] Ocorreu um erro ao tentar excluir Pokémon.")
        }
    }
}