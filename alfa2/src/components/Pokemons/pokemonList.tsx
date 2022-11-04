import { useEffect, useState } from "react"
import { PokemonDetails } from "./pokemonDetails"

export interface Pokemon {
  name: string
  url: string
}

export const PokemonList = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const loadPokemons = async () => {
    const responseValue = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    
    const data = await responseValue.json()
    console.log('pokemons sind da', data)
    setPokemonList(data.results)
  }

  useEffect(() => {
    loadPokemons()
  }, [])
  const c = JSON.stringify(pokemonList, null, 2)
  console.log(c)
  return (
    <>
      <h2>Pokemon List</h2>
      {pokemonList.map((pokemon) => <PokemonDetails pokemon={pokemon} />)}
  </>)
}