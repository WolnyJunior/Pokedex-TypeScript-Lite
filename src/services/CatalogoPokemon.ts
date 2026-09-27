import { PokemonResumo } from "../models/Pokemon";

export class Catalogopokemon {
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
    }
    listar():PokemonResumo[]{
        return this.catalogo
    }

    remover(id:number):void{
        const existe=this.catalogo.some(
            (item)=>item.id===id
        )
        if(!existe){
            console.log("Pokémon não encontrado para exclusão.")
            return
        }

        this.catalogo=this.catalogo.filter(
            (item)=>item.id!==id
        )
    }
}