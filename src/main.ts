import { PokeApiService } from "./services/PokeApiService.js"
import { CatalogoPokemon } from "./services/CatalogoPokemon.js"
import { PokedexController } from "./controllers/PokedexController.js"
import { iniciarMenu } from "./utils/terminalMenu.js"

async function main(): Promise<void> {
    const pokeApiService = new PokeApiService()
    const catalogo = new CatalogoPokemon()

    const controller = new PokedexController(
        pokeApiService,
        catalogo
    )

    await iniciarMenu(controller)
}

main()