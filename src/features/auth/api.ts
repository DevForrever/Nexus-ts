import axios from 'axios'

const api = axios.create({ baseURL: 'https://connections-api.goit.global/' })

const setAuthHeader = (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    api.defaults.headers.common.Authorization = ''
}

interface Register {
    name: string
    email: string
    password: string
}
interface Login {
    email: string
    password: string
}

export const register = async (credentials: Register) => {
    const res = await api.post('users/signup', credentials)
    setAuthHeader(res.data.token)
    return res.data
}

export const login = async (credentials: Login) => {
    const res = await api.post('users/login', credentials)
    setAuthHeader(res.data.token)
    return res.data
}

export const logout = async () => {
    await api.post('users/logout')
    clearAuthHeader()
}

export const refreshUser = async (token: string) => {
    if (!token) {
        throw new Error('User was not logged in on the previous session')
    }
    setAuthHeader(token)
    const res = await api.get('users/current')
    return res.data
}
