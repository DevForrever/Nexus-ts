import { NavLink, Outlet } from 'react-router'
import { useAuthStore } from './store'
import { useAuthQuery } from './query'
import exit from '../../assets/exit.svg'
import s from './Layout.module.css'

export function Layout() {
    const { user, isLoggedIn } = useAuthStore()
    const { mutateLogout } = useAuthQuery()

    return (
        <div className={s.container}>
            <header>
                {isLoggedIn ? (
                    <div className={s.user}>
                        <h3>Welcome, {user?.name}</h3>
                        <button className={s.exit} type='button' onClick={() => mutateLogout()}>
                            <img src={exit} alt='' />
                        </button>
                    </div>
                ) : (
                    <nav className={s.links}>
                        <NavLink className={s.link} to='/register'>
                            Register
                        </NavLink>
                        <NavLink className={s.link} to='/login'>
                            Login
                        </NavLink>
                    </nav>
                )}
            </header>
            <Outlet />
        </div>
    )
}
