import promptSync from "prompt-sync"
import { PokedexController } from "../controllers/PokedexController.js"

const prompt = promptSync()

export async function iniciarMenu(
    controller: PokedexController
): Promise<void> {
    let executando = true
    while (executando) {
        console.log(`
        ======================
             MENU POKÉDEX 
        ======================
        1 - Adicionar Pokémon
        2 - Listar Pokémon
        3 - Remover Pokémon
        0 - Sair
        ======================
            `)

        const opcao = prompt("Escolha uma opção:")

        switch (opcao.trim()) {
            case "1": {
                const nomeOuId = prompt("Digite o nome ou ID do Pokémon:")
                await controller.adicionarPokemon(nomeOuId.trim())
                break
            }
            case "2":
                controller.listarPokemons()
                break
            case "3": {
                const id = prompt("Digite o ID do Pokémon para remover do catálogo.")
                const idNumerico = Number(id)
                if (Number.isNaN(idNumerico)) {
                    console.log(("ID inválido, digite um número inteiro:"))
                    break
                }
                controller.removerPokemon(idNumerico)
                break
            }
            case "0":
                executando = false
                console.log(("Encerrando Pokédex."))
                break

            default:
                console.log("Opção inválida.")
                continue
        }
    }
}