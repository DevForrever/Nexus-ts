import { type QueryKey, useQueryClient } from '@tanstack/react-query'

export const useInvalidate = () => {
    const client = useQueryClient()
    return (queryKey: QueryKey) => client.invalidateQueries({ queryKey })
}
