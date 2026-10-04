import { useAuthQuery } from './query'
import s from './Form.module.css'
import type { SubmitEvent } from 'react'

interface RegisterFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement
    email: HTMLInputElement
    password: HTMLInputElement
}

interface RegisterFormElement extends HTMLFormElement {
    readonly elements: RegisterFormElements
}

export function RegisterForm() {
    const { mutateRegister } = useAuthQuery()

    const handleSubmit = (e: SubmitEvent<RegisterFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        mutateRegister({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        })

        form.reset()
    }

    return (
        <form className={s.form} onSubmit={handleSubmit} autoComplete='off'>
            <h1 className={s.title}>Welcome!</h1>
            <label>Name</label>
            <input className={s.input} required name='name' />
            <label>Email</label>
            <input className={s.input} required type='email' name='email' />
            <label>Password</label>
            <input className={s.input} required type='password' name='password' />
            <button className={s.button} type='submit'>
                Register
            </button>
        </form>
    )
}

export function LoginForm() {
    const { mutateLogin } = useAuthQuery()

    const handleSubmit = (e: SubmitEvent<RegisterFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        mutateLogin({
            email: form.elements.email.value,
            password: form.elements.password.value
        })
        form.reset()
    }

    return (
        <form className={s.form} onSubmit={handleSubmit} autoComplete='off'>
            <h1 className={s.title}>Welcome!</h1>
            <label>Email</label>
            <input className={s.input} type='email' name='email' required />
            <label>Password</label>
            <input className={s.input} type='password' name='password' required />
            <button className={s.button} type='submit'>
                Log In
            </button>
        </form>
    )
}
