import { useQuery } from '@tanstack/react-query'
import { getNews } from './api'

export function useNewsQuery() {
    const { data, isPending, error } = useQuery({ queryKey: ['news'], queryFn: getNews })
    return { data, isPending, error }
}
