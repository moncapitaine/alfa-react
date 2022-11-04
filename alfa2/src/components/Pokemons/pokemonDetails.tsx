import { useEffect, useState } from 'react'
import {Pokemon} from './pokemonList'

export interface PokemonDetailsProps {
  pokemon: Pokemon 
}

export interface PokemonData {
  sprites: Record<string, string | undefined>
}
const loadDetail = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
export const PokemonDetails = (props: PokemonDetailsProps) => {
  const [spriteUrl, setSpriteUrl] = useState<string | undefined>(undefined)
  useEffect(() => {
    (async () => {
      const { sprites } = await loadDetail(props.pokemon.url)
      const notNullKey = Object.keys(sprites)
        .find((key) => sprites[key] !== null)      
      notNullKey && setSpriteUrl(sprites[notNullKey])
    })()
  }, [props.pokemon.url])

  return (<article>
    <h2>{props.pokemon.name}</h2>
    <img src={spriteUrl} alt={props.pokemon.name} />
    <p>{props.pokemon.url}</p>
    </article>)
}