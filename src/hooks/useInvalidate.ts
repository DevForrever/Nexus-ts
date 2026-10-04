import { type QueryKey, useQueryClient } from '@tanstack/react-query'

export function useInvalidate() {
    const client = useQueryClient()
    return (queryKey: QueryKey) => {
        client.invalidateQueries({ queryKey })
    }
}
