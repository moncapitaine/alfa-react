import { useEffect, useState } from 'react'
import {Pokemon} from './pokemonList'

export interface PokemonDetailsProps {
  pokemon: Pokemon 
}

export interface PokemonData {
  sprites: Record<string, string | null>
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
      const data = await loadDetail(props.pokemon.url)
      const keys = Object.keys(data.sprites)
      const notNullKey = keys.find((key) => data.sprites[key] !== null)
      if (notNullKey !== undefined) {
        setSpriteUrl(data.sprites[notNullKey] ?? undefined)
      }
    })()
  }, [props.pokemon.url])

  return (<article>
    <h2>{props.pokemon.name}</h2>
    <img src={spriteUrl} alt={props.pokemon.name} />
    <p>{props.pokemon.url}</p>
    </article>)
}