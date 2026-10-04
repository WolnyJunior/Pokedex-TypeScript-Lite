import { PokedexController } from "./controllers/PokedexController.js"
import { BoxService } from "./services/BoxService.js"
import { PokeApiService } from "./services/PokeApiService.js"
import { iniciarMenu } from "./utils/terminalMenu.js"

async function main(): Promise<void> {
    const pokeApiService = new PokeApiService()
    const boxService = new BoxService()

    const controller = new PokedexController(
        pokeApiService,
        boxService
    )

    await iniciarMenu(controller)
}

main()