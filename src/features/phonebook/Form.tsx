import { useId, useState, type SyntheticEvent } from 'react'
import { usePhonebookQuery } from './query'
import s from './Phonebook.module.css'

export function Form() {
    const nameId = useId()
    const numberId = useId()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const { data, mutateAddContact } = usePhonebookQuery()

    const handleAddContact = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            data?.some(
                (item) =>
                    item.name.trim().toLowerCase() === name.trim().toLowerCase() || item.number.trim() === number.trim()
            )
        ) {
            alert('That name or phone number already exists')
            return
        }

        mutateAddContact({ name, number })
        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={handleAddContact} className={s.form}>
            <label className={s.label} htmlFor={nameId}>
                Name
            </label>
            <input className={s.input} required value={name} onChange={(e) => setName(e.target.value)} id={nameId} />
            <label className={s.label} htmlFor={numberId}>
                Number
            </label>
            <input
                className={s.input}
                type='tel'
                required
                value={number}
                id={numberId}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button type='submit' className={s.contactButton}>
                Add Contact
            </button>
        </form>
    )
}
