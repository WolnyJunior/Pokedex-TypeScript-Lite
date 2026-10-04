import fs from "node:fs"
import { LocalBoxError } from "../models/CustomErrors.js"
import { PokemonResumo } from "../models/Pokemon.js"

export class BoxService {
    private readonly caminhoArquivo = "pc_box.json"

    listar(): PokemonResumo[] {
        try {
            const conteudo = fs.readFileSync(
                this.caminhoArquivo,
                "utf-8")
            return JSON.parse(conteudo)

        } catch (error) {
            throw new LocalBoxError("Não foi possível acessar a Pokédex.")
        }
    }
    salvar(pokemons: PokemonResumo[]): void {
        try {
            fs.writeFileSync(
                this.caminhoArquivo,
                JSON.stringify(pokemons, null, 2),
                "utf-8"
            )

        } catch (error) {
            throw new LocalBoxError("Não foi possível salvar a Pokédex")
        }

    }
    adicionar(pokemon: PokemonResumo): void {
        const pokemons = this.listar()

        const existePokemon = pokemons.some(
            (item) => item.id === pokemon.id
        )

        if (existePokemon) {
            throw new LocalBoxError("Este pokémon ja foi adicionado ao catálogo.")
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
            throw new LocalBoxError(`Não existe no catálogo Pokémon com ID:${id}`)
        }

        const pokemonAtualizado = pokemons.filter(
            (item) => item.id !== id
        )
        this.salvar(pokemonAtualizado)
        console.log(`O Pokémon com ID:${id}, foi excluído.`)
    }
}


