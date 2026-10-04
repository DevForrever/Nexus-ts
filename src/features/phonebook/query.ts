import { useMutation, useQuery } from '@tanstack/react-query'
import { useInvalidate } from '../../hooks/useInvalidate'
import { getContacts, deleteContact, addContact } from './api'

export function usePhonebookQuery() {
    const { data } = useQuery({ queryKey: ['contacts'], queryFn: getContacts })
    const { invalidate } = useInvalidate()
    const onSuccess = () => invalidate(['contacts'])

    const { mutate: mutateDeleteContact } = useMutation({
        mutationFn: deleteContact,
        onSuccess
    })

    const { mutate: mutateAddContact } = useMutation({
        mutationFn: addContact,
        onSuccess
    })

    return { data, mutateAddContact, mutateDeleteContact }
}
