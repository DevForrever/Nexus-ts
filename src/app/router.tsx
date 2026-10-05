import { createBrowserRouter, Navigate, Outlet } from 'react-router'
import { LoginForm, RegisterForm } from '../features/auth/Form'
import { Layout } from '../features/auth/Layout'
import { App } from './App'
import { useAuthStore } from '../features/auth/store'

function Private({ redirectTo = '/' }) {
    const { isLoggedIn, isRefreshing } = useAuthStore()
    const shouldRedirect = !isLoggedIn && !isRefreshing

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />
}

function Public({ redirectTo = '/' }) {
    const { isLoggedIn } = useAuthStore()

    return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />
}

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                element: <Public redirectTo='/app' />,
                children: [
                    {
                        index: true,
                        Component: LoginForm
                    },
                    {
                        path: 'login',
                        Component: LoginForm
                    },
                    {
                        path: 'register',
                        Component: RegisterForm
                    }
                ]
            },
            {
                element: <Private redirectTo='/login' />,
                children: [
                    {
                        path: 'app',
                        Component: App
                    }
                ]
            }
        ]
    }
])
