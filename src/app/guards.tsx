import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../features/auth/store'

export function Private({ redirectTo = '/' }) {
    const { isLoggedIn, isRefreshing } = useAuthStore()
    const shouldRedirect = !isLoggedIn && !isRefreshing

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />
}

export function Public({ redirectTo = '/' }) {
    const { isLoggedIn } = useAuthStore()

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />
}
