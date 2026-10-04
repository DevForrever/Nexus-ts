import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from './store'
import { register, login, logout } from './api'

export function useAuthQuery() {
    const { setData, clearData } = useAuthStore()

    const { mutate: mutateRegister } = useMutation({
        mutationFn: register,
        onSuccess: setData
    })

    const { mutate: mutateLogin } = useMutation({
        mutationFn: login,
        onSuccess: setData
    })

    const { mutate: mutateLogout } = useMutation({
        mutationFn: logout,
        onSuccess: clearData
    })

    return { mutateRegister, mutateLogin, mutateLogout }
}
