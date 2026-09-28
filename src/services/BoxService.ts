import fs, { writeFile } from "node:fs"
import { PokemonResumo } from "../models/Pokemon.js"

export class BoxService {
    private readonly caminhoArquivo = "pc_box.json"

    listar(): PokemonResumo[] {
        const conteudo = fs.readFileSync(
            this.caminhoArquivo,
            "utf-8")
        return JSON.parse(conteudo)

    }
    salvar(pokemons: PokemonResumo[]): void {
        fs.writeFileSync(
            this.caminhoArquivo,
            JSON.stringify(pokemons, null, 2),
            "utf-8"
        )
    }
    adicionar(pokemon: PokemonResumo): void {
        const pokemons = this.listar()

        const existePokemon = pokemons.some(
            (item) => item.id === pokemon.id
        )

        if (existePokemon) {
            console.log("Este pokémon ja foi adicionado ao catálogo.")
            return
        }
        pokemons.push(pokemon)
        this.salvar(pokemons)
        console.log(`Pokémon: ${pokemon.nome.toUpperCase()}. Adicionado ao catálogo.`)
    }
    remover(id: number): void {
        const pokemons = this.listar()
        const existePokemon = pokemons.some(
            (item) => item.id === id
        )

        if (!existePokemon) {
            console.log(`Não existe no catálogo Pokémon com ID:${id}`)
            return
        }

        const pokemonAtualizado = pokemons.filter(
            (item) => item.id !== id
        )
        this.salvar(pokemonAtualizado)
        console.log(`O Pokémon com ID:${id}, foi excluído.`)
    }
}


