import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
    name: string
    email: string
}

type Data = {
    user: User
    token: string
}

type AuthStore = {
    user: User | null
    token: string | null
    isLoggedIn: boolean
    isRefreshing: boolean
    refreshUser: (user: User) => void
    setData: (data: Data) => void
    clearData: () => void
}

const state = { user: null, token: null, isLoggedIn: false, isRefreshing: false }
const logged = { isLoggedIn: true, isRefreshing: false }

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            ...state,
            refreshUser: (user) => set({ user, ...logged }),
            setData: ({ user, token }) => set({ user, token, ...logged }),
            clearData: () => set(state)
        }),
        { name: 'auth', partialize: ({ token }) => ({ token }) }
    )
)
