import { useQuery } from '@tanstack/react-query'
import { getPokemon } from './api'

export function usePokemonsQuery() {
    const { data, isPending, error } = useQuery({ queryKey: ['pokemon'], queryFn: getPokemon })
    return { data, isPending, error }
}
