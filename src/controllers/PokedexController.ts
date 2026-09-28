import { BoxService } from "../services/BoxService.js";
import { PokeApiService } from "../services/PokeApiService.js";
import { formatarPokemon } from "../utils/textFormatters.js";

export class PokedexController {
    constructor(
        private readonly pokeApiService: PokeApiService,
        private readonly boxService: BoxService
    ) { }

    async adicionarPokemon(nomeOuId: string | number): Promise<void> {
        const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId)

        if (!pokemon) {
            return
        }
        this.boxService.adicionar(pokemon)
    }

    listarPokemons(): void {
        const catalogoPokemons = this.boxService.listar()

        if (catalogoPokemons.length === 0) {
            console.log("Nenhum Pokémon no catálogo.")
            return
        }

        catalogoPokemons.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon))
        })
    }

    removerPokemon(id: number): void {
        this.boxService.remover(id)
    }
}