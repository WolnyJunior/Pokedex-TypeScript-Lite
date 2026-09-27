import { CatalogoPokemon } from "../services/CatalogoPokemon.js";
import { PokeApiService } from "../services/PokeApiService.js";
import { formatarPokemon } from "../utils/textFormatters.js";

export class PokedexController {
    constructor(
        private readonly pokeApiService: PokeApiService,
        private readonly catalogo: CatalogoPokemon
    ) { }

    async adicionarPokemon(nomeOuId: string | number): Promise<void> {
        const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId)

        if (!pokemon) {
            return
        }
        this.catalogo.adicionar(pokemon)
    }

    listarPokemons(): void {
        const catalogoPokemons = this.catalogo.listar()

        if (catalogoPokemons.length === 0) {
            console.log("Nenhum Pokémon no catálogo.")
            return
        }
        
        catalogoPokemons.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon))
        })
    }

    removerPokemon(id: number): void {
        this.catalogo.remover(id)
    }
}