import { PokemonResumo } from "../models/Pokemon.js";

export function formatarPokemon(
    pokemon: PokemonResumo
): string {
    return `
    --------------------------------
    ID: ${pokemon.id}
    Nome: ${pokemon.nome}
    Tipos: ${pokemon.tipos.join(", ")}
    Altura: ${pokemon.altura}
    Peso: ${pokemon.peso}
    `
}