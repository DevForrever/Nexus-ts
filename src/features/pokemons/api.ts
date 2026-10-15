import axios from 'axios'
import { z } from 'zod'

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' })

const PokemonSchema = z.object({
    id: z.number(),
    name: z.string(),
    sprites: z.object({
        front_default: z.string().nullable()
    })
})

type Pokemon = z.infer<typeof PokemonSchema>

export const getPokemon = async (name: string): Promise<Pokemon> => {
    const { data } = await api.get<unknown>(name)
    return PokemonSchema.parse(data)
}
