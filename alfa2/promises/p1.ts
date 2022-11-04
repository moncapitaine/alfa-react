import fetch from 'node-fetch'

fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((value) => console.log('daten sind da', value))
