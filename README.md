# Pokédex TypeScript Lite

## Sobre o projeto
Aplicação de terminal desenvolvida em **Node.js** + **TypeScript** para consultar Pokémon através da 
[PokeApi](https://pokeapi.co) e gerenciar uma Pokédex local.

## Objetivo

Praticar os principais conceitos do Móduto 01

- Node.js
- JavaScript no back-end
- TypeScript
- Interfaces
- Funções tipadas
- Arrays
- Objetos
- JSON
- Métodos de array
- Classes
- Async/Await
- Fetch
- Tratamento de erros
- Github
- GitFlow
- Kanban/Trello

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TSX
- PokeApi
- Git
- Github

## Requisitos

- Node.js instalado
- npm instalado

## Instalação

### Clone o repositório:
git clone <https://github.com/WolnyJunior/Pokedex-TypeScript-Lite>

### Entre na pasta:
cd Pokedex-TypeScript-Lite

### Instale as dependências:
`npm install`

## Como executar

### Execute no termina, na pasta raiz do projeto:
`npm run dev` ou `npm run start`

## Funcionalidades
- Adicionar Pokémon ao catálogo local(Pokédex), pelo nome ou ID
- Listar Pokémons adicionados
- Remover Pokémon da Pokédex pelo ID
- Impedir cadastro duplo do mesmo Pokémon
- Armazenar no arquivo `pc_box.json`
- Tratamento de erros em relação a consulta na API
- Tratamento de erros local

## Exemplos de execução

    ======================
         MENU POKÉDEX
    ======================
    1 - Adicionar Pokémon
    2 - Listar Pokémon
    3 - Remover Pokémon
    0 - Sair
    ======================

Entrada testada:
Adicionar pokémon.

Saída obtida:
Pokémon: MISDREAVUS. Adicionado ao catálogo.

---

Entrada testada:
Adicionar pikachu novamente.

Saída obtida:
[ERRO] Este pokémon ja foi adicionado ao catálogo.

---

Entrada testada:
Busca pokémon inexistente:

Saída obtida:
[ERRO] Não foi encontrado Pokémon com esse Nome/Id: 

---

Entrada testada:
Remover pokémon.

Saída obtida:
O Pokémon com ID:1, foi excluído.
[SUCESSO] O Pokémon foi removido deste catálogo.

---

## Conceitos aplicados

### TypeScript
Utilização de tipagem estática, para definor quais dados cada função, variável e objeto deve receber ou retornar.

### Interface PokemonResumo
Utilizada para definir o formato de retorno dentro da aplicação.

### Fetch e async/await
Utilizada para fazer a requisição HTTP na PokeApi

### Tratamento de erros
A aplicação utiliza erros personalizados:
- APIError: Erros relacionados à PokeApi.
- LocalBoxError: Erros relacionados a Pokédex local.

### Métodos de array
Utilizados para manipulação dos dados obtidos da API.

### Classe CatalogoPokemon
Utilizada para gerenciar os Pokémons aemazaenados em memória, e fazer os teste iniciais na API.

## Organização do Kanban
Acesse o kanban no `Trello` através do link >>> (https://trello.com/b/Bnkn6oYE/pokedex-typescript-lite)

## Branches utilizada
- main
- develop
- feat/pokedex
- docs/readme
