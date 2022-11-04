import { useEffect, useState } from "react"

export const PokemonList = () => {

  const [response, setResponse] = useState<unknown>(null)
  const loadPokemons = async () => {
    const responseValue = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log('pokemons sind da', responseValue)
    const data = await responseValue.json()
    setResponse(data)
  }

  useEffect(() => {
    loadPokemons()
  }, [])
  const c = JSON.stringify(response, null, 2)
  console.log(c)
  return (<ul>
    <li>Pokemon list</li>
    <code>
      {JSON.stringify(response)}
    </code>
  </ul>)
}