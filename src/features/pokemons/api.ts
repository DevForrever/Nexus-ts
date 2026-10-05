import axios from 'axios'

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' })

type Pokemon = {
    id: number
    name: string
    sprites: { front_default: string | null }
}

export const getPokemon = async (name: string): Promise<Pokemon> => {
    const { data } = await api.get<Pokemon>(name)
    return data
}
