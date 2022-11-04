import { useEffect } from 'react'
import {Pokemon} from './pokemonList'

export interface PokemonDetailsProps {
  pokemon: Pokemon 
}
const load = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
export const PokemonDetails = (props: PokemonDetailsProps) => {
  
  useEffect(() => {
    load(props.pokemon.url)
  }, [props.pokemon.url])

  return (<article>
    <h2>{props.pokemon.name}</h2>
    <p>{props.pokemon.url}</p>
    </article>)
}