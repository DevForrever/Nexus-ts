import axios from 'axios'

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' })

export const getPokemon = async () => {
    const { data } = await api.get('ditto')
    return data
}
