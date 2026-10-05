import axios from 'axios'

const api = axios.create({ baseURL: 'https://6a0f3fac1736097c360b66bb.mockapi.io/' })

export type Contact = {
    name: string
    number: string
    id: string
}

type AddContact = Omit<Contact, 'id'>


export const getContacts = async (): Promise<Contact[]> => {
    const { data } = await api.get<Contact[]>('contacts')
    return data
}

export const addContact = async (contact: AddContact): Promise<AddContact> => {
    const { data } = await api.post<AddContact>('contacts', contact)
    return data
}

export const deleteContact = async (id: string): Promise<Contact> => {
    const { data } = await api.delete<Contact>(`contacts/${id}`)
    return data
}
