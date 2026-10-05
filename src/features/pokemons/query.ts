import { useQuery } from '@tanstack/react-query'
import { getPokemon } from './api'

export const usePokemonsQuery = (name: string) =>
    useQuery({ queryKey: ['pokemon', name], queryFn: () => getPokemon(name), enabled: Boolean(name) })
