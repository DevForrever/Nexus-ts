import { createBrowserRouter } from 'react-router'
import { LoginForm, RegisterForm } from '../features/auth/Form'
import { Layout } from '../features/auth/Layout'
import { App } from './App'
import { Private, Public } from './guards'

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
