import { PokemonResumo } from "../models/Pokemon.js";

export class CatalogoPokemon {
    private catalogo: PokemonResumo[] = []

    adicionar(pokemon: PokemonResumo): void {
        //some: para verificar se já existe ID no catálogo.
        const existePokemon = this.catalogo.some(
            (item) => item.id === pokemon.id
        )
        if (existePokemon) {
            console.log("Este pokémon ja foi adicionado ao catálogo.")
            return
        }
        this.catalogo.push(pokemon)
        console.log(`Pokémon: ${pokemon.nome.toUpperCase()}. Adicionado ao catálogo.`)
    }
    listar(): PokemonResumo[] {
        return this.catalogo
    }

    remover(id: number): void {
        const existe = this.catalogo.some(
            (item) => item.id === id
        )
        if (!existe) {
            console.log(`Pokémon com ID: ${id}, não encontrado para exclusão.`)
            return
        }

        this.catalogo = this.catalogo.filter(
            (item) => item.id !== id
        )
    }
}