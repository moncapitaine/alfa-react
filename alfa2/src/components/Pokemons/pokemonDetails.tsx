import {Pokemon} from './pokemonList'

export interface PokemonDetailsProps {
  pokemon: Pokemon 
}
export const PokemonDetails = (props: PokemonDetailsProps) => {
  return (<article>
    <h2>{props.pokemon.name}</h2>
    <p>{props.pokemon.url}</p>
    </article>)
}